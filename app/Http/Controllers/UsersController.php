<?php

namespace App\Http\Controllers;

use Auth;
use App\User;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\UsersResource;

class UsersController extends Controller
{

    public function index()
    {
        $users = User::with('posts')->orderBy('id', 'DESC')->paginate(5);

        return UsersResource::collection($users);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        $user        = $request->isMethod('put') ? User::findOrFail($request->id) : new User;
        $user->id    = $request->input('id');
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request['password']);

        if ($user->save()) {
            return new UsersResource($user);
        }
    }

    public function show(User $user)
    {
        return new UsersResource($user);
    }

    public function destroy(User $user)
    {
        $user->delete();

        return response()->json(null, 204);
    }
}
