'use strict';

angular.module('uiGenApp')
  .factory('oAuthorise', function (APP, $http, $httpParamSerializer) {
    const authoriseService = {};

    authoriseService.get = function get(params) {
      const url = `${APP.apiServer}/authorise`;
      console.log(params)
      return $http
        .get(url, { params: params });
    };

    authoriseService.post = function post(data) {
      const req = {
        method: 'POST',
        url: `${APP.apiServer}/authorise`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: $httpParamSerializer(data),
      };

      return $http(req);
    };

    return authoriseService;
  });

