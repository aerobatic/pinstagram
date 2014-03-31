

define(['angular'], function(angular) {
  'use strict';

  // In reality the thing service would probably use a web API. You might want to bring in the ngResource
  // service as a dependency.
  // angular.module('services', ['ngResource']).factory('resources', ['$resource', function($resource) {
  //  return $resource("http://thing-api/things/:thingId", { thingId: '@thingId'});
  // });

  angular.module('seedServices', []).factory('Thing', [function() {
    var board1 = {
      "id":1,
      "name":"Kate Spade",
      "poster_image_url":"foo",
      "lastUpdate":"foo",
      "media": [
       {
        "thumbnail_url":"foo",
        "instagram_id":"foo",
        "medium_url":"foo"
      }]
    };

    var board2 = 
    {
      "id":2,
      "name": "My Cool Fashion",
      "lastUpdate":"",
      "media": [
       {
        "thumbnail_url":"",
        "instagram_id":"",
        "medium_url":""
      }]
    };

    var board3 = {
      "id":3,
      "name": "My Cool Fashion",
      "poster_image_url":"",
      "lastUpdate":"",
      "media": [
       {
        "thumbnail_url":"",
        "instagram_id":"",
        "medium_url":""
      }]
    };

    var boards = [board1,board2,board3];

    var user = {
      "name":"jonmadison",
      "boards":boards
    };
    
    return {
      list: function() {
        console.log("using boards: " + JSON.stringify(boards));
        return boards;
      },
      find: function(id) {
        for (var i=0; i<boards.length; i++) {
          if (boards[i].id == id)
            return boards[i];
        }
        return null;
      }
    }
  }]);
});