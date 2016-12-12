<?php 
require "config.php";
$data = json_decode(file_get_contents("php://input"));
$id = $data->id;
$query = "delete from tbuser where id='$id'";
if(mysqli_query($con,$query)){
	echo "Delete Conplete";
}else{
	echo "Error";
}

?>