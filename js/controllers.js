'use strict';

var carAppControllers = angular.module('carAppControllers', []);

carAppControllers.controller('CarDetailCtrl',['$scope','$routeParams','Car',
	function($scope,$routeParams,Car){
		$scope.car=Car.get({carId:$routeParams.carId},function(car){
			$scope.mainImageUrl=car.images[0];
		});
		$scope.setImage=function(imageUrl){
			$scope.mainImageUrl=imageUrl;
		}

			$scope.cars = Car.query();
    		$scope.orderProp='model';
	}]);

bikeApp.controller('controllerInicio', function($scope) {
    $scope.pageClass = 'pagina-inicio';
});

bikeApp.controller('controllerConsultas', function($scope,$rootScope, $location) {
    
        if (localStorage.getItem("consultas") == null) {
            $rootScope.consultas = [];
        } else {
            $rootScope.consultas = JSON.parse(localStorage.getItem("consultas"));
        }
        
    $scope.pageClass = 'pagina-consultas';

	    $scope.irIncio = function() {
	        $location.url("/");
	    }


});

bikeApp.controller('controllerContactenos', function($scope,$rootScope, $location) {
    $scope.pageClass = 'pagina-contactenos';
    $scope.guardarConsulta = function() {
        if (localStorage.getItem("consultas") == null) {
            $rootScope.consultas = [];
        } else {
            $rootScope.consultas = JSON.parse(localStorage.getItem("consultas"));
        }

        $rootScope.consultas.push({
            nombre: $scope.nuevoConsulta.nombre,
            apellido: $scope.nuevoConsulta.apellido,
            email: $scope.nuevoConsulta.email,
            mensaje: $scope.nuevoConsulta.mensaje
        });

        localStorage.setItem("consultas", JSON.stringify($rootScope.consultas));

        $scope.nuevoConsulta = null;

    }
});













