'use strict';
cs142App.controller('ActivityDetailController', ['$scope', '$routeParams', '$interval',
  function ($scope, $routeParams, $interval) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    
    $scope.main.currentActivity = window.bedtimeModels.activityById($routeParams.activityId);

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
