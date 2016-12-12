<?php 
require "config.php";
//$con = mysqli_connect("localhost","root","12345678","anjstest");
$data = json_decode(file_get_contents("php://input"));
if(count($data)>0){
	$fname = mysqli_real_escape_string($con,$data->fName);
	$lname = mysqli_real_escape_string($con,$data->lName);
	$id = $data->id; //ส่งค่าไอดีมาอัพเดท
	$btnName = $data->btnName; //สถาณะของปุ่ม
	if($btnName == "Insert"){
		$query = "insert into tbuser(fname,lname) values('$fname','$lname')";
		  if(mysqli_query($con,$query)){
		    echo "Data Inserted";
		 }else{
		    echo "Error";
	   }
	}
	if($btnName == "Update"){
		$query = "update tbuser set fname='$fname', lname='$lname' where id='$id'";
		  if(mysqli_query($con,$query)){
		    echo "Update Complete";
		 }else{
		    echo "Error";
	   }
	}
	
}
?>