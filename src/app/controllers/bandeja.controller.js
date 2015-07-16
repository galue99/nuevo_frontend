'use strict';
angular.module('fenixApp')
    .controller('BandejaCtrl', function ($scope, $log) {

        $scope.navbarBrand = {
            text: 'Fenix-navigation',
            state: 'incidents'
        };
        
        $scope.showDate = function () {
            $scope.date = 0;
            $scope.date = Date.now();
            return $scope.date;
        };
        
        $scope.tab  = 1;

        $scope.selectTab = function(tab){
            this.tab = tab;
        };

        angular.forEach($scope.awesomeThings, function(awesomeThing) {
            awesomeThing.rank = Math.random();
        });

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
  });
