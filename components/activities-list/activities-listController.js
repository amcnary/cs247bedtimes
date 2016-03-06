'use strict';

angular.module('appSvgIconSets', ['ngMaterial'])
  .controller('DemoCtrl', function($scope) {})
  .config(function($mdIconProvider) {
    $mdIconProvider
       .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
       .defaultIconSet('img/icons/sets/core-icons.svg', 24);
});

cs142App.controller('ActivitiesListController', ['$scope', '$routeParams',
  function($scope, $routeParams) {

    $scope.params = $routeParams;
    $scope.activities = window.bedtimeModels.activitiesFiltered( $routeParams.duration, 
                                                                  $routeParams.activityLevel, 
                                                                  $routeParams.activityTag1);

  }]);
