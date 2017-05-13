'use strict';

angular.module('myApp.Home', ['ngRoute','ngDialog'])

.controller('HomeCtrl', ['$window','$scope','$uibModal', function($window,$scope,$uibModal) {
	
	

	$scope.authorizedUser = false;

	 $scope.checkLogin= function (id)
     {
    	 if($window.localStorage.registrationId)
    	 {
    		 $scope.authorizedUser = true;
    	 }
    	 
     }
	 
	 $scope.logout = function()
	{
		 var logoutPopup = $uibModal.open({ 
			 templateUrl: 'commons/Home/LogoutPopup.html' ,
				 controller: 'myApp.logoutPopup'
					 });
			 $window.localStorage.clear();
			 $scope.authorizedUser = false;
			 $window.location.href="/index.html#!/home";
      }
	
     $scope.Login = function()
	 {
		 $window.location.href="/index.html#!/login";
	 }
     
     
     
	 $scope.checkLogin();
}]);