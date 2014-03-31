
define(['angular'], function(angular){
  function DetailCtrl($scope, $routeParams, boardRepo) {
    'use strict';

    var thingId = $routeParams.id;
    $scope.thing = Thing.find(thingId);
  };

  DetailCtrl.$inject = ['$scope', '$routeParams', 'boardRepo'];
  return DetailCtrl;
});