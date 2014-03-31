

define(['angular'], function(angular) {
  'use strict';

  angular.module('nstagram-services', []).factory('instagram', ['$http', 'aerobatic', function($http, aerobatic) {
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
        return $http.jsonp("https://api.instagram.com/v1/media/" + hashtag, {params: params});
      }
    }
  }]);
});
