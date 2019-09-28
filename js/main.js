//definitions (global variabless)
let myChart = {}
const chart_length = 60;
let data_obj = {};
let ticker_keys = [];
let coin_hist = {};
let currency = "cad";
let current_prices = [];
let time_period = "hour";
const time_frames = ["hour", "day", "week", "month", "year"];

// Chart Colors
const chartColors = opacity => ({
  red: "rgba(255, 99, 132," + opacity + ")",
  orange: "rgba(255, 159, 64," + opacity + ")",
  yellow: "rgba(255, 205, 86," + opacity + ")",
  green: "rgba(75, 192, 192," + opacity + ")",
  blue: "rgba(54, 162, 235," + opacity + ")",
  purple: "rgba(153, 102, 255," + opacity + ")",
  grey: "rgba(201, 203, 207," + opacity + ")"
});
const mainColors = chartColors(1);
const fillColors = chartColors(0.2);

//check internet connection
if(!navigator.onLine) { // true|false
	$("#myChart").css("display","none")
  $(".empty-chart").css("display", "flex") //if no internet show empty chart
}

//calls to start the page
curr_query();
start_animation();
$(document).ready(() => get_balance());

//auto querying the api for new data (every 1 minute)
$(document).ready(() => setInterval("curr_query()", 60000));
