'use strict';

angular.module('fenixApp')
    .controller('FichaCtrl', function ($scope) {

        $scope.navbarBrand = {
            text: 'eeh-navigation',
            state: 'incidents'
        };

        $scope.show = true;
        $scope.date = Date.now();
        $scope.toggle = function() {
            $scope.show = !$scope.show;
        };

        $scope.showDate = function () {
            $scope.date = 0;
            $scope.date = Date.now();
            return $scope.date;
        };

        $scope.submitForm = function() {
            $scope.submitted = true;
            // check to make sure the form is completely valid
            if ($scope.userForm.$valid) {
                alert('our form is amazing');
            }
        };
});
