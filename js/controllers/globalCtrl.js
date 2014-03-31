
define(['angular'], function(angular){
  function GlobalCtrl($scope, $rootScope, $location, aerobatic) {
    'use strict';

    $scope.username = aerobatic.config.user.username;
    $scope.searchType = 'hashtag';
    $scope.searchTerm = '';
    $scope.searchCity = 'New York';

    $scope.executeSearch = function() {
      $rootScope.$broadcast('search', {type: $scope.searchType, term: $scope.searchTerm});
    }
  };

  GlobalCtrl.$inject = ['$scope', '$rootScope', '$location', 'aerobatic'];
  return GlobalCtrl;
});
