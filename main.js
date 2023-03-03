let red = 123;
let green = 123;
let blue = 123;

document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
// strzałka do góry - 38, 38
// strzałka w dół - 40, 40

const changeColor = e => {
  console.log(e.keyCode, e.which)
}

window.addEventListener('keydown', changeColor)