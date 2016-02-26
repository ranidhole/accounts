'use strict';

angular.module('qui.components', [])
// Todo oAuth Client Implementation
angular
  .module('qui.core', [
    'qui.components',
    'http-auth-interceptor',
  ])
  .constant('MODULE_VERSION', '0.0.1')



angular.module('uiGenApp', [
  'uiGenApp.urls',
  'uiGenApp.constants',
  'qui.core',
  'ngAnimate',
  'ui.router',
  'ui.bootstrap',
  'mwl.calendar',
  'chart.js',
  'restangular'
])
  .config(function($urlRouterProvider, $locationProvider,RestangularProvider,QCONFIG) {
    RestangularProvider.setBaseUrl(QCONFIG.QUARC_API);
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });


