angular.module('webApp.main').run(['$templateCache', function($templateCache) {$templateCache.put('aboutPage/about-page.html','<div><h1>ABOUT</h1></div>');
$templateCache.put('contactPage/contact-page.html','<div><h1>Contact</h1></div>');
$templateCache.put('mainPage/main-page.html','<div><p ng-bind-html=vm.introductionParagraph></p></div>');
$templateCache.put('rushPage/rush-page.html','<div><h1>Rush</h1></div>');}]);