'use strict';

angular.module('appSvgIconSets', ['ngMaterial'])
  .controller('DemoCtrl', function($scope) {})
  .config(function($mdIconProvider) {
    $mdIconProvider
       .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
       .defaultIconSet('img/icons/sets/core-icons.svg', 24);
});

cs142App.controller('LikedActivitiesController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.main.navigateTo('likedActivities');
    $scope.params = $routeParams;
    $scope.activities = $scope.main.likedActivities; 
}]);
