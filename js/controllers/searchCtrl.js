define(['angular', 'jquery'], function(angular) {
	function SearchCtrl($scope, $location, $log, instagram) {
		'use strict';

		instagram.popularMedia().success(function(data) {
			$scope.currentMedia = data.data;
		});

		$scope.$on('search', function(e, args) {
			$log.info("Search for hashtag " + args.term);

			if (args.type == 'hashtag') {
				// $scope.$apply(function() {
				instagram.hashtagMedia(args.term).success(function(data) {
					$log.debug("Search for hashtag complete");
					$scope.currentMedia = data.data;
				});
			}
		});

		// var container = $('#container');
		// container.isotope({
		//   // options
		//   itemSelector: '.item',
		//   layoutMode: 'fitRows'
		// });
	};

	SearchCtrl.$inject = ['$scope', '$location', '$log', 'instagram'];
	return SearchCtrl;
});
