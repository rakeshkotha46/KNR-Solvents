'use strict';

angular.module('myApp.addOilMill', ['ngRoute'])
.controller('AddOilMillCtrl', ['$scope','$http',function($scope,$http) {
	$scope.states = ["TG","AP","DL","TN","KR","GJ","J&K","HR","BR","CH"];
	 $scope.newState = '';
	    $scope.$watch('newState',function(){
	        console.log($scope.newState);
	        if($scope.newState=="TG"){
	            $scope.cities=["hyd" , "nlg	","war"];
	        }else{
	        	$scope.cities=[""];
	        }
	        
	        });
		$scope.addOilMill = function(){
			var data=
					{
					"OilMillRegNum":this.newRegistrationNumber,
					"name":this.newOilMillName,
					"address":this.newAddress,
					"city":this.newCity,
					"state":this.newState,
					"zipCode":this.newZipcode,
					"ownerName":this.newOwnerName,
					"primaryContact":this.newContactNumber,
					"secondaryContact":this.newContactNumber2,
					"activeFl":this.newActiveFl
					}
			
			$http.post("http://localhost:8080/KNR/addOilMill",data).success(function(response){
				return response;
			}).error(function(error){
				return error;
			});
			
		}
		$scope.resetOilMillDetails = function(){
			this.newRegistrationNumber="";
			this.newOilMillName="";
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