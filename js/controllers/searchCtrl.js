define(['angular', 'jquery'], function(angular) {
	function SearchCtrl($scope, $location, $log, instagram) {
		'use strict';
    instagram.popularMedia().success(function(data) {
      $scope.currentMedia = data.data;
    });

		$scope.$on('search', function(e, args) {
			$log.info("Search for hashtag " + args.term);

			if (args.type == 'hashtag') {
				instagram.hashtagMedia(args.term).success(function(data) {
					$log.debug("Search for hashtag complete");
					$scope.currentMedia = data.data;
				});
			}
			else if (args.type == 'geo'){
				instagram.geoMedia(args.term).success(function(data) {
					$scope.currentMedia = data.data;
				});
			}
		});

    $scope.hoverBoard = function(media) {
      $log.debug("hovered over " + JSON.stringify(media));
      $scope.hoveredMedia = media;
    };

    $scope.clearHovered = function (){
      $scope.hoveredMedia = undefined;
    }
  };

	SearchCtrl.$inject = ['$scope', '$location', '$log', 'instagram'];
	return SearchCtrl;
});
