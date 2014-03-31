define(['angular', 'jquery'], function(angular){
  function SearchCtrl($scope, $location, $log, instagram) {
    'use strict';

    instagram.popularMedia().success(function(data) {
      $scope.currentMedia = data.data;
    });

    $scope.$on('search', function(e, args){
      $log.info("Search for hashtag " + args.term);

      if (args.type == 'hashtag'){
		instagram.hashtagMedia(args.term).success(function(data) {			
			$scope.currentMedia = data.data;
		})
	  }
    });	
	
  };

  SearchCtrl.$inject = ['$scope', '$location', '$log', 'instagram'];
  return SearchCtrl;
});
