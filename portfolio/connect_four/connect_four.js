$(document).ready(function() {

  function Game () {

    this.board = [
    [null,null,null,null,null,null,null,],
    [null,null,null,null,null,null,null,],
    [null,null,null,null,null,null,null,],
    [null,null,null,null,null,null,null,],
    [null,null,null,null,null,null,null,],
    [null,null,null,null,null,null,null,]
    ];

    this.addPiece = function(obj) {

      var model_col = obj.col

      for (i = 5;i >= 0 ;i--){
        if (this.board[i][model_col] === null) {
          //put piece
          this.board[i][model_col] = "red";
        }
        var array = [i, model_col, (this.board[i][model_col])]
        return array;
      }
    };
  }

  var game = new Game();

  $('.button_row button').click(function(){
    var button_column = this.dataset["col"]
    game.addPiece({col: button_column})
    var info_arr = game.addPiece({col: button_column})
    var piece = info_arr[2]
    var col = info_arr[1]
    var row = info_arr[0]
    console.log(info_arr)
    $('.cell[data-col='+row+'][data-row='+col+']').css("background-color", piece)
  });
});
