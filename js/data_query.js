// query for current prices
function curr_query() {
  $.ajax({
    url:
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cbitcoin-cash%2Cethereum%2Clitecoin&vs_currencies=usd%2Ccad%2Ceur",
    success: result => data_update(result),
    // complete: () => myChart.update(),
  });
  // console.log("single query");
}

// query for historical prices at a specific date
let hist_query = (coinID, date, timeframe) => {
  $.ajax({
    url:
      "https://api.coingecko.com/api/v3/coins/" +
      coinID +
      "/history?date=" +
      date,
    success: result => {
      // https://stackoverflow.com/questions/17781472/how-to-get-a-subset-of-a-javascript-objects-properties
      coin_hist[timeframe] = {[coinID]: (({ usd, cad, eur }) => ({ usd, cad, eur }))(result.market_data.current_price)};
    }
  });
};

//query for historical prices within a 1 day range
let dayrange_query = (coinID, currency) => {
  $.ajax({
    url:
      "https://api.coingecko.com/api/v3/coins/" +
      coinID +
      "/market_chart?vs_currency=" +
      currency +
      "&days=1",
    success: result => {
      // console.log(data_obj[coinID][currency]);
      data_obj[coinID][currency].unshift(
        ...result.prices
          .slice(-chart_length, -1)
          .map(element => Number(element[1].toFixed(2)))
      );
    },
    complete: () => plotter(),
  });
};
