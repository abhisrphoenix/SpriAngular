/*function Hello($scope, $http) {
    $http.get('../userHome').
        success(function(data) {
            $scope.greeting = data;
        });
}*/

'use strict';

/* App Module */

var resonanceApp = angular.module('resonanceApp', [
  'ngRoute',  'about', 'horiz','myApp'
])

.controller('MainController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
})
resonanceApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
 $routeProvider.
      when('/About', {
        templateUrl: 'views/aboutUS.html', 
        controller: 'AboutControllers'
      }).
      when('/Graph', {
          templateUrl: 'views/graph.html',
          directive: 'barsChart'
        }).
      when('/Horiz', {
        templateUrl: 'views/horiz.html',
        controller: 'HorizControllers'
      }); 
}]); 