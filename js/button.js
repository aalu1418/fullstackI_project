//button listeners
$("#BTC, #BCH, #ETH, #LTC").click(() => toggleData()); //toggle on & off crypto
$("#USD, #CAD, #EUR").click(() => toggleOther(["USD", "CAD", "EUR"])); //change display currency
$("#time-period").click(() => toggleTime()); //change the length of time for ticker display
$("#check-balance").click(() => get_balance()); //update ether balance

//button - toggle other buttons & change currency displayed
let toggleOther = button_array => {
  $(event.target).addClass("button-primary");
  button_array
    .filter(element => event.target.id != element)
    .forEach(element => $("#" + element).removeClass("button-primary"));
  currency = event.target.id.toLowerCase();
  myChart.data.datasets.forEach(
    set =>
      (set.data =
        data_obj[set.label.replace(/\s+/g, "-").toLowerCase()][currency])
  );
  // plotter(); //calls plotter to regenerate plot instead of update (only adjusts a little bit)
  myChart.update();
  ticker_update();
};

//button - toggle graphs
let toggleData = () => {
  $(event.target).toggleClass("button-primary");
  // console.log(event.target.text);
  const toggle = myChart.data.datasets.filter(
    element => element.label === event.target.text
  )[0].hidden;
  myChart.data.datasets.filter(
    element => element.label === event.target.text
  )[0].hidden = !toggle;
  myChart.update();
};

//button - change time frame
let toggleTime = () => {
  const current = $("#time-period")
    .text()
    .slice(2);
  let index = time_frames.indexOf(current);
  const new_index = (++index)%time_frames.length;
  // console.log(current, index, new_index);

  time_period = time_frames[new_index];
  $("#time-period").text("1-"+time_period);
  ticker_update();
};
