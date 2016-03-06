'use strict';


cs142App.controller('ActivityPollController', ['$scope',
    function ($scope) {
        $scope.main.title   = 'Users';
        $scope.activityTypes = ["physical", "creative", "outdoors", "musical", "educational", "funny", "teamwork-related"]
        $scope.params       = {"duration": "30", "activityLevel": "high"};

        $scope.params.tags         = ['physical'];
        $scope.updateTags          = function(tagToAdd) {
            // Will use for multiple tags:
            // if($scope.params.tags.length < 2 && $scope.params.tags.indexOf(tagToAdd) === -1){
                if($scope.params.tags[0] !== 'any')
                    document.getElementById($scope.params.tags[0]).style.color = 'black';
                $scope.params.tags[0] = tagToAdd;
                document.getElementById(tagToAdd).style.color = '#3A45FF';
            // }
        }
    }]);

