
define(['angular'], function(angular){
  function DetailCtrl($scope, $routeParams, BoardRepo) {
    'use strict';
    $scope.media = BoardRepo.get($routeParams.name).media;
  };

  DetailCtrl.$inject = ['$scope', '$routeParams', 'BoardRepo'];
  return DetailCtrl;
});