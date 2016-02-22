'use strict';

angular.module('uiGenApp')
  .controller('AuthoriseCtrl', function (QuarcService,  $location, $window) {
    const oAuthorise = QuarcService.oAuthorise;
    const vm = this;

    oAuthorise.get($location.search())
      .then(res => {
        vm.app = res.data;
        vm.done(true);
      })
      .catch(res => vm.error = res.data.error);

    vm.done = function done(allow) {
      const data = $location.search();
      data.allow = allow ? 'true' : 'false';
      oAuthorise
        .post(data)
        .then(res => {
          $window.location.href = res.data;
        });
    };
  });
