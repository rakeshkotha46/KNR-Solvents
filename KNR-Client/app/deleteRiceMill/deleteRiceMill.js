'use strict';

angular.module('myApp.deleteRiceMill', ['ngRoute'])
.controller('deleteRiceMillCtrl', ['$scope','$http','$window',function($scope,$http,$window) {
	
	  $scope.deleteRiceMillDetails = function()
	     {
		  $http.delete("http://localhost:8080/KNR/deleteRiceMillDetails/"+$window.sessionStorage.riceMillId).success(function(response){
			  return response;
		  }).error(function(error){
	 			return error;
	 		});
		  
	     }
	  
	  $scope.deleteRiceMillDetails();
	
}]);