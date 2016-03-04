'use strict';

angular.module('uiGenApp')
  .controller('HomeCtrl', function (QuarcService, URLS, $window) {
    const Session = QuarcService.Session;

    const user = Session.read('userinfo');
    // Todo: Redirection as per the request or from database
    if (user.group_id === 5) $window.location.href = URLS.HIRE;
    if (user.group_id === 2) $window.location.href = URLS.PARTNER;
  });

