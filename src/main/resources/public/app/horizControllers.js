

var horiz = angular.module('horiz',[]);

horiz.controller('HorizControllers', ['$scope','$http', function($scope,$http) {
  $scope.greeting =  $http.get('../userHome').
  success(function(data) {
      $scope.greeting = data;
  });
  
}]);

