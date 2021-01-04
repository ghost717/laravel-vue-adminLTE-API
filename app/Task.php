<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $guarder = ['user_id'];

    protected $fillable = ['user_id', 'dev_id', 'title', 'comment', 'priority', 'deadline', 'completed'];

    public function author()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function dev()
    {
        return $this->belongsTo(User::class, 'dev_id', 'id');
    }
}
