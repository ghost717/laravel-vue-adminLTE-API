<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\User;
use App\Role;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User;
        $user->name = 'admin';
        $user->email = 'admin@jwba.pl';
        $user->password = bcrypt('password');
        $user->save();
        $user->roles()->attach(Role::where('name', 'admin')->first());

        $admin = new User;
        $admin->name = 'User';
        $admin->email = 'user@jwba.pl';
        $admin->password = bcrypt('password');
        $admin->save();
        $admin->roles()->attach(Role::where('name', 'user')->first());
    }
}
