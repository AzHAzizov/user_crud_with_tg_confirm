<?php

declare(strict_types=1);

use App\Controllers\UsersController;
use Symfony\Component\Dotenv\Dotenv;
use Slim\Factory\AppFactory;

chdir(dirname(__DIR__));
require 'vendor/autoload.php';



if (file_exists('.env.example')) {
    $dotenv = new Dotenv();
    $dotenv->load(dirname(__DIR__) . '/.env');
}


print_r(getenv());
die;


(function () {
    $config = require 'config/config.php';
    $app = new \Slim\App($config);
    (require 'config/routes.php')($app);


    $app->run();
})();
