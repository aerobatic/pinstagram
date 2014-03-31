
define(['angular', 'asset!partials/login'], function(angular, loginTmpl) {
  'use strict';

  angular.element(document).ready(function() {
    angular.element(document.body).append(angular.element(loginTmpl));
  });
});
