'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/basetest1', {templateUrl: 'partials/basetest1.html', controller: 'BaseCtrl1'});
  $routeProvider.when('/theme', {templateUrl: 'partials/theme.html', controller: 'theme'});
  $routeProvider.when('/carousel', {templateUrl: 'partials/carousel.html', controller:'carousel'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
