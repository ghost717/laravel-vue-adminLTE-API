<?php

use App\Task;

use Illuminate\Database\Seeder;

class TasksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $task = new Task;
        $task->user_id = 1;
        $task->dev_id = 1;
        $task->title = "First task";
        $task->comment = "This is first admin task.";
        $task->save();

        $task = new Task;
        $task->user_id = 1;
        $task->dev_id = 2;
        $task->title = $task->title = "Second task";
        $task->comment = "This is first user task.";
        $task->save();
    }
}
