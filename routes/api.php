<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ChatBotController;
use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\CourseUserController;
use App\Http\Controllers\Api\StudentsController;
use App\Http\Controllers\Api\UserController;
use App\Http\Middleware\Sanctum;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Rotas públicas para cursos
Route::get('public/courses', [CourseController::class, 'index']);
Route::get('public/courses/{id}', [CourseController::class, 'show']);

Route::post('login',[AuthController::class,'login']);
Route::middleware([Sanctum::class])->group(function () {

    Route::post('logout',[AuthController::class,'logout']);

    Route::resource('users', UserController::class);

    Route::resource('students', StudentsController::class);

    Route::resource('enrollments', CourseUserController::class);

    Route::resource('courses', CourseController::class);
    Route::post('courses/{course}/enroll',[CourseController::class,'enroll']);
    Route::post('courses/{course}/topics',[CourseController::class,'addTopic']);
    Route::get('mycourse',[CourseController::class,'mycourse']);


});
