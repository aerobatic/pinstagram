
define(['angular', 'jquery', 'jquery-isotope'], function(angular){
  function SearchCtrl($scope, $location, instagram) {
    'use strict';

    instagram.popularMedia().success(function(data) {
      $scope.popularMedia = data.data;
    });

    // $scope.loadThing = function(id, $event) {
    //   $location.path(id);
    //   $event.preventDefault();
    // }
  };

  SearchCtrl.$inject = ['$scope', '$location', 'instagram'];
  return SearchCtrl;
});
