//calls to start the page
curr_query();

//auto querying the api for new data (every 1 minute)
$(document).ready(() => setInterval("curr_query()", 60000));

//buttons listeners
$("#BTC, #BCH, #ETH, #LTC").click(() => toggleData()) //toggle on & off crypto
$("#USD, #CAD, #EUR").click(() => toggleOther(["USD", "CAD", "EUR"])) //change display currency

//button - toggle other buttons
let toggleOther = (button_array) => {
  $(event.target).addClass("button-primary");
  button_array.filter(element => event.target.id != element).forEach(element => $('#'+element).removeClass("button-primary"))
}

//button - toggle graphs
let toggleData = () => {
  $(event.target).toggleClass("button-primary");
  console.log(event.target.text);
  console.log(myChart.data.datasets.filter(element => element.label === event.target.text)[0].hidden)
}
