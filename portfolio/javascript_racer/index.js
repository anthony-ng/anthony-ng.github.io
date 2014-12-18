
var move = function(e) {

var active1 = document.querySelector(".active1")
var active2 = document.querySelector(".active2")

  if (e.keyCode == 81) {
    if (active1.classList.contains("finish-line")){
      alert("Eat my short! Donut Eater!")
      window.location.reload()
    }
    else {
      active1.nextElementSibling.classList.add("active1");
      active1.classList.remove("active1");
  }}
  else if (e.keyCode == 80) {
    if (active2.classList.contains("finish-line")){
      alert("I caught you! Son!")
      window.location.reload()
    }
    else {
      active2.nextElementSibling.classList.add("active2");
      active2.classList.remove("active2");
  }}
}

window.addEventListener("keyup", move);
