'use strict';

angular.module('uiGenApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('oauth', {
        url: '/oauth',
        templateUrl: '<div ui-view class="fade-in-right-big smooth"></div>',
      })
      .state('oauth.signin', {
        url: '/signin',
        templateUrl: 'app/routes/oauth/signin/signin.html',
        controller: 'SigninCtrl',
        controllerAs: 'Signin'
      })
      .state('oauth.logout', {
        url: '/logout',
        templateUrl: 'app/routes/oauth/logout/logout.html',
        controller: 'LogoutCtrl',
        controllerAs: 'Logout'
      })
      .state('logout', {
        url: '/logout',
        templateUrl: 'app/routes/oauth/logout/logout.html',
        controller: 'LogoutCtrl',
        controllerAs: 'Logout'
      })
      .state('oauth.forgotpass', {
        url: '/forgotpass',
        templateUrl: 'app/routes/oauth/forgotpass/forgotpass.html',
        controller: 'ForgotpassCtrl',
        controllerAs: 'Forgotpass'
      });
  });
