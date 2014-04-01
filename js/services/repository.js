define(['angular'], function(angular) {
  'use strict';

  var get = function (boardName){
    return JSON.parse(localStorage.getItem(boardName) || '[]');
  }

  var save = function (board){
    if(board && board.name){
      localStorage.setItem(board.name, JSON.stringify(board));
    }
    else {
      throw new Error('board not specified or board does not have name')
    }
  }

  var remove = function(boardName){
    localStorage.removeItem('itemA')
  }

  var list = function(){
    var boards = [];
    var board;
    for(var key in localStorage){
      var board = {
        name: key
      };
      if (get(key).media.length > 0)
        board.url = get(key).media[0].thumbnail_url;
      else
        board.url = "https://dl.dropboxusercontent.com/u/7446385/nstagram/nstagram_board_bg.png";

      boards.push(board);
    }

    return boards;
  }

  var testData = {
      "name":"Kate Spade",
      "media": [{
        "thumbnail_url":"http://distilleryimage4.s3.amazonaws.com/d172ce80b90a11e39889127781d381c8_8.jpg"
      },
      {
        "thumbnail_url":"http://distilleryimage4.s3.amazonaws.com/d172ce80b90a11e39889127781d381c8_8.jpg"
      }]
  };
  save(testData)

  angular.module('nstagram-services').factory('BoardRepo', function() {
    return {
      get: get,
      save: save,
      remove: remove,
      list: list
    };
  });
});
