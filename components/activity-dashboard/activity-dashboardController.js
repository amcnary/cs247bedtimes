'use strict';
cs142App.controller('ActivityDashboardController', ['$scope', '$routeParams', '$interval', '$location',
  function ($scope, $routeParams, $interval, $location) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    $scope.weekdays = ['Sunday', 
                    'Monday', 
                    'Tuesday', 
                    'Wednesday', 
                    'Thursday', 
                    'Friday', 
                    'Saturday'];

    var activitiesCount = window.bedtimeModels.activitiesCount();

    if($scope.main.weeklyActivities.length === 0){
      $scope.main.resetActivities();
    }

    $scope.currentActivity = $scope.main.weeklyActivities[0];

    $scope.main.newActivity = function(dayIndex){
      var weeklyActivities = $scope.main.weeklyActivities;
      var randomActivityId = Math.floor(Math.random() * activitiesCount) + 1;
      weeklyActivities[dayIndex] = window.bedtimeModels.activityById(randomActivityId);
      $scope.main.weeklyActivities = weeklyActivities;
    };  

    $scope.main.goToActivity = function(dayOfWeek){
      $location.path('/activityForCalendar/' + dayOfWeek);
    }

    $scope.showActivityDetails = function(activityId) {
    } 
    $scope.showActivityDetails = [false, false, false, false, false, false, false];

    $scope.exportToPdf = function() {
      console.log('downloading');
      alert('Creating PDF now!');
    };

  }]);
