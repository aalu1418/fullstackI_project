const start_animation = () => {
  //find list of elements that use animation logo
  let anime_IDs = [];
  $(".animation-logo").each(function() {
    anime_IDs.push(this.id);
  });

  //start animation for each element w/ delay
  anime_IDs.forEach(item => {
    animate_obj("#" + item);
  });
};

const animate_obj = target_obj => {
  //set required properties
  let width = 0;
  let height = 0;
  let newX;
  let newY;
  let dim = Math.random() < 0.5 ? "height" : "width"; //random choice for direction
  //finding maximums for movement
  const max_height =
    $(".background-animation").height() -
    $(".continue-bar").height() -
    $(".animation-logo").height();
  const max_width =
    $(".background-animation").width() - $(".animation-logo").width();

  //movement defined by anime.js
  const move = () => {
    anime({
      targets: target_obj,
      translateX: nextX(), //calculate nextX
      translateY: nextY(), //calculate nextY
      duration: anime.random(3000, 5000), //changes the speed randomly
      easing: "linear",
      complete: move //on completion run move function again
    });
    dim = dim === "height" ? "width" : "height"; //toggle movement based on previous movement
    width = $(target_obj).position().left; //get current position (set for next iterations)
    height = $(target_obj).position().top;
  };

  //set next x value
  function nextX() {
    if (dim === "height") {
      //if movement direction is height, set X to random
      newX = anime.random(0, max_width);
    } else {
      //if movment direction is width, toggle between min/max X values
      newX = Math.floor(width) === Math.floor(max_width) ? 0 : max_width;
    }
    return newX;
  }

  //set next y value (similar logic to nextX)
  function nextY() {
    if (dim === "width") {
      newY = anime.random(0, max_height);
    } else {
      newY = Math.floor(height) === Math.floor(max_height) ? 0 : max_height;
    }
    return newY;
  }

  move(); //start move function
};

//handler for page resizing
$(window).resize(() => {
  anime.remove(".animation-logo"); //stops animations
  anime.set(".animation-logo", {
    translateX: 0,
    translateY: 0
  }); //reset image position
  start_animation() //restart animation
});
