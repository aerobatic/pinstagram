
define(['angular', 'jquery', 'jquery-isotope'], function(angular){
  function SearchCtrl($scope, $location, instagram) {
    'use strict';

    instagram.popularMedia().success(function(data) {
      $scope.popularMedia = data.data;
    });


    $scope.$watch($scope.popularMedia, function() {
      var $container = $('#container');
      $container.imagesLoaded( function() {
          // initialize
          $container.masonry({
          columnWidth: 200,
          itemSelector: '.item'
        });
      });
    });
  };

  SearchCtrl.$inject = ['$scope', '$location', 'instagram'];
  return SearchCtrl;
});
