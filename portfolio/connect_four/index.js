$(document).ready(function() {

function Game () {

  this.currentPiece = "Black"

  this.board = [
  [null,null,null,null,null,null,null,],
  [null,null,null,null,null,null,null,],
  [null,null,null,null,null,null,null,],
  [null,null,null,null,null,null,null,],
  [null,null,null,null,null,null,null,],
  [null,null,null,null,null,null,null,]
  ];

  this.addPiece = function(obj) {

    var model_col = obj.col;
    var counter = 5;

    while (counter >= 0) {
      if (this.board[counter][model_col] === null) {
        this.board[counter][model_col] = this.fetchCurrentPiece();
        unused = [counter, parseInt(model_col), (this.board[counter][model_col])];
        return unused
      }
      counter--;
  };
}

  this.fetchCurrentPiece = function() {
    var piece = this.currentPiece //black
    this.currentPiece = (this.currentPiece === 'Black' ? 'Red' : 'Black')
    return piece
  };
}

var game = new Game();

$('.button_row button').click(function(){
  var button_column = this.dataset["col"]

  var info_arr = game.addPiece({col: button_column})

  console.log(info_arr);

  var piece = info_arr[2]
  var col = info_arr[1]
  var row = info_arr[0]
  // console.log(info_arr)
  $('.cell[data-col='+row+'][data-row='+col+']').css("background-color", piece)

});
});
