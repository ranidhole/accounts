'use strict';

angular.module('uiGenApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/routes/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'Home'
      });
  });
