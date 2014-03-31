
define(['angular'], function(angular){
  function GlobalCtrl($scope, $rootScope, $location, aerobatic) {
    'use strict';

    $scope.searchType = 'hashtag';
    $scope.searchTerm = '';

    $scope.executeSearch = function() {
      $rootScope.$broadcast('search', {type: $scope.searchType, term: $scope.searchTerm});
    }
  };

  GlobalCtrl.$inject = ['$scope', '$rootScope', '$location', 'instagram'];
  return GlobalCtrl;
});
