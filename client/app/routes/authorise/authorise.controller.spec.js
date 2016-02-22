'use strict';

describe('Controller: AuthoriseCtrl', function () {

  // load the controller's module
  beforeEach(module('uiGenApp'));

  var AuthoriseCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthoriseCtrl = $controller('AuthoriseCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
