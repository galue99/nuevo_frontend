'use strict';

angular.module('fenixApp')
    .controller('AyudaCtrl', function ($scope, $log, $modal) {

        $scope.showDate = function () {
            $scope.date = 0;
            $scope.date = Date.now();
            return $scope.date;
        };

        $scope.rol = function (size) {
            console.log('abc');
            console.log(size);
            var modalInstance = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                controller: 'ModalRoleCtrl',
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

    .controller('ModalRoleCtrl', function ($scope, $modalInstance, $log) {

        $scope.addModules = [
                { name: "Opera",              maker: "(Opera Software)",        ticked: true  },
                { name: "Internet Explorer",  maker: "(Microsoft)",             ticked: false },
                { name: "Firefox",            maker: "(Mozilla Foundation)",    ticked: true  },
                { name: "Safari",             maker: "(Apple)",                 ticked: false },
                { name: "Chrome",             maker: "(Google)",                ticked: true  },
                { name: "Other",              maker: "(Other)",                 ticked: true  }
            ]; 

        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    });