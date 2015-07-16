'use strict';

angular.module('fenixApp')
    .controller('SupervisorCtrl', function ($scope, $log, $modal) {
    	
        $scope.navbarBrand = {
            text: 'Fenix-navigation',
            state: 'incidents'
        };

        $scope.tab = 1;
        $scope.showDate = function () {
            $scope.date = 0;
            $scope.date = Date.now();
            return $scope.date;
        };

        $scope.selectTab = function(tab){
            this.tab = tab;
        };

        $scope.bandeja = {
            incidents: [{
                id: 1,
                agency: "policial",
                type: "Robo",
                priorida: "alta",
                address: "Lorem Ipsun",
                date: "2:30pm"
            }, {
                id: 2,
                agency: "bomberil",
                type: "Incendio",
                priorida: "alta",
                address: "Lorem Ipsun",
                date: "2:30pm"
            }, {
               id: 3,
                agency: "salud",
                type: "Herido",
                priorida: "media",
                address: "Lorem Ipsun",
                date: "2:30pm"
            }, {
                id: 4,
                agency: "transito",
                type: "Accidente de Transito",
                priorida: "baja",
                address: "Lorem Ipsun",
                date: "2:30pm"
            }]
        }
    $scope.value = 'test';

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
});