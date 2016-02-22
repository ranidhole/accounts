'use strict';

angular.module('uiGenApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('authorise', {
        url: '/authorise',
        templateUrl: 'app/routes/authorise/authorise.html',
        controller: 'AuthoriseCtrl',
        controllerAs: 'Authorise'
      });
  });
