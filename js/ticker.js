//main ticker call
const ticker_update = () => {
  //for getting current price from data_objs
  current_prices = ticker_keys.map(element =>
    data_obj[element][currency].slice(-1)[0]
  );

  ticker_price_update(); //update crypto price
  // console.log("ticker update called");
  ticker_change_update(); //update crypto change
}

//update ticker actual prices
let ticker_price_update = () => {
  //formatting number to have two decimal places
  let formatted_prices = current_prices.map(element => element.toFixed(2)) //format price to 2 decimal placess

  //for printing the current price with the proper units for specific currency
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
    $("#price-" + element).text(strings[index]); // print current price
  });
};

//get history of each coin at specific intervals
let get_history = () => new Promise(async resolve =>{
  // console.log("get history called");
  //get proper date for each time_frame (hour, day, week, etc)
  let dates = time_frames.map(element =>
    moment()
      .subtract(1, element)
      .format("D-M-Y")
  );

  //loop through each time frame and crypto
  for (ii in time_frames){
    for (jj in ticker_keys){
      // console.log("hist query function called");
      await hist_query(ticker_keys[jj], dates[ii], time_frames[ii]) //use hist_query to get past price from coingecko
    }
  }
  // console.log("get history completed");
  resolve(); //resolve promises
})

//update change of each coin
let ticker_change_update = () => {
  const historical_price = ticker_keys.map((key) => coin_hist[time_period][key][currency]) //get historical price from coin_hist
  const price_change = current_prices.map((element, index) => element - historical_price[index]) //calculate difference from current price

  //formatting for printing string
  const change_string = price_change.map((element) => {
    if (currency === "eur"){
      return element.toFixed(2)+" \u20ac"
    }
    else {
      if (element < 0){
        return "-$"+Math.abs(element).toFixed(2) //for negative numbers
      }
      else {
        return "$"+element.toFixed(2)
      }
    }
  })
  ticker_keys.forEach((coinID, index) => {
    $("#change-"+coinID).text(change_string[index]) //set text
    if (price_change[index] < 0){//set arrow direction and color
      $("#change-"+coinID).next().text("expand_more")
      $("#change-"+coinID).parent().css("color","red")
    }
    else {
      $("#change-"+coinID).next().text("expand_less")
      $("#change-"+coinID).parent().css("color","green")
    }
  })
}
