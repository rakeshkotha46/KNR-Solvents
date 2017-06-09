'use strict';

angular.module('myApp.logout', ['ngRoute'])

.controller('logoutCtrl', ['$scope','$window','$http','$rootScope', function($scope,$window,$http,$rootScope) {
	
	$scope.logout = function()
	{
		$window.localStorage.clear();
		$rootScope.authorizedUser = false;
		$scope.logoutModalInstance.close();
		$window.location.href = "/index.html#!/home";
	}
	
	$scope.cancel = function()
	{
		$scope.logoutModalInstance.close();
	}
	
}]);