const move = () => {
  anime({
    targets: '.animation-logo',
    translateX: nextX(),
    translateY: nextY(),
    // duration: calc_duration(),
    easing: 'linear',
    complete: move,
  });
  dim = (dim === "height") ? "width":"height";
  width = $(".animation-logo").position().left;
  height = $(".animation-logo").position().top;
  // console.log(dim, width, height);
}

let width = 0;
let height = 0;
let newX;
let newY;
let dim = "height";

function startAnimation(){
  max_height = $(".background-animation").height()-$(".continue-bar").height()-$(".animation-logo").height();
  max_width = $(".background-animation").width()-$(".animation-logo").width();
  // console.log(max_height, max_width);
  move();
}

function nextX(){
  if (dim === "height"){
    newX = anime.random(0,max_width);
  }
  else {
    newX = (Math.floor(width) === Math.floor(max_width)) ? 0:max_width
  }
  return newX
}

function nextY(){
  if (dim === "width"){
    newY = anime.random(0,max_height);
  }
  else {
    newY = (Math.floor(height) === Math.floor(max_height)) ? 0:max_height
  }
  return newY
}

function calc_duration() {
  // console.log(newX, newY);
  const time_conversion = 3;
  const distance = Math.sqrt(Math.pow(newX-width, 2)+Math.pow(newY-height, 2));
  console.log(distance, distance*time_conversion);
  return distance*time_conversion
}
