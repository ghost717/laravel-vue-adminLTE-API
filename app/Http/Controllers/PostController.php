<?php

namespace App\Http\Controllers;

use Auth;
use App\Post;

use Illuminate\Http\Request;
use App\Http\Resources\PostResource;

class PostController extends Controller
{
    public function all()
    {
        return view('landing', [
            'posts' => Post::latest()->paginate(5)
        ]);
    }

    public function single(Post $post)
    {
        return view('single', compact('post'));
    }

    public function index()
    {
        if (Auth::user()->hasRole('admin')){
            return PostResource::collection(Post::with(['author'])->orderBy('id', 'DESC')->paginate(20));
        } else {
            return PostResource::collection(Post::with(['author'])->where('user_id', '=', Auth::id())->orderBy('id', 'DESC')->paginate(20));
        }
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            'user_id' => 'required',
            // 'image' => 'mimes:jpeg,png,jpg,gif,svg',
        ]);

        $post        = $request->isMethod('put') ? Post::findOrFail($request->id) : new Post;
        $post->id    = $request->input('id');
        // $post->user_id = Auth::user()->id;
        $post->user_id = $request->user_id;

        if ($request->hasFile('image')) {
            $imagePath = request('image')->store('/uploads/posts', 'public');
            // $image = $request->file('image');
            // $name = str_slug($request->title).'.'.$image->getClientOriginalExtension();
            // $destinationPath = public_path('/uploads/posts');
            // $imagePath = $destinationPath . "/" . $name;
            // $image->move($destinationPath, $name);
            $post->image = $imagePath;
        }

        $post->title = $request->title;
        $post->body = $request->body;

        if ($post->save()) {
            return new PostsResource($post);
        }
    }

    public function show(Post $post)
    {
        return new PostResource($post);
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return response()->json(null, 204);
    }
}
