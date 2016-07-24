var app = angular.module('webApp', [
    'webApp.core',
    'webApp.main',
    'ngRoute'
]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/main',
            {
                controller: 'MainPageController',
                templateUrl: '/app/main/mainPage/main-page.html'
            })
        .otherwise({ redirectTo: '/main' });
});
angular.module('webApp.core', [
    'ngRoute'
]);
angular.module('webApp.main', [
    'webApp.core'
]);
angular.module('templates').run(['$templateCache', function($templateCache) {$templateCache.put('mainPage/main-page.html','<div><h3>MAIN PAGE</h3></div>');}]);

(function () {
    'use strict';

    angular
        .module('WebApp')
        .controller('MainPageController', MainPageController)

    function MainPageController(){
        var vm = this;

        activate();

        function activate() {

        }
    }
});