//main ticker call
const ticker_update = () => {
  //for getting current price
  current_prices = ticker_keys.map(element =>
    data_obj[element][currency].slice(-1)[0]
  );

  ticker_price_update();
  // console.log("ticker update called");
  ticker_change_update();
}

//update ticker actual prices
let ticker_price_update = () => {
  //formatting number to have two decimal places
  let formatted_prices = current_prices.map(element => element.toFixed(2))

  //for printing the current price
  let strings = [];
  if (currency === "usd") {
    strings = formatted_prices.map(element => "US $" + element);
  } else if (currency === "cad") {
    strings = formatted_prices.map(element => "CA $" + element);
  } else {
    strings = formatted_prices.map(element => element + " \u20ac");
  }

  //actual printing command
  ticker_keys.forEach((element, index) => {
    $("#price-" + element).text(strings[index]);
  });
};

//get history of each coin at specific intervals
let get_history = () => new Promise(async resolve =>{
  // console.log("get history called");
  //get proper date for each time_frame
  let dates = time_frames.map(element =>
    moment()
      .subtract(1, element)
      .format("D-M-Y")
  );

  for (ii in time_frames){
    for (jj in ticker_keys){
      // console.log("hist query function called");
      await hist_query(ticker_keys[jj], dates[ii], time_frames[ii])
    }
  }
  // console.log("get history completed");
  resolve();
})

//update change of each coin
let ticker_change_update = () => {
  let historical_price = []
  if (time_period === "hour"){
    historical_price = ticker_keys.map((key) => data_obj[key][currency][0])
  }
  else {
    historical_price = ticker_keys.map((key) => coin_hist[time_period][key][currency])
  }
  const price_change = current_prices.map((element, index) => element - historical_price[index])

  const change_string = price_change.map((element) => {
    if (currency === "eur"){
      return element.toFixed(2)+" \u20ac"
    }
    else {
      if (element < 0){
        return "-$"+Math.abs(element).toFixed(2)
      }
      else {
        return "$"+element.toFixed(2)
      }
    }
  })
  ticker_keys.forEach((coinID, index) => {
    $("#change-"+coinID).text(change_string[index])
    if (price_change[index] < 0){
      $("#change-"+coinID).next().text("expand_more")
      $("#change-"+coinID).parent().css("color","red")
    }
    else {
      $("#change-"+coinID).next().text("expand_less")
      $("#change-"+coinID).parent().css("color","green")
    }
  })
}
