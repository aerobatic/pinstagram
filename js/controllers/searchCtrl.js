define(['angular', 'moment', 'jquery','angular-bootstrap'], function(angular,moment) {
	function SearchCtrl($scope, $location, $log, instagram, BoardRepo) {
		'use strict';
    instagram.hashtagMedia('nordstrom').success(function(data) {
      $scope.currentMedia = data.data;
    });

    $scope.boards = BoardRepo.list();
    $log.debug("got boards: " + JSON.stringify($scope.boards));

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
      // $log.debug("hovered over " + JSON.stringify(media));
      $scope.hoveredMedia = media;
      $log.debug("media: " + JSON.stringify(media));
	  // created_time is in seconds
      $scope.timeAgo = moment(new Date(media.created_time * 1000)).fromNow();
    };

    $scope.clearHovered = function (){
      $scope.hoveredMedia = undefined;
    }
  };

	SearchCtrl.$inject = ['$scope', '$location', '$log', 'instagram', 'BoardRepo'];
	return SearchCtrl;
});
