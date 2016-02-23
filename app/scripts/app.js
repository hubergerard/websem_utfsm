'use strict';

/**
 * @ngdoc overview
 * @name websemApp
 * @description
 * # websemApp
 *
 * Main module of the application.
 */
angular
  .module('websemApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/graphs', {
        templateUrl: 'views/graph.html',
        controller: 'graphCtrl',
        controllerAs: 'graph'
      })
	  .when('/contact', {
        templateUrl: 'views/contact.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
