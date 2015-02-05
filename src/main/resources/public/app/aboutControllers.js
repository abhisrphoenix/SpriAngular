

var about = angular.module('about',[]);

about.controller('AboutControllers', ['$scope','$http', function($scope,$http) {
  $scope.greeting =  $http.get('../userHome').
  success(function(data) {
      $scope.greeting = data;
  });
  
}]);