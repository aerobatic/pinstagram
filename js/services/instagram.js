

define(['angular'], function(angular) {
  'use strict';

  angular.module('nstagram-services', []).factory('instagram', ['$http', '$log', 'aerobatic', function($http, $log, aerobatic) {
    // Load the some Instagram media.
    // https://api.instagram.com/v1/users/self/feed?access_token=ACCESS-TOKEN
    var params = {
      access_token: aerobatic.config.user.accessToken,
      callback: "JSON_CALLBACK"
    };

    return {
      popularMedia: function() {
        return $http.jsonp("https://api.instagram.com/v1/media/popular", {params: params});
      },
      hashtagMedia: function(hashtag) {
        $log.debug("hashtag search for " + hashtag);
		return $http.jsonp("https://api.instagram.com/v1/tags/" + hashtag + "/media/recent", {params: params});
      },
      geoMedia: function(city) {
	    // our supported cities
		var coords = {"Seattle":       {lat: 47.60 , lon: -122.33},
		              "San Francisco": {lat: 37.77 , lon: -122.41},
					  "New York":      {lat: 40.71 , lon: -74.00}};
		var cityCoords = coords[city];
        return $http.jsonp("https://api.instagram.com/v1/media/search?lat=" + cityCoords.lat + "&lng=" + cityCoords.lon + "&access_token=ACCESS-TOKEN", 
		                   {params: params});
      }	  
    }
  }]);
});
