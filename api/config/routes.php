<?php

use App\Controllers\UsersController;

return function ($app) {
    $app->get('/users', UsersController::class . ':index');
    $app->get('/posts', UsersController::class . ':handle');
    $app->get('/posts_category', UsersController::class . ':handle');
    $app->get('/users_posts', UsersController::class . ':handle');
    $app->post('/user/', UsersController::class . ':update');
};
