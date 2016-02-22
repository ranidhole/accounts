'use strict';

describe('Controller: ForgotpassCtrl', function () {

  // load the controller's module
  beforeEach(module('uiGenApp'));

  var ForgotpassCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ForgotpassCtrl = $controller('ForgotpassCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
