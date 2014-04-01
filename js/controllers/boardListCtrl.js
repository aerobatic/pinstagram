
define(['angular'], function(angular){
  function BoardListCtrl($scope, BoardRepo) {
    'use strict';
    $scope.boards = BoardRepo.list();

    $scope.newBoardName = null;
    $scope.saveBoard = function() {
      if ($scope.newBoardName.length > 0) {
        var board = {
          name: $scope.newBoardName,
          media: []
        };
        BoardRepo.save(board);
        $scope.newBoardName = null;
        $scope.boards = BoardRepo.list();
      }
    }
  };

  BoardListCtrl.$inject = ['$scope', 'BoardRepo'];
  return BoardListCtrl;
});
