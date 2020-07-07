(function() {
	'use strict';

	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope){

       $scope.food="";
       $scope.message=" ";
       $scope.state="black";

	   $scope.checkIfTooMuch= function(){
	   	$scope.state="green";
	   	if($scope.food){
	   	  var count = countTotalDishes($scope.food);
	   	  if (count>=1 && count<= 3){
             $scope.message = "Enjoy!";
	   	  } 
	   	  else if (count>3){
	         $scope.message = "Too much!";
	      } else {
	      	 $scope.message = "Please enter data first";
	      	 $scope.state="red";
	      }
	    } else {
	     	$scope.message = "Please enter data first";
	     	$scope.state="red";
	    }
	};

       function countTotalDishes(string){
       	  var countWords=0;
       	  var arrStrings = string.split(",");
       	  for (var i = 0; i<arrStrings.length;i++) {
       	  	if (arrStrings[i]){
       	  		if (arrStrings[i]===" "){
       	  		} 
       	  		else {
       	  	       countWords++;
       	  	    }
       	    }
       	  }
          return countWords;
       }

	}
})();