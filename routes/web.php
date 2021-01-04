<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();
Route::get('/posts/{post}', 'PostController@single');
Route::get('/home', 'HomeController@index')->name('home');
Route::get('/', 'PostController@all');

Route::get('/admin/{any}', 'AdminController@index')->where('any', '.*');

// Route::prefix('api')->group(function () { //for dev
Route::prefix('api')->middleware('auth')->group(function () {
    Route::get('tasks', 'TasksController@index');
    Route::get('tasks/{id}', 'TasksController@show');
    Route::post('tasks', 'TasksController@store');
    Route::put('tasks', 'TasksController@store');
    Route::delete('tasks/{id}', 'TasksController@destroy');

    Route::get('posts', 'PostController@index');
    Route::get('posts/{id}', 'PostController@show');
    Route::post('posts', 'PostController@store');
    Route::put('posts', 'PostController@store');
    Route::delete('posts/{id}', 'PostController@destroy');
    // Route::delete('posts', 'PostController@destroy');

    Route::get('users', 'UsersController@index');
    Route::get('users/{id}', 'UsersController@show');
    Route::post('users', 'UsersController@store');
    Route::put('users', 'UsersController@store');
    Route::delete('users/{id}', 'UsersController@destroy');
});
