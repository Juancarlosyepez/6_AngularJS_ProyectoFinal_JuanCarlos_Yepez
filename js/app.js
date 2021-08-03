'use strict';

var bikeApp = angular.module('bikeApp', [
    'ngRoute',
    'carAppAnimations',
    'carAppControllers',
    'carAppServices'
    
    ]);

bikeApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/pagina-inicio.html',
            controller: 'controllerInicio'
        })
        .when('/consultas', {
            templateUrl: 'partials/pagina-consultas.html',
            controller: 'controllerConsultas'
        })
        .when('/contactenos', {
            templateUrl: 'partials/pagina-contactenos.html',
            controller: 'controllerContactenos'
        })
        
        .when('/cars/:carId',{
            templateUrl:'partials/car-detail.html',
            controller:'CarDetailCtrl'
        }).
        otherwise({
            redirectTo:'/cars'
        });
        
          
});



