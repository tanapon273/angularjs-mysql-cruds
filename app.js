var app = angular.module("myApp",[]);
app.controller("userController",function($scope,$http){
	$scope.btnName = "Insert"; //สถาณะของปุ่ม
	$scope.insertData = function(){
		if($scope.fName == null){
		   swal("กรุณาป้อนชื่อ","Error","warning");
		   return false;
			
		}
		
		if($scope.lName == null){
		   swal("กรุณาป้อนนามสกุล","Error","warning");
		   return false;	
		}else{
		   $http.post("insert.php",
		   {'fName':$scope.fName,'lName':$scope.lName,'btnName':$scope.btnName,'id':$scope.id}).then(function(data){
		   swal("Data Complete", "Insert Complete Form","success");
		   $scope.fName = null; //โหลดใหม่แสดงค่าว่าง
		   $scope.lName = null;
		   $scope.btnName = "Insert";
		   $scope.displayData(); //บันทึกแล้วแสดงทันที	 
	     });
			
	   }
	}
	$scope.displayData = function(){
		$http.get("select.php").then(function(response){
			$scope.names = response.data.records;
		});
	}
	$scope.deleteData = function(id){
		$scope.id = id;
		swal({
			title:"Are you sure?",
			text:"Confirm Delete Record!",
			type:"warning",
			showCancelButton:true,
			confirmButtonColor:"#DD6B55",
			confirmButtonText:"Yes, delete it!",
			closeOnConfirm:false
		},
			function(){
			$http.post('delete.php',{'id':$scope.id}).then(function(data){
				swal("Deleted!","Your record has been deleted.","success");
				$scope.displayData();
			});
			
		});
	}
	
	$scope.updateData = function(id,fname,lname){
		$scope.id = id;
		$scope.fName = fname;
		$scope.lName = lname;
		$scope.btnName = "Update";
		
	}
});
