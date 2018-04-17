<?php
header("Access-Control-Allow-Origin:*");
$conn = new mysqli("localhost","root","","db_note");
$sql = "SELECT * FROM notes";

$query = $conn->query($sql);
if($query->num_rows > 0){
    $data = array();
    while($row = $query->fetch_assoc()){
        $data[] = $row;
    }

}
echo json_encode($data);