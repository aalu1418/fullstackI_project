function startAnimation(target_obj){
  let width = 0;
  let height = 0;
  let newX;
  let newY;
  let dim = "height";
  const max_height = $(".background-animation").height()-$(".continue-bar").height()-$(".animation-logo").height();
  const max_width = $(".background-animation").width()-$(".animation-logo").width();
  // console.log(max_height, max_width);
  const move = () => {
    anime({
      targets: target_obj,
      translateX: nextX(),
      translateY: nextY(),
      duration: 3000,
      easing: 'linear',
      complete: move,
    });
    dim = (dim === "height") ? "width":"height";
    width = $(target_obj).position().left;
    height = $(target_obj).position().top;
    // console.log(dim, width, height);
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

  move();
}
