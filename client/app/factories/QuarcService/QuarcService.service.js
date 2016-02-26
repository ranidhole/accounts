'use strict';

angular.module('uiGenApp')
  .service('QuarcService', function ( QCONFIG, Page, Session, User, oAuthorise) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    return {
      Page: Page,
      Session: Session,
      User: User,
      oAuthorise: oAuthorise
    };
  });
