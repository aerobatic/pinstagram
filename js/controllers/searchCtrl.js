define(['angular', 'jquery', 'jquery-isotope'], function(angular){
  function SearchCtrl($scope, $location, instagram) {
    'use strict';

    instagram.popularMedia().success(function(data) {
      $scope.popularMedia = data.data;
    });

    var container = $('#container');
    container.isotope({
      // options
      itemSelector: '.item',
      layoutMode: 'fitRows'
    });

	$scope.hashtagSearch = function(hashtag) {
		instagram.hashtagMedia(hashtag).success(function(data) {
		  $scope.hashtagMedia = data.data;
		});
    };
	
  };

  SearchCtrl.$inject = ['$scope', '$location', 'instagram'];
  return SearchCtrl;
});