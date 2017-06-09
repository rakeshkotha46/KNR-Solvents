'use strict';

angular.module('myApp.Login', ['ngRoute'])

.controller('LoginCtrl', ['$scope','$window','$http','$rootScope', function($scope,$window,$http,$rootScope) {
	
	$scope.login=function(){
	
		 $http.get("http://localhost:8080/KNR/getRegistrationDetails/" +$scope.username)
		
		 .success(function(response){
			 if($scope.password==response.password){
				 $window.sessionStorage.registrationId = response.registrationId;
				 $window.localStorage.registrationId = response.registrationId;
				 $scope.loginModalInstance.close();
				 $rootScope.authorizedUser=true;
				 $window.location.href="/index.html#!/home";
				
			 }
		 })
		 .error(function(error){
	 			return error;
	 		});
	}
	
	$scope.cancel = function()
	{
		$scope.loginModalInstance.close();
	}
}]);