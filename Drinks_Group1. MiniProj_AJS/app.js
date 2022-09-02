var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/Home", {
            templateUrl: 'pages/Home.html',
            controller: 'HomeController'
        })
        .when('/Wines', {
            templateUrl: 'pages/Wines.html',
            controller: 'WinesController'
        })
        .when('/Cocktails', {
            templateUrl: 'pages/Cocktails.html',
            controller: 'CocktailsController'
        })
        .when('/Contact', {
            templateUrl: 'pages/contact.html',
            controller: 'ContactController'
        });
});
    app.controller('HomeController', function ($scope) {
        $scope.message = 'Day la noi dung duoc gui tu HomeController';
    });

    app.controller('contactController', function ($scope) {
        $scope.message = 'Day la noi dung duoc gui tu ContactController';
    });
app.controller('WinesController', function ($scope) {
    $scope.message = 'Day la noi dung duoc gui tu WinesController';
});
app.controller('CocktailsController', function ($scope) {
    $scope.message = 'Day la noi dung duoc gui tu CocktailsController';
});



