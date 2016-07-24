angular.module('webApp.core')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
        'use strict';

        $urlRouterProvider.otherwise('/');


        $stateProvider
           .state('main', {
               url: '/',
               templateUrl: 'Scripts/app/main/mainPage/main-page.html',
               controller: 'MainPageController as vm'
           })
            .state('about', {
               url: "/about",
               templateUrl: 'Scripts/app/main/aboutPage/about-page.html',
               controller: 'AboutPageController as vm'
            })
            .state('rush', {
                url: '/rush',
                templateUrl: 'Scripts/app/main/rushPage/rush-page.html',
                controller: 'RushPageController as vm'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'Scripts/app/main/contactPage/contact-page.html',
                controller: 'ContactPageController as vm'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    }])