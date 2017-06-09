'use strict';

angular.module('myApp.Home', [ 'ngRoute', 'ngDialog' ])

.controller(
		'HomeCtrl',
		[ '$window', '$scope', '$uibModal', '$rootScope',
				function($window, $scope, $uibModal, $rootScope) {

					$rootScope.authorizedUser = false;

					/*
					 * $scope.checkLogin = function(id) { if
					 * ($window.localStorage.registrationId) {
					 * $scope.authorizedUser = true; }
					 *  }
					 */

					$scope.logoutPopup = function() {
						$scope.logoutModalInstance = $uibModal.open({

							templateUrl : 'commons/logout/logout.html',
							controller : 'logoutCtrl',
							size : 'md',
							scope : $scope
						});
					}

					$scope.loginPopup = function() {
						$scope.loginModalInstance = $uibModal.open({
							templateUrl : 'commons/Login/Login.html',
							controller : 'LoginCtrl',
							scope : $scope,
							size : 'md'
						});
					}

				} ]);