'use strict';

angular.module('fenixApp')
    .controller('GeoreferenciadoCtrl', function ($scope, $log) {
        $scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };
        $scope.options = {scrollwheel: false};
    });