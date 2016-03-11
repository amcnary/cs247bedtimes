'use strict';

var cs142App = angular.module('cs142App', ['ngRoute', 'ngMaterial']);

cs142App.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/activityPoll', {
                templateUrl: 'components/activity-poll/activity-pollTemplate.html',
                controller: 'ActivityPollController'
            }).
            when('/activities/:duration/:activityLevel/:activityTag1/:activityTag2', {
                templateUrl: 'components/activities-list/activities-listTemplate.html',
                controller: 'ActivitiesListController'
            }).
            when('/activity/:activityId', {
                templateUrl: 'components/activity-detail/activity-detailTemplate.html',
                controller: 'ActivityDetailController'
            }).
            when('/activityForCalendar/:dayOfWeek', {
                templateUrl: 'components/activity-detail-for-calendar/activity-detail-for-calendarTemplate.html',
                controller: 'ActivityForCalendarDetailController'
            }).
            when('/weeklyDashboard', {
                templateUrl: 'components/activity-dashboard/activity-dashboardTemplate.html',
                controller: 'ActivityDashboardController'
            }).
            when('/weeklyDashboardMenu', {
                templateUrl: 'components/activity-dashboard-menu/activity-dashboard-menuTemplate.html',
                controller: 'ActivityDashboardMenuController'
            }).
            when('/likedActivities', {
                templateUrl: 'components/liked-activities/liked-activitiesTemplate.html',
                controller: 'LikedActivitiesController'
            }).
            otherwise({
                redirectTo: '/weeklyDashboard'
            });
    }]);

cs142App.controller('MainController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.main = {};
        $scope.main.title = {title: 'Bedtime Activities'};
        $scope.main.location = '';
        $scope.main.quickEvent = true;
        $scope.main.weeklyActivities = [];
        $scope.main.filterOpen = false;
        var activitiesCount = window.bedtimeModels.activitiesCount();
        
        $scope.main.likedActivities = window.bedtimeModels.likedActivities();
        $scope.main.toggleActivityLike = function(activity) {
          var index = $scope.main.likedActivities.indexOf(activity);
          if(index === -1) {
            $scope.main.likedActivities.push(activity);
            document.getElementById('activityDetailLike').style.color = "#F8BE23";
          } else {
            $scope.main.likedActivities.splice(index, 1);
            document.getElementById('activityDetailLike').style.color = "black";
          }
        };
        
        $scope.main.toggleFilter = function() {
            $scope.main.filterOpen = !$scope.main.filterOpen;
        };

        var activitiesCount = window.bedtimeModels.activitiesCount();

        $scope.main.navigateTo = function(navBarButtonClass) {
            document.getElementById('selected').id = '';
            document.getElementsByClassName(navBarButtonClass)[0].id = "selected";
            $scope.main.quickEvent = (navBarButtonClass === 'quickEvent');
            if(navBarButtonClass === 'quickEvent') {
                $scope.main.randomActivityId = Math.floor(Math.random() * activitiesCount) + 1;
                $location.path('activity/' + $scope.main.randomActivityId);
            }
        };

        $scope.setActivity = function(day, activityId) {
            $scope.main.weeklyActivities[day] = window.bedtimeModels.activityById(activityId);
        };
        
        $scope.main.newActivity = function(dayIndex){
          var weeklyActivities = $scope.main.weeklyActivities;
          var randomActivityId = Math.floor(Math.random() * activitiesCount) + 1;
          weeklyActivities[dayIndex] = window.bedtimeModels.activityById(randomActivityId);
          $scope.main.weeklyActivities = weeklyActivities;
        };  

        $scope.main.resetActivities = function() {
          var weeklyActivities = [];
          for(var day = 0; day < 7; day++){
            var randomActivityId = Math.floor(Math.random() * activitiesCount) + 1;
            weeklyActivities.push(window.bedtimeModels.activityById(randomActivityId));
          }
          $scope.main.weeklyActivities = weeklyActivities;
        };
        $scope.main.resetActivities();

    }]);
