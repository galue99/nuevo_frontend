  'use strict';
 
  angular.module('fenixApp')

    .controller('MainCtrl',  function ($scope, sweet) {

        $scope.tab = 1;

        $scope.isOpen = false;

        $scope.selectTab = function (tab) {
            this.tab = tab;
        };

        $scope.selectTabs = function (tabs) {
            this.tabs = tabs;
        };
});