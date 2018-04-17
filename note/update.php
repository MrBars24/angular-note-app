<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:content-type");

if($_SERVER['REQUEST_METHOD'] == "POST"){
    $conn = new mysqli("localhost","root","","db_note");

    $data = json_decode(file_get_contents('php://input'));

    $sql = "UPDATE notes set note = '{$data->title}', des = '{$data->desc}', status='{$data->status}'
    WHERE id = {$data->id}";

    $res = $conn->query($sql);

    $sql = "SELECT * FROM notes WHERE id = {$data->id}";
    $res = $conn->query($sql);

    $data = [];
    if($res->num_rows > 0){
        $row = $res->fetch_assoc();
        $data = $row;
    }

    echo json_encode($data);
}