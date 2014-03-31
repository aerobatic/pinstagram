
define(['angular', 'jquery'], function(angular){
  function SearchCtrl($scope, $location, $log, instagram) {
    'use strict';

    $scope.$on('search', function(e, args){
      $log.info("Search for hashtag " + args.term);
      // TODO: Execute search
      // $scope.$apply(function(){
      //   $scope.staticText = args;
      // });
    });

    instagram.popularMedia().success(function(data) {
      $scope.popularMedia = data.data;
    });
  };

  SearchCtrl.$inject = ['$scope', '$location', '$log', 'instagram'];
  return SearchCtrl;
});
