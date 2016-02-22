'use strict';

describe('Controller: SigninCtrl', function () {

  // load the controller's module
  beforeEach(module('uiGenApp'));

  var SigninCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SigninCtrl = $controller('SigninCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
