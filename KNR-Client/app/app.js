'use strict';
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.grid',
  'ui.bootstrap',
  'ui.bootstrap.tpls',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.Home',
  'myApp.eidtRiceMill',
  'myApp.deleteRiceMill',
  'myApp.addOilMill',
  'myApp.Registration',
  'myApp.Login',
  'myApp.logout'
])

.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  //$locationProvider.html5Mode(true);
  $routeProvider.when('/riceMillList', {
	    templateUrl: 'components/RiceMillList/riceMillList.html',
	    controller: 'View1Ctrl'
	  })
	  .when('/addRiceMill', {
	    templateUrl: 'components/AddRiceMill/addRiceMill.html',
	    controller: 'View2Ctrl'
	  })
	  .when('/home', {
	    templateUrl: 'commons/Home/Home.html',
	    controller: 'HomeCtrl'
	  })
	  .when('/editRiceMill', {
	    templateUrl: 'components/editRiceMill/editRiceMill.html',
	    controller: 'editRiceMillCtrl'
	  })
	  .when('/deleteRiceMill', {
		  templateUrl: 'components/deleteRiceMill/deleteRiceMill.html',
		    controller: 'deleteRiceMillCtrl'
	  
	  })
	  .when('/addOilMill', {
		  templateUrl: 'components/AddOilMill/addOilMill.html',
		    controller: 'AddOilMillCtrl'
	  
	  })
	  .when('/registration', {
		  templateUrl: 'commons/Registration/Registration.html',
			  controller: 'RegistrationCtrl'
	  
	  })
	  .when('/login', {
		  templateUrl: 'commons/Login/Login.html',
		  controller: 'LoginCtrl'
	  
	  })
	  
	  .otherwise({
		  redirectTo : '/home'
  });
  
}]);
