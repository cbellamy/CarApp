var carApp = angular.module('carApp',['ngRoute']);

carApp.config(function ($routeProvider) {

    $routeProvider.when('/', {
        controller: 'carController',
        templateUrl: 'partials/main.html'
    })
    .when('/stats', {
        controller: 'carController',
        templateUrl: 'partials/stats.html'
    })
    .when('/wheels', {
        controller: 'wheelController',
        templateUrl: 'partials/wheels.html'
    })
    .otherwise({
    	redirectTo:'/'
    });

});
