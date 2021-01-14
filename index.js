// Your code here
let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "red"

console.log(dodger.style.left)
console.log(dodger.style.bottom)

dodger.style.top = "300px"
dodger.style.left = "200px"

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}



document.addEventListener("keydown", function(evt) {
    console.log(evt.key);
    if (evt.key === "ArrowLeft") {
      moveDodgerLeft()
    }
    else if (evt.key === "ArrowRight") {
      moveDodgerRight()
    }
  });

  