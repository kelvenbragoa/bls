<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\CourseUser;
use App\Models\Role;
use App\Models\Topic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $searchQuery = request('query') ?? request('q');
        $categoria = request('categoria');

        $courses = Course::query()
            ->where('is_active', true)
            ->with('topics')
            ->when($searchQuery, function ($query, $searchQuery) {
                $query->where(function($q) use ($searchQuery) {
                    $q->where('title', 'like', "%{$searchQuery}%")
                      ->orWhere('description', 'like', "%{$searchQuery}%");
                });
            })
            ->when($categoria, function ($query, $categoria) {
                // Implementar filtro por categoria quando necessário
                // $query->whereHas('category', function($q) use ($categoria) {
                //     $q->where('slug', $categoria);
                // });
            })
            ->orderBy('title', 'asc')
            ->paginate(12);

        // Transform courses data
        $courses->getCollection()->transform(function ($course) {
            return [
                'id' => $course->id,
                'title' => $course->title,
                'description' => $course->description,
                'short_description' => $course->short_description,
                'duration' => $course->duration,
                'slug' => $course->slug,
                'cover_image_url' => $course->cover_image_url,
                'topics_count' => $course->topics->count(),
                'rating' => rand(40, 50) / 10,
                'reviews_count' => rand(50, 200),
            ];
        });

        return response()->json($courses);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $roles = Role::where('id', '!=', 3)->get();

        return response()->json([
            'roles' => $roles,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $data = $request->all();
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'duration' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'video' => 'nullable|file|mimes:mp4,avi,mov|max:30000',
        ]);

        $imageName = null;
        if ($request->hasFile('image')) {
            $imageName = $request->file('image')->store('course_images', 'public');
        }
        $videoName = null;
        if ($request->hasFile('video')) {
            $videoName = $request->file('video')->store('course_videos', 'public');
        }

        $course = Course::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'duration' => $data['duration'],
            'cover_image' => $imageName,
            'video_url' => $videoName,
            // 'slug' => str_slug($data['title']),
        ]);
        return response()->json($course);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $course = Course::with('topics')->find($id);

        return response()->json($course);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        $course = Course::find($id);
        $roles = Role::all();

        return response()->json([
            'user' => $course,
            'roles' => $roles,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $data = $request->all();
        $product = Course::find($id);
        $product->update($data);
        return response()->json($product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        // $product = Course::find($id);
        // $product->delete();
        // return true;
    }
    public function enroll(Request $request, Course $course)
    {
        // Logic to enroll a user in the course
        // This could involve attaching the user to the course in a pivot table
        // or any other logic specific to your application.
        return response()->json(['message' => 'User enrolled successfully']);
    }

    public function addTopic(Request $request, Course $course)
    {
        // Logic to add a topic to the course
        // This could involve creating a new topic and associating it with the course
        $data = $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'order' => 'nullable|integer',
            'duration' => 'nullable|string',

            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'video' => 'nullable|file|mimes:mp4,avi,mov|max:30000',
        ]);

        $imageName = null;
        if ($request->hasFile('image')) {
            $imageName = $request->file('image')->store('course_images', 'public');
        }
        $videoName = null;
        if ($request->hasFile('video')) {
            $videoName = $request->file('video')->store('course_videos', 'public');
        }

        $topic = Topic::create([
            'course_id' => $course->id,
            'title' => $data['title'],
            'content' => $data['content'],
            'order' => $data['order'] ?? 0,
            'thumbnail' => $imageName,
            'video_url' => $videoName,
            'duration' => $data['duration'] ?? null,
            // 'slug' => str_slug($data['title']),
        ]);

        // $topic = $course->topics()->create($data);

        return response()->json($topic);
    }

    public function mycourse(Request $request)
    {
        $user = Auth::id();

        $courseIds = CourseUser::where('user_id', $user)->pluck('course_id');

        $courses = Course::whereIn('id', $courseIds)->get();

        return response()->json(["courses" => $courses]);
    }
}
