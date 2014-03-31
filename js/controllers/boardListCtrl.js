
define(['angular'], function(angular){
  function BoardListCtrl($scope, BoardRepo) {
    'use strict';
      $scope.boards = BoardRepo.list();
  };

  BoardListCtrl.$inject = ['$scope', 'BoardRepo'];
  return BoardListCtrl;
});