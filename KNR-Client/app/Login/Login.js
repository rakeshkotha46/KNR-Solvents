'use strict';

angular.module('myApp.Login', ['ngRoute'])

.controller('LoginCtrl', ['$scope','$window','$http', function($scope,$window,$http) {
	
	$scope.login=function(){
	
		 $http.get("http://localhost:8080/KNR/getRegistrationDetails/" +$scope.username)
		
		 .success(function(response){
			 if($scope.password==response.password){
				 $window.sessionStorage.registrationId = response.registrationId;
				 $window.location.href="/index.html#!/home";
			 }
		 })
		 .error(function(error){
	 			return error;
	 		});
	}

}]);