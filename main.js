let red = 123;
let green = 123;
let blue = 123;

document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
// strzałka do góry - 38, 38
// strzałka w dół - 40, 40

const changeColor = e => {
  if (e.keyCode === 38) {
    if (red <= 255) {
      red += 5
      green += 5
      blue += 5
      document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
    }
  } else if (e.keyCode === 40 && red >= 0) {
    red -= 5
    green -= 5
    blue -= 5
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
  }

  console.log(e.keyCode, e.which)
}

window.addEventListener('keydown', changeColor)