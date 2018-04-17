<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:content-type");

if($_SERVER['REQUEST_METHOD'] == "POST"){
    $conn = new mysqli("localhost","root","","db_note");

    $data = json_decode(file_get_contents('php://input'));

    $sql = "DELETE from notes WHERE id = {$data->id}";
    $res = $conn->query($sql);
}