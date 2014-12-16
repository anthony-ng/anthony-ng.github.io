// Models
var player1 = document.getElementById("player1_strip");
var player2 = document.getElementById("player2_strip");
// console.log("its moving!")

var move = function(e) {
  if (e.keyCode == 81) {
    var active1 = player1.getElementsByClassName("active1")[0];
    if (active1.classList.contains("finish-line")){
      alert("Player 1 wins!")
      var next = active1.nextElementSibling.classList.add("active1");
      active1.classList.remove("active1");
    }
    else {
      next = active1.nextElementSibling.classList.add("active1");
      active1.classList.remove("active1");
  }}
  else if (e.keyCode == 80) {
    var active2 = player2.getElementsByClassName("active2")[0];
    if (active2.classList.contains("finish-line")){
      alert("Player 2 wins!")
      var next = active2.nextElementSibling.classList.add("active2");
      active2.classList.remove("active2");
    }
    else {
      next = active2.nextElementSibling.classList.add("active2");
      active2.classList.remove("active2");
  }}
}

window.addEventListener("keydown", move);
