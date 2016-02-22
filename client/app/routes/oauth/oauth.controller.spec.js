'use strict';

describe('Controller: OauthCtrl', function () {

  // load the controller's module
  beforeEach(module('uiGenApp'));

  var OauthCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OauthCtrl = $controller('OauthCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
