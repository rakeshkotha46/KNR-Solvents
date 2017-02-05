'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.grid',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.Home',
  'myApp.eidtRiceMill',
  'myApp.deleteRiceMill',
  'myApp.addOilMill',
  'myApp.Registration',
  'myApp.Login'
])

.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  //$locationProvider.html5Mode(true);
  $routeProvider.when('/riceMillList', {
	    templateUrl: 'RiceMillList/riceMillList.html',
	    controller: 'View1Ctrl'
	  })
	  .when('/addRiceMill', {
	    templateUrl: 'AddRiceMill/addRiceMill.html',
	    controller: 'View2Ctrl'
	  })
	  .when('/home', {
	    templateUrl: 'Home/Home.html',
	    controller: 'HomeCtrl'
	  })
	  .when('/editRiceMill', {
	    templateUrl: 'editRiceMill/editRiceMill.html',
	    controller: 'editRiceMillCtrl'
	  })
	  .when('/deleteRiceMill', {
		  templateUrl: 'deleteRiceMill/deleteRiceMill.html',
		    controller: 'deleteRiceMillCtrl'
	  
	  })
	  .when('/addOilMill', {
		  templateUrl: 'AddOilMill/addOilMill.html',
		    controller: 'AddOilMillCtrl'
	  
	  })
	  .when('/registration', {
		  templateUrl: 'Registration/Registration.html',
			  controller: 'RegistrationCtrl'
	  
	  })
	  .when('/login', {
		  templateUrl: 'Login/Login.html',
		  controller: 'LoginCtrl'
	  
	  })
	  
	  .otherwise({
		  redirectTo : '/login'
  });
  
}]);
