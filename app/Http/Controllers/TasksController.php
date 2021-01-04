<?php

namespace App\Http\Controllers;

use Auth;
use App\Task;
use App\Http\Resources\TasksResource;

use Illuminate\Http\Request;

class TasksController extends Controller
{
    public function index()
    {
        if (Auth::user()->hasRole('admin')){
            return TasksResource::collection(Task::with(['author', 'dev'])->orderBy('id', 'DESC')->paginate(20));
        } else {
            return TasksResource::collection(Task::with(['author', 'dev'])->where('dev_id', '=', Auth::id())->orderBy('id', 'DESC')->paginate(20));
        }
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            // 'dev_id' => 'required',
            // 'completed' => 'required',
            // 'priority' => 'required',
        ]);

        $task        = $request->isMethod('put') ? Task::findOrFail($request->id) : new Task;
        $task->id    = $request->input('id');
        $task->user_id = Auth::user()->id;//$request->user_id;//
        $task->dev_id = $request->dev_id;
        $task->title = $request->title;
        $task->comment = $request->comment;
        $task->completed = $request->completed;
        $task->priority = $request->priority;
        $task->deadline = $request->deadline; //date("Y-m-d");

        if ($task->save()) {
            return new TasksResource($task);
        }
    }

    public function show($id)
    {
        $task = Task::findOrFail($id);

        return new TasksResource($task);
    }

    public function destroy($id)
    {
        $task = Task::findOrFail($id);

        if ($task->delete()) {
            return new TasksResource($task);
        }
    }
}
