'use strict';

angular.module('fenixApp')
    .controller('DespachadorCtrl', function ($scope, $log, $modal) {

        $scope.tab         = 1;
        $scope.tabs        = 1;
        $scope.show        = 1;

        $scope.showNode = function(data) {
            return data.name;
        };

        $scope.isClient = function(selectedNode) {

            if (selectedNode == undefined) {
                return false;
            }

            if (selectedNode.device_name != undefined) {
                return true;
            }

            return false;
        };

        $scope.selectTab = function(tab){
            this.tab = tab;
        };

        $scope.selectTabs = function(tabs){
            this.tabs = tabs;
        };

        $scope.toggle = function(show) {
            this.show = show;
            console.log($scope.show);
        };

        $scope.animationsEnabled = true;

        $scope.open = function (size) {

            var modalInstance = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size
               /* resolve: {
                    items: function () {
                        return $scope.items;
                }
            }*/
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };

        angular.forEach($scope.awesomeThings, function(awesomeThing) {
            awesomeThing.rank = Math.random();
        });
        // gets the template to ng-include for a table row / item
$scope.model = {
        contacts: [{
            id: 1,
            name: "Ben",
            age: 28
        }, {
            id: 2,
            name: "Sally",
            age: 24
        }, {
            id: 3,
            name: "John",
            age: 32
        }, {
            id: 4,
            name: "Jane",
            age: 40
        }],
        selected: {}
    };

    // gets the template to ng-include for a table row / item
    $scope.getTemplate = function (contact) {
        if (contact.id === $scope.model.selected.id) return 'edit';
        else return 'display';
    };

    $scope.editContact = function (contact) {
        $scope.model.selected = angular.copy(contact);
    };

    $scope.saveContact = function (idx) {
        console.log("Saving contact");
        $scope.model.contacts[idx] = angular.copy($scope.model.selected);
        $scope.reset();
    };

    $scope.reset = function () {
        $scope.model.selected = {};
    }; 
});
