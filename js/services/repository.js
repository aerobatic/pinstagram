define(['angular'], function(angular) {
  'use strict';

  var foo = 'foo';
  var testData = JSON.stringify({
    name: 'foo'
  });
  for(var i = 1; i < 10; i++){
    localStorage.setItem(foo + i, testData);
  }

  angular.module('nstagram-services').factory('BoardRepo', function() {
    return {
      get: function (boardName){
        return JSON.parse(localStorage.getItem(boardName) || '[]'); 
      },
      save: function (board) {
        if(board && board.name){
          localStorage.setItem(board.name, JSON.stringify(board));
        }
        else {
          throw new Error('board not specified or board does not have name')
        }
      },
      remove: function(boardName){
        localStorage.removeItem('itemA')
      },
      list: function(){
        var boards = [];
        for(var key in localStorage){
          boards.push(key);
        }

        return boards;
      }
    };
  });
});