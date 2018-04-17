<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:content-type");
header("Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS");

if($_SERVER['REQUEST_METHOD'] == "POST"){
    $conn = new mysqli("localhost","root","","db_note");

    $data = json_decode(file_get_contents('php://input'));

    $sql = "INSERT INTO notes(note,des,status) VALUES('{$data->title}','{$data->desc}','{$data->status}')";
    $res = $conn->query($sql);

    $id = $conn->insert_id;

    $sql = "SELECT * FROM notes WHERE id = $id";
    $res = $conn->query($sql);

    $data = [];
    if($res->num_rows > 0){
        $row = $res->fetch_assoc();
        $data = $row;
    }

    echo json_encode($data);
}