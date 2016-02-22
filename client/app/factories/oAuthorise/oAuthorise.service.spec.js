'use strict';

describe('Service: oAuthorise', function () {

  // load the service's module
  beforeEach(module('uiGenApp'));

  // instantiate service
  var oAuthorise;
  beforeEach(inject(function (_oAuthorise_) {
    oAuthorise = _oAuthorise_;
  }));

  it('should do something', function () {
    !!oAuthorise.should.be.true;
  });

});
