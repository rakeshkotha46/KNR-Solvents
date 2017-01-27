'use strict';

angular.module('myApp.eidtRiceMill', ['ngRoute'])
.controller('editRiceMillCtrl', ['$scope','$http','$window',function($scope,$http,$window) {
	
	
	 $scope.getRiceMillDetails = function()
     {
		 var that = this;
    	 $http.get("http://localhost:8080/KNR/getRiceMillDetails/"+$window.sessionStorage.riceMillId).success(function(response){
    		 
    		 that.newRiceMillName = response.name;
    		 that.newRegistrationNumber = response.riceMillRegNum;
    		 that.newAddress = response.address;
    		 that.newCity = response.city;
    		 that.newState = response.state;
    		 that.newZipcode = response.zipCode;
    		 that.newOwnerName = response.ownerName;
    		 that.newPrimaryContact = response.primaryContact;
    		 that.newSecondaryContact = response.secondaryContact;
    		 that.newActiveFl = response.activeFl;
    		
	 			return response;
	 			
	 		}).error(function(error){
	 			return error;
	 		});
    	 
     }
	 
	 
	  $scope.updateRiceMillDetails = function()
	 {
		 var data=
			{
				 
			"riceMillId":$window.sessionStorage.riceMillId,
			"riceMillRegNum":this.newRegistrationNumber,
			"name":this.newRiceMillName,
			"address":this.newAddress,
			"city":this.newCity,
			"state":this.newState,
			"zipCode":this.newZipcode,
			"ownerName":this.newOwnerName,
			"primaryContact":this.newPrimaryContact,
			"secondaryContact":this.newSecondaryContact,
			"activeFl":this.newActiveFl
			}
		 $http.post("http://localhost:8080/KNR/updateRiceMillDetails",data).success(function(response){
			 $window.location.href = '/index.html#!/view1';
			}).error(function(error){
				return error;
			});
    	 
	 }
	  
	
	 
$scope.getRiceMillDetails();
}]);