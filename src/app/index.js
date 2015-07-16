'use strict';

angular.module('fenixApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'eehNavigation', 'hSweetAlert', 'isteven-multi-select', 'uiGmapgoogle-maps'])
  .config(function ($stateProvider, $urlRouterProvider, eehNavigationProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/views/main/main.html',
            controller: 'MainCtrl'
        })
        .state('incidents', {
            url: '/incidents',
            templateUrl: 'app/views/ficha/ficha.html',
            controller: 'FichaCtrl'
        })
        .state('dispatcher', {
            url: '/dispatcher',
            templateUrl: 'app/views/despachador/despachador.html',
            controller: 'DespachadorCtrl'
        })
        .state('agencia', {
            url: '/agencia',
            templateUrl: 'app/views/agencia/agencia.html',
            controller: 'AgenciaCtrl'
        })
        .state('agencia1', {
            url: '/agencia1',
            templateUrl: 'app/views/agencia/agencia1.html',
            controller: 'Agencia1Ctrl'
        })
        .state('agencia2', {
            url: '/agencia2',
            templateUrl: 'app/views/agencia/agencia2.html',
            controller: 'Agencia2Ctrl'
        })
        .state('bandeja', {
            url: '/bandeja',
            templateUrl: 'app/views/bandeja/bandeja.html',
            controller: 'BandejaCtrl'
        })
        .state('supervisor', {
            url: '/supervisor',
            templateUrl: 'app/views/supervisor/index.html',
            controller: 'SupervisorCtrl'
        })
        .state('georeferenciacion', {
            url: '/georeferenciacion',
            templateUrl: 'app/views/georeferenciacion/index.html',
            controller: 'GeoreferenciadoCtrl'
        })
        .state('modal', {
            url: '/modal',
            templateUrl: 'app/views/modal/modal.html',
            controller: 'ModalCtrl'
        })
        .state('addUser', {
            url: '/addUser',
            templateUrl: 'app/views/administrador/index.html',
            controller: 'AdminCtrl'
        })
        .state('editUser', {
            url: '/editUser',
            templateUrl: 'app/views/administrador/edit.html',
            controller: 'FichaCtrl'
        })
        .state('deleteUser', {
            url: '/deleteUser',
            templateUrl: 'app/views/administrador/edit.html',
            controller: 'FichaCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'app/views/login/login.html',
            controller: 'FichaCtrl'
        })
        .state('404', {
            url: '/404',
            templateUrl: 'app/views/404/404.html',
            controller: 'FichaCtrl'
        })
        .state('500', {
            url: '/500',
            templateUrl: 'app/views/500/500.html',
            controller: 'FichaCtrl'
        })
        .state('ayuda', {
            url: '/ayuda',
            templateUrl: 'app/views/ayuda/index.html',
            controller: 'AyudaCtrl'
        });

    /* menu nav*/
    eehNavigationProvider
        .iconBaseClass('fa')
        .menuItem('nav.home', {
            text: 'Home',
            state: 'home',
            iconClass: 'fa-home fa-1x ic'
        })
        .menuItem('nav.incidents', {
            text: 'Incidents',
            state: 'incidents',
            iconClass: 'fa-phone fa-1x ic'
        })
        .menuItem('nav.dispatcher', {
            text: 'Dispatcher',
            state: 'dispatcher',
            iconClass: 'fa-laptop fa-1x ic'
        })
        .menuItem('nav.tray', {
            text: 'Incidents Tray',
            state: 'bandeja',
            iconClass: 'fa-inbox fa-1x ic'
        })

        .menuItem('nav.agency', {
            text: 'Agency',
            iconClass: 'fa-pencil-square-o fa-1x ic'
        })
        /*  Sub-Categorias del Menu Agencia  */
        .menuItem('nav.agency.agencia', {
            text: 'Administrar Agencia',
            state: 'agencia',
            iconClass: 'fa-pencil-square-o fa-1x ic'
        })
        .menuItem('nav.agency.agencia1', {
            text: 'Administrar Unidades por Agencia',
            state: 'agencia1',
            iconClass: 'fa-pencil-square-o fa-1x ic'
        })
        .menuItem('nav.agency.agencia2', {
            text: 'Administrar Agentes por Unidad',
            state: 'agencia2',
            iconClass: 'fa-pencil-square-o fa-1x ic'
        })
        .menuItem('nav.supervisor', {
            text: 'Supervisor',
            state: 'supervisor',
            iconClass: 'fa-laptop fa-1x ic'
        })
        .menuItem('nav.georeferenciacion', {
            text: 'Georeferenciacion',
            state: 'georeferenciacion',
            iconClass: 'fa-globe fa-1x ic'
        })        
        .menuItem('nav.modal', {
            text: 'Modal',
            state: 'modal',
            iconClass: 'fa-envelope-o fa-1x ic'
        })
        .menuItem('nav.ayuda',{
            text: 'Ayuda',
            state: 'ayuda',
            iconClass: 'fa-question fa-1x ic'
        })
        .menuItem('nav.admin', {
            text: 'Admin',
            iconClass: 'fa-users fa-1x ic'
        })
        .menuItem('nav.admin.add', {
            text: 'Agregar Usuario',
            state: 'addUser',
            iconClass: 'fa-user-plus fa-1x ic'
        })
        .menuItem('nav.admin.edit', {
            text: 'Editar Usuario',
            state: 'editUser',
            iconClass: 'fa-pencil fa-1x ic'
        })
        .menuItem('nav.admin.delete', {
            text: 'Eliminar Usuario',
            state: 'deleteUser',
            iconClass: 'fa-user-times fa-1x ic'
        })
        .menuItem('nav.other', {
            text: 'Otros',
            iconClass: 'fa-info fa-1x ic'
        })
        .menuItem('nav.other.login', {
            text: 'Login',
            state: 'login',
            iconClass: 'fa-info fa-1x ic'
        })
        .menuItem('nav.other.404', {
            text: '404',
            state: '404',
            iconClass: 'fa-info fa-1x ic'
        })
        .menuItem('nav.other.500', {
            text: '500',
            state: '500',
            iconClass: 'fa-info fa-1x ic'
        });
    /* end menu */    
});