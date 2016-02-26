(function(angular, undefined) {
'use strict';

angular.module('uiGenApp.urls', [])

.constant('URLS', {QUARC_API:'http://api.quezx.dev/api',OAUTH:'//accounts.quezx.dev/authorise?client_id=partnerquezx&response_type=code&redirect_uri=http://partner.quezx.dev/access/oauth&state=yo'})

.constant('ENV', 'development')

;
})(angular);