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
  'myApp.deleteRiceMill'
])
.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.when('/view1', {
	    templateUrl: 'view1/view1.html',
	    controller: 'View1Ctrl'
	  })
	  .when('/view2', {
	    templateUrl: 'view2/view2.html',
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
	  .otherwise({
		  redirectTo : '/home'
  });
}]);
