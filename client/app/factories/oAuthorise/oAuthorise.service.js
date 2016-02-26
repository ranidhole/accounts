'use strict';

angular.module('uiGenApp')
  .factory('oAuthorise', function (URLS, $http, $httpParamSerializer) {
    const authoriseService = {};

    authoriseService.get = function get(params) {
      const url = `${URLS.QUARC_API}/authorise`;
      console.log(params)
      return $http
        .get(url, { params: params });
    };

    authoriseService.post = function post(data) {
      const req = {
        method: 'POST',
        url: `${URLS.QUARC_API}/authorise`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: $httpParamSerializer(data),
      };

      return $http(req);
    };

    return authoriseService;
  });

