'use strict';

angular.module('fenixApp')
    .controller('AgenciaCtrl', function ($scope, $log, $modal) {

        $scope.navbarBrand = {
            text: 'Fenix-navigation',
            state: 'incidents'
        };
        
        $scope.abc = function(object){
            if (object.name == 'disponible'){
                object.clase = 'col-sm-10';
            }else{
                object.clase = 'col-sm-10'
            };
        }
               
        $scope.bomberos = {
            name:  'no-disponible',
            clase: 'col-sm-10'
        };

        $scope.salud = {
            name:  'disponible',
            clase: 'col-sm-10'
        };

        $scope.policia = {
            name:  'no-disponible',
            clase: 'col-sm-10'
        };

        $scope.transito = {
            name:  'disponible',
            clase: 'col-sm-10'
        };


        $scope.showDate = function () {
            $scope.date = 0;
            $scope.date = Date.now();
            return $scope.date;
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
  })

.controller('ModalInstanceCtrl', function ($scope, $modalInstance, $log) {


    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});