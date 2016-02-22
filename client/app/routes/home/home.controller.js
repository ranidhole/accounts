'use strict';

angular.module('uiGenApp')
  .controller('HomeCtrl', function (APP, $window) {
    const Session = QuarcService.Session;

    const user = Session.read('userinfo');
    if (user.group_id === 5) $window.location.href = APP.hireServer;
    if (user.group_id === 2) $window.location.href = APP.partnerServer;
  });

