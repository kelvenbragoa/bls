<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\CourseUser;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class CourseUserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $searchQuery = request('query');

            $users = CourseUser::query()
            ->when(request('query'),function($query,$searchQuery){
                $query->whereHas('user',function($query) use ($searchQuery){
                    $query->where('name','like',"%{$searchQuery}%");
                })->orWhereHas('course',function($query) use ($searchQuery){
                    $query->where('title','like',"%{$searchQuery}%");
                });
            })
            ->with(['user', 'course'])
            ->orderBy('id','desc')
            ->paginate();

            return response()->json($users);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $users = User::where('role_id', 3)->get();
        $courses = Course::get();


        return response()->json([
            'users' => $users,
            'courses' => $courses,
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
            'user_id'=>'required|string',
            'course_id'=>'required|string',
            'enrolled_at'=>'required|date',
            'expires_at'=>'required|date',
        ]);

        if (CourseUser::where('user_id', $data['user_id'])
            ->where('course_id', $data['course_id'])
            ->where('status', 'active')
            ->exists()) {
            return response()->json(['message' => 'User is already enrolled in this course.'], 400);
        }

        $enrollment = CourseUser::create([
            'user_id' => $data['user_id'],
            'course_id' => $data['course_id'],
            'enrolled_at' => $data['enrolled_at'],
            'expires_at' => $data['expires_at'],
        ]);
        return response()->json($enrollment);
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $user = User::
        with('role')
        ->find($id);

        return response()->json($user);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        $user = User::find($id);
        $roles = Role::all();

        return response()->json([
            'user' => $user,
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
        $product = User::find($id);
        $product->update($data);
        return response()->json($product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        // $product = User::find($id);
        // $product->delete();
        // return true;
    }
}
