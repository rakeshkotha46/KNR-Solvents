'use strict';

angular.module('myApp.view1', [])
.controller('View1Ctrl', ['$scope','$http','$window',function($scope,$http,$window) {
	$scope.myData = [];
	
	    
	$scope.gridOptions = {
						data : 'myData',
						columnDefs : [ {
							field : 'riceMillId',
							
							displayName : 'No:'
						}, {
							field : 'riceMillRegNum',
							displayName : 'Registration No:'
						},{
							field : 'name',
							displayName : 'RiceMill Name'
						} ,{
							field : 'address',
							displayName : 'Address'
						},{
							field : 'city',
							displayName : 'City'
						},{
							field : 'state',
							displayName : 'State'
						},{
							field : 'zipCode',
							displayName : 'Zipcode'
						},{
							field : 'ownerName',
							displayName : 'Owner'
						},{
							field : 'primaryContact',
							displayName : 'Contact1'
						},{
							field : 'secondaryContact',
							displayName : 'Contact2'
						},{
							field : 'activeFl',
							displayName : 'Active'
						},{
							displayName : 'Action',
							field : " ",
							cellTemplate : function(row){
								return '<div style="text-align: center;"><a ng-click="grid.appScope.getRiceMillDetails(row.entity.riceMillId)" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-pencil"></span> </a>'+
								'&nbsp; &nbsp; <a ng-click="grid.appScope.deleteRiceMillDetails(row.entity.riceMillId)" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash"></span> </a></div>';
							}
						}]
	};

		     $scope.getCompanies = function(){
		 		$http.get("http://localhost:8080/KNR/getAllRiceMills").success(function(response){
		 			return $scope.myData = response;
		 		}).error(function(error){
		 			return error;
		 		});
		 		}
		     
		     $scope.searchCompany = function()
		     {
		    	 if(this.companyName==""){
		    		 $scope.getCompanies();
		    	 }
		    	 else{
		    	 $http.get("http://localhost:8080/KNR/searchRiceMill/"+this.companyName).success(function(response){
			 			return $scope.myData =response;
			 		}).error(function(error){
			 			return error;
			 		});
		    	 }
		     }
		     
		     $scope.getRiceMillDetails= function (id)
		     {
		    	 $window.sessionStorage.riceMillId=id;
		    	 $window.location.href = '/index.html#!/editRiceMill'; 
		    	 
		     }
		    	 
		     $scope.deleteRiceMillDetails= function (id)
		     {
		    	 $window.sessionStorage.riceMillId=id;
		    	 $window.location.href = '/index.html#!/deleteRiceMill'; 
		    	 
		     }

		 	$scope.getCompanies();
	
}]);

