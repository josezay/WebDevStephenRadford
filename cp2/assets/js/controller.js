angular.module('myApp', [])
.controller('AppCtl', function($scope) {
    $scope.contacts = [
        {
            name: 'John Doe',
            phone: '01234567890',
            email: 'john@example.com'
        },
        {
            name: 'Karan Bromwich',
            phone: '09876543210',
            email: 'karan@email.com'
        }
    ];

    $scope.clickHandler = function() {
        $scope.isHidden = !$scope.isHidden;
    };
});
