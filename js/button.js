//button listeners
$("#BTC, #BCH, #ETH, #LTC").click(() => toggleData()) //toggle on & off crypto
$("#USD, #CAD, #EUR").click(() => toggleOther(["USD", "CAD", "EUR"])) //change display currency

//button - toggle other buttons & change currency displayed
let toggleOther = (button_array) => {
  $(event.target).addClass("button-primary");
  button_array.filter(element => event.target.id != element).forEach(element => $('#'+element).removeClass("button-primary"))
  currency = event.target.id.toLowerCase();
  myChart.data.datasets.forEach((set) => set.data = data_obj[set.label.replace(/\s+/g, '-').toLowerCase()][currency])
  // plotter(); //calls plotter to regenerate plot instead of update (only adjusts a little bit)
  myChart.update();
  ticker_update();
}

//button - toggle graphs
let toggleData = () => {
  $(event.target).toggleClass("button-primary");
  // console.log(event.target.text);
  const toggle = myChart.data.datasets.filter(element => element.label === event.target.text)[0].hidden;
  myChart.data.datasets.filter(element => element.label === event.target.text)[0].hidden = !toggle;
  myChart.update();
}
