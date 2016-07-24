(function () {
    'use strict';

    angular
        .module('webApp.main')
        .controller('MainPageController', MainPageController);


    function MainPageController(){
        var vm = this;


        //data
        vm.introductionParagraph = "The Beta Delta Chapter of Phi Kappa Sigma is a networking and social fraternity established\
        on the values of Trust, Honor, Respect, Knowledge, Wisdom, Responsibility, and Integrity.\
        Our members hold these core values in the highest esteem and strive to live out these values each\
        and every day. We welcome all men, from all facades of life, who wish to join and contribute to an\
        organization that is larger than themselves. We actively seek out men to strengthen our Brotherhood and\
        further the Fraternity's strong traditions.\
        <br/>\
        <br/>\
        The Beta Delta Chapter of Phi Kappa Sigma was chartered at Michigan State University in 2011,\
        making \"Skull House\" one of the newest and fastest growing fraternities on campus.";

        activate();

        function activate() {

        }
    }
})();