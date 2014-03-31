
define(['angular', 'jquery', 'jquery-masonry'], function(angular){
  function SearchCtrl($scope, $location, instagram) {
    'use strict';

    instagram.popularMedia().success(function(data) {
      $scope.popularMedia = data.data;
    });

    $scope.$watch($scope.popularMedia, function() {
      $('#container').imagesLoaded( function() {
        console.log('all images are loaded');
        $('#container').masonry({
          // options
          itemSelector: '.item'
        });
      });
    });
  };

  SearchCtrl.$inject = ['$scope', '$location', 'instagram'];
  return SearchCtrl;
});
