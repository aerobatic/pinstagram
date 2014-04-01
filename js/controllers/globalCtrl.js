
define(['angular', 'angular-bootstrap'], function(angular){
  function GlobalCtrl($scope, $rootScope, $location, aerobatic) {
    'use strict';

    $scope.username = aerobatic.config.user.username;
    $scope.profilePicture = aerobatic.config.user._json.data.profile_picture;
    $scope.searchType = 'hashtag';
    $scope.searchTerm = '';
    $scope.searchCity = 'New York';
	
	$scope.cities = [{name: "Seattle"},{name: "New York"},{name: "San Francisco"},{name: "Miami"}];

    $scope.executeSearch = function() {
      $location.path('/');
	  var term = "";
	  if ($scope.searchType=="geo") {
	     term = $scope.city.name;		 
	   }
	   else {
	      term = $scope.searchTerm;
	   }
	  
      $rootScope.$broadcast('search', {type: $scope.searchType, term: term});
    }

    $scope.viewMyBoards = function($event) {
      $location.path('/boards');
      $event.preventDefault();
    }
  };

  GlobalCtrl.$inject = ['$scope', '$rootScope', '$location', 'aerobatic'];
  return GlobalCtrl;
});
