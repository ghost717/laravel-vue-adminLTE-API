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
    Route::get('posts', 'PostController@index');
    Route::get('post/{id}', 'PostController@show');
    Route::post('post', 'PostController@store');
    Route::put('post', 'PostController@store');
    Route::delete('post/{id}', 'PostController@destroy');

    Route::get('users', 'UsersController@index');
    Route::get('user/{id}', 'UsersController@show');
    Route::post('user', 'UsersController@store');
    Route::put('user', 'UsersController@store');
    Route::delete('user/{id}', 'UsersController@destroy');
});
