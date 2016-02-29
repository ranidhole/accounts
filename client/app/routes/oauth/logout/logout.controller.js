'use strict';

angular.module('uiGenApp')
  .controller('LogoutCtrl', function ($scope,$state,Session) {
    Session.destroy()
    $state.go('oauth.signin')
  });
