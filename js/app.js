/**
 * The main app module
 *
 * @type {angular.Module}
 */
define(['angular', 'angular-route', 'asset!js/aerobatic-angular', 'asset!js/services/instagram','asset!js/aerobatic-angular', 'asset!js/services/repository'], function(angular) {
  'use strict';

  var app = angular.module('nstagram', ['ngRoute', 'nstagram-services', 'aerobatic']);

  // Declare all the top level dependencies our app requires
  var dependencies = [
    'asset!js/controllers/globalCtrl',
    'asset!partials/layout',
    'asset!js/controllers/searchCtrl',
    'asset!partials/search',
    'asset!js/controllers/detailCtrl',
    'asset!partials/detail',
    'asset!js/controllers/boardListCtrl',
    'asset!partials/boards'
  ];

  require(dependencies, function(globalCtrl, layout, searchCtrl, searchView, detailCtrl, detailView, boardListCtrl, boardsView) {
    app.controller('GlobalCtrl', globalCtrl);

    app.config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/', {
        controller: searchCtrl,
        template: searchView
      }).when('/boards', {
        controller: boardListCtrl,
        template: boardsView
      }).otherwise({
        redirectTo: '/'
      });
    }]);

    angular.element(document).ready(function() {
      // Append an ng-view to the body to load our partial views into
      angular.element(document.body).append(angular.element(layout));
      angular.bootstrap(document, ['nstagram']);
    });
  });
});
