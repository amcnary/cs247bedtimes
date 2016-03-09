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
            when('/activityFeedback/:activityId', {
                templateUrl: 'components/activity-feedback/activity-feedbackTemplate.html',
                controller: 'ActivityFeedbackController'
            }).
            when('/activityFeedback/:activityId', {
                templateUrl: 'components/activity-feedback/activity-feedbackTemplate.html',
                controller: 'ActivityFeedbackController'
            }).
            when('/weeklyDashboard', {
                templateUrl: 'components/activity-dashboard/activity-dashboardTemplate.html',
                controller: 'ActivityDashboardController'
            }).
            when('/weeklyDashboardMenu', {
                templateUrl: 'components/activity-dashboard-menu/activity-dashboard-menuTemplate.html',
                controller: 'ActivityDashboardMenuController'
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


        $scope.main.toggleFilter = function() {
            $scope.main.filterOpen = !$scope.main.filterOpen;
        }

        var activitiesCount = window.bedtimeModels.activitiesCount();

        $scope.navigateTo = function(navBarButtonClass) {
            $scope.main.quickEvent = (navBarButtonClass === 'quickEvent');
            document.getElementById('selected').id = '';
            document.getElementsByClassName(navBarButtonClass)[0].id = "selected";
            if(navBarButtonClass === 'quickEvent') {
                $scope.main.randomActivityId = Math.floor(Math.random() * activitiesCount) + 1;
                $location.path('activity/' + $scope.main.randomActivityId);
            }
        }

        $scope.main.resetActivities = function() {
          var weeklyActivities = [];
          for(var day = 0; day < 7; day++){
            var randomActivityId = Math.floor(Math.random() * activitiesCount) + 1;
            weeklyActivities.push(window.bedtimeModels.activityById(randomActivityId));
          }
          $scope.main.weeklyActivities = weeklyActivities;
        }

    }]);
