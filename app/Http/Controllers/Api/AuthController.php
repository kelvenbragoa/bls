<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function login(Request $request){
        $loginUserData = $request->validate([
            'email'=>'required|string|email',
            'password'=>'required|min:8'
        ]);

        if (Auth::attempt($loginUserData)) {
            $user = User::where('email',$loginUserData['email'])->first();
            $token = $user->createToken($user->name.'-AuthToken')->plainTextToken;
            return response()->json([
                'user'=>$user,
                'access_token' => $token,
            ]);
        }else{
            return response()->json([
                'message' => 'Usuario/Password incorrectos'
            ],401);
        }
        
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json([
          "message"=>"logged out"
        ]);
    }

     public function register(){

     }


    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
