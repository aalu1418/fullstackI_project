//definitions
let coin_hist = {};
const time_frames = ["day", "week", "month", "year"]
let myChart = {}
let currency = "usd";
const chart_length = 60;
let data_obj = {};

//calls to start the page
curr_query();

//auto querying the api for new data (every 1 minute)
$(document).ready(() => setInterval("curr_query()", 60000));
