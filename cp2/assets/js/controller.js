angular.module('myApp', [])
.controller('AppCtl', function($scope) {
    $scope.clickHandler = function() {
        $scope.isHidden = !$scope.isHidden;
    };
});
