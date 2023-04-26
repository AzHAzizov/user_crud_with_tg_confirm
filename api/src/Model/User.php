<?php

namespace App\Model;

use App\Db;
use App\Model;

class User extends Model
{
    public const TABLE = 'users';

    public int $id;
    public string $login;
    public int $role_id;


    public static function getWithPosts()
    {
        $query = "select users.id as id, users.name as name, posts.name as role from users left join roles on users.role_id = roles.id ";
        return Db::instance()->query($query, self::class);
    }
}
