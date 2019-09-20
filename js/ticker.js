//update ticker actual prices
let ticker_update = () => {
  let ticker_keys = Object.keys(data_obj);
  let current_prices = ticker_keys.map(element =>
    data_obj[element][currency].slice(-1)[0].toFixed(2)
  );
  let strings = [];

  if (currency === "usd") {
    strings = current_prices.map(element => "US $" + element);
  } else if (currency === "cad") {
    strings = current_prices.map(element => "CA $" + element);
  } else {
    strings = current_prices.map(element => element + " \u20ac");
  }

  ticker_keys.forEach((element, index) => {
    $("#price-" + element).text(strings[index]);
  });
};

//get history of each coin at specific intervals
let get_history = () => {
  let dates = time_frames.forEach(element =>
    moment()
      .subtract(1, element)
      .format("D-M-Y")
  );
  console.log(dates);
  time_frames.forEach((time, index) => {
    Object.keys(data_obj).forEach(crypt =>
      hist_query(crypt, dates[index], time)
    );
  });
};
