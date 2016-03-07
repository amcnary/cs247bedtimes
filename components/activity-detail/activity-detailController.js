'use strict';
cs142App.controller('ActivityDetailController', ['$scope', '$routeParams', '$interval',
  function ($scope, $routeParams, $interval) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    
    $scope.currentActivity = window.bedtimeModels.activityById($routeParams.activityId);

    $scope.timerStarted = false;
    $scope.timeLeft  = $scope.currentActivity.duration * 60;
    $scope.initialTime = $scope.timeLeft;
    $scope.timeLeftLabel = parseInt($scope.timeLeft/60) + ' minutes and ' + ($scope.timeLeft % 60) + ' seconds';
    $scope.startTimer = function() {
      $scope.timerStarted = true;
    }

    $interval( function() {
                  if($scope.timerStarted) {
                    $scope.timeLeft  -= 1;
                    $scope.timeLeftLabel = parseInt($scope.timeLeft/60) + ' minutes and ' + ($scope.timeLeft % 60) + ' seconds'; 
                    if($scope.timeLeft <= 0){
                      alert("Time's up!");
                      document.getElementById('timeLeftLabel').style.display = "none";
                    }                    
                  }
                }, 1000, 90000);

  }]);
