'use strict';

angular.module('uiGenApp')
  .controller('AppController', function (QuarcService, $window, $uibModal, $state, $rootScope) {
    const Page = QuarcService.Page;
    const User = QuarcService.User;

    const vm = this;

    // config
    vm.app = {
      name: 'QUEZX',
      version: '0.0.1',
      settings: {
        themeID: 1,
        navbarHeaderColor: 'bg-white',
        navbarCollapseColor: 'bg-white-only',
        asideColor: 'bg-black',
        headerFixed: true,
        asideFixed: true,
        asideFolded: false,
        asideDock: true,
        container: false,
        offScreen: false, // flag for show of sidebar for mobile view
        mobileHeader: false, // flag to show header Nav and Search in mobile view
      },
    };

    // keeps track of state change and hides sidebar view for mobile
    /* eslint angular/on-watch: 0 */
    $rootScope.$on('$stateChangeStart', function handleStateChange() {
      vm.app.settings.offScreen = false;
      vm.app.settings.mobileHeader = false;
    });

    vm.Page = Page; // Set Page title
    vm.userinfo = User.userinfo;
  });
