'use strict';

angular.module('myApp.view2', ['ngRoute'])
.controller('View2Ctrl', ['$scope','$http','$window',function($scope,$http,$window) {
		$scope.addRiceMill = function(){
			var data=
					{
					"riceMillRegNum":this.newRegistrationNumber,
					"name":this.newRiceMillName,
					"address":this.newAddress,
					"city":this.newCity,
					"state":this.newState,
					"zipCode":this.newZipcode,
					"ownerName":this.newOwnerName,
					"primaryContact":this.newContactNumber,
					"secondaryContact":this.newContactNumber2,
					"activeFl":this.newActiveFl
					}
			
			$http.post("http://localhost:8080/KNR/addCompany/"+$window.sessionStorage.registrationId,data).success(function(response){
				return response;
			}).error(function(error){
				return error;
			});
			
		}
		$scope.resetRiceMillDetails = function(){
			this.newRegistrationNumber="";
			this.newRiceMillName="";
			this.newAddress="";
			this.newCity="";
			this.newState="";
			this.newZipcode="";
			this.newOwnerName="";
			this.newPrimaryContact="";
			this.newSecondaryContact="";
			this.newActiveFl="";
		}

	
}]);