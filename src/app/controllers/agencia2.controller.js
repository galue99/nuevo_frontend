'use strict';

angular.module('fenixApp')
    .controller('Agencia2Ctrl', function ($scope, $log, $modal) {

        $scope.navbarBrand = {
            text: 'Fenix-navigation',
            state: 'incidents'
        };
        
        $scope.showDate = function () {
            $scope.date = 0;
            $scope.date = Date.now();
            return $scope.date;
        };

        $scope.agencia = {
            agentes: [{
                id: 1,
                nombre: "00001",
                estado: "No Disponible",
                nombre_unidad: "Lorem ipsun",
                status: "not-active",
                alias: "Lorem ipsum dolor.",
                agencia: "Lorem ipsum dolor.",
                sector: "Lorem ipsum dolor.",
                mision: "Not Active"
            }, {
                id: 2,
                nombre: "00002",
                estado: "No Disponible",
                nombre_unidad: "Lorem ipsun",
                status: "not-status",
                alias: "Lorem ipsum dolor.",
                agencia: "Lorem ipsum dolor.",
                sector: "Lorem ipsum dolor.",
                mision: "Not Status"
            }, {
                id: 3,
                nombre: "00003",
                estado: "No Disponible",
                nombre_unidad: "Lorem ipsun",
                status: "activated",
                alias: "Lorem ipsum dolor.",
                agencia: "Lorem ipsum dolor.",
                sector: "Lorem ipsum dolor.",
                mision: "Active"
            }, {
                id: 4,
                nombre: "00004",
                estado: "No Disponible",
                nombre_unidad: "Lorem ipsun",
                status: "not-active",
                alias: "Lorem ipsum dolor.",
                agencia: "Lorem ipsum dolor.",
                sector: "Lorem ipsum dolor.",
                mision: "Not Active"
            }]
        }

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
  })

.controller('ModalInstanceCtrl', function ($scope, $modalInstance, $log) {

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});