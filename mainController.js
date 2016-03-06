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
            otherwise({
                redirectTo: '/activityPoll'
            });
    }]);

cs142App.controller('MainController', ['$scope', 
    function ($scope) {
        $scope.main = {};
        $scope.main.title = {title: 'Bedtime Activities'};
        $scope.main.location = 'Viewing All Users';
    }]);
