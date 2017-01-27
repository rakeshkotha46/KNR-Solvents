'use strict';

angular.module('myApp.Registration', ['ngRoute'])

.controller('RegistrationCtrl', ['$scope','$http','$window',function($scope,$http,$window) {
	$scope.addRegistration = function(){
		var data=
				{
				"firstName":this.firstName,
				"lastName":this.lastName,
				"userName":this.username,
				"password":this.password,
				
				}
		
		$http.post("http://localhost:8080/KNR/addRegistration",data).success(function(response){
			$window.location.href="/index.html#!/login";
		}).error(function(error){
			return error;
		});
		}
	

}]);