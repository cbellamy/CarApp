var carApp = angular.module('carApp',['ngRoute']);

carApp.config(function ($routeProvider) {

    $routeProvider.when('/', {
        controller: 'CarController',
        templateUrl: 'partials/main.html'
    })
    .when('/stats', {
        controller: 'CarController',
        templateUrl: 'partials/stats.html'
    })
    .otherwise({
    	redirectTo:'/'
    });

});