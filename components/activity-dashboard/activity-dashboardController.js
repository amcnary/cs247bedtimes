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

    $scope.showingActivity = false;
    $scope.main.currentActivity = $scope.main.weeklyActivities[0];
    $scope.hideActivity = function() {
      $scope.showingActivity = false;
      document.getElementById('activityOverlayWindow').style.visibility = "hidden";
    }
    $scope.showActivity = function(activityIndex) {
      $scope.main.currentActivity = $scope.main.weeklyActivities[activityIndex];
      $scope.showingActivity = true;
      $scope.main.currentActivityLink = '/bedtime.html#/activity/' + $scope.main.currentActivity.id;
      console.log($scope.main.currentActivityLink);
    }

    $scope.main.newActivity = function(dayIndex){
      var weeklyActivities = $scope.main.weeklyActivities;
      var randomActivityId = Math.floor(Math.random() * activitiesCount) + 1;
      weeklyActivities[dayIndex] = window.bedtimeModels.activityById(randomActivityId);
      $scope.main.weeklyActivities = weeklyActivities;
    };  

    $scope.main.goToActivity = function(activityId){
      $location.path('/activity/' + activityId);
    }

    $scope.showActivityDetails = function(activityId) {

    } 

    $scope.showActivityDetails = [false, false, false, false, false, false, false];






    $scope.main.timerStarted = false;
    $scope.main.timeLeft  = $scope.main.currentActivity.duration * 60;
    $scope.main.initialTime = $scope.main.timeLeft;
    $scope.main.timeLeftLabel = parseInt($scope.main.timeLeft/60) + ' minutes and ' + ($scope.main.timeLeft % 60) + ' seconds';
    $scope.startTimer = function() {
      $scope.main.timerStarted = true;
    }

    $interval( function() {
                  if($scope.main.timerStarted) {
                    $scope.main.timeLeft  -= 1;
                    $scope.main.timeLeftLabel = parseInt($scope.main.timeLeft/60) + ' minutes and ' + ($scope.main.timeLeft % 60) + ' seconds'; 
                    if($scope.main.timeLeft <= 0){
                      alert("Time's up!");
                      document.getElementById('timeLeftLabel').style.display = "none";
                    }                    
                  }
                }, 1000, 90000);
  }]);
