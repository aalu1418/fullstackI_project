//button listeners
$("#BTC, #BCH, #ETH, #LTC").click(() => toggleData()); //toggle on & off crypto
$("#USD, #CAD, #EUR").click(() => toggleOther(["USD", "CAD", "EUR"])); //change display currency
$("#time-period").click(() => toggleTime()); //change the length of time for ticker display
$("#check-balance").click(() => get_balance()); //update ether balance
$(".help-button").click(() => toggleHelp()); //toggle help text

//button - toggle other buttons & change currency displayed
let toggleOther = button_array => {
  $(event.target).addClass("button-primary");
  button_array
    .filter(element => event.target.id != element) //filter button array for the other buttons
    .forEach(element => $("#" + element).removeClass("button-primary")); //remove the button-primary class (blue button)
  currency = event.target.id.toLowerCase(); //set the global variable currency to selected button
  myChart.data.datasets.forEach(
    set =>
      (set.data =
        data_obj[set.label.replace(/\s+/g, "-").toLowerCase()][currency]) //change where myChart looks for data
  );
  //calls plotter to regenerate plot instead of update (only adjusts a little bit)
  myChart.update();
  ticker_update(); //updates ticker to new pricess
};

//button - toggle graphs
let toggleData = () => {
  $(event.target).toggleClass("button-primary"); //toggles blue or white
  // console.log(event.target.text);
  const toggle = myChart.data.datasets.filter(
    element => element.label === event.target.text
  )[0].hidden; //find the value of the hidden key for the specific data set
  myChart.data.datasets.filter(
    element => element.label === event.target.text
  )[0].hidden = !toggle; //toggle the value for the hidden key - true/falses
  myChart.update(); //update chart
};

//button - change time frame in ticker
let toggleTime = () => {
  const current = $("#time-period")
    .text()
    .slice(2);// pulls time frame from "1-hour" becomes "hour"
  let index = time_frames.indexOf(current); //finds current index in global time_frames array
  const new_index = (++index)%time_frames.length; //adds one to index to change date (mod used to make sure it cycles)
  // console.log(current, index, new_index);

  time_period = time_frames[new_index]; //set new timeframe
  $("#time-period").text("1-"+time_period); //change name of button
  ticker_update(); //update ticker
};


//button - show help text
let toggleHelp = () => {
  const obj = $(event.target).parent().next(".help-box"); //finds following div with help-box class
  $(obj).slideToggle(); //slide toggle visibility
}
