'use strict';

cs142App.controller('ActivityFeedbackController', ['$scope', '$routeParams', '$http', '$location',  
  function ($scope, $routeParams, $http, $location) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    
    $scope.currentActivity = window.bedtimeModels.activityById($routeParams.activityId);
    $scope.feedback = {'goodBedtime': '', 'tryAgain': '', 'other': ''};

    $scope.toggleApproval = function(question, direction) {
      var selectedColor = "#3A45FF";
      if(direction === 'Down'){
        document.getElementById(question + direction).style.color = selectedColor;
        document.getElementById(question + 'Up').style.color = "black";
      } else {
        document.getElementById(question + direction).style.color = selectedColor;
        document.getElementById(question + 'Down').style.color = "black";        
      }
      $scope.feedback[question] = direction;
    };

    $scope.sendFeedbackEmail = function() {
        var emailBody = '';
        emailBody += 'Good before bedtime? ' + $scope.feedback['goodBedtime'] + '. ';
        emailBody += 'Would try again? ' + $scope.feedback['tryAgain'] + '. ';
        emailBody += 'Other feedback: ' + $scope.feedback['other'];
        window.open('mailto:amcnary.su@gmail.com?subject=BedtimeFeedback&body=' + emailBody);
          // $http({
          //   method: 'GET',
          //   url: 'send',
          //   params: {feedback: $scope.feedback}
          // }).then(function successCallback(response) {
          //     // this callback will be called asynchronously
          //     // when the response is available
          // }, function errorCallback(response) {
          //   // called asynchronously if an error occurs
          //   // or server returns response with an error status.
          // });
          alert('Thanks for your time! Please send the prefilled email from your mail client.');
          $location.path('/');
      }

  }]);
