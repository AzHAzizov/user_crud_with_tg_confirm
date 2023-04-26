<?php

namespace App\Controllers;

use App\Controller;
use App\Model\User;
use Zend\Diactoros\Response\JsonResponse;

class UsersController extends  Controller
{

    public function handle()
    {
        $usersList = User::getWithPosts();
        return new JsonResponse($usersList);
    }


    public function index()
    {
        return new JsonResponse(User::findAll());
    }


    public function update()
    {
        $request_body = file_get_contents('php://input');
        $data = json_decode($request_body, true);
        if ($data['params']) {
            $userData = $data['params'];

            $email = $userData['email'];
            $id = $userData['id'];
            $login = $userData['login'];

            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                return new JsonResponse(['error' => [
                    "email" => "Is incorrect Email address"
                ]]);
            }


            return new JsonResponse(['success' => "Job with ID 19238912783 sended to Telegram BOT please confirm it or reject"]);
        }
    }
}
