
define(['angular'], function(angular){
  function BoardListCtrl($scope, BoardRepo) {
    'use strict';
    $scope.boards = BoardRepo.list();

    function splitBoardsIntoColumns() {
      var columns = [[],[],[]];
      for (var i=0; i<$scope.boards.length; i++) {
        if (i == 0 || i == 3 || i == 6)
          columns[0].push($scope.boards[i]);
        else if (i == 1 || i==4 || i==7)
          columns[1].push($scope.boards[i]);
        else
          columns[2].push($scope.boards[i]);
      }
      return columns;
    }

    function updateBoardModel(){
      $scope.boards = BoardRepo.list();
      $scope.boardColumns = splitBoardsIntoColumns();
    }

    $scope.newBoardName = null;
    $scope.saveBoard = function() {
      if ($scope.newBoardName.length > 0) {
        var board = {
          name: $scope.newBoardName,
          media: []
        };
        BoardRepo.save(board);
        $scope.newBoardName = null;
        updateBoardModel();
      }
      $scope.newBoardMode = false;
    };

    $scope.boardColumns = splitBoardsIntoColumns();

    $scope.removeBoard = function(board){
      BoardRepo.remove(board.name);
      updateBoardModel();
    };
  };

  BoardListCtrl.$inject = ['$scope', 'BoardRepo'];
  return BoardListCtrl;
});
