// query for current prices
const curr_query = () => {
  $.ajax({
    url:
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cbitcoin-cash%2Cethereum%2Clitecoin&vs_currencies=usd%2Ccad%2Ceur",
    success: result => data_update(result),
    // complete: () => myChart.update(),
  });
  // console.log("single query");
}

// query for historical prices at a specific date
const hist_query = (coinID, date, timeframe) => new Promise(resolve => {
  // console.log("hist query called");
  $.ajax({
    url:
      "https://api.coingecko.com/api/v3/coins/" +
      coinID +
      "/history?date=" +
      date,
    success: result => {
      // https://stackoverflow.com/questions/17781472/how-to-get-a-subset-of-a-javascript-objects-properties
      if (coin_hist[timeframe] === undefined){
        coin_hist[timeframe] = {};
      }
      coin_hist[timeframe][coinID] = (({ usd, cad, eur }) => ({ usd, cad, eur }))(result.market_data.current_price);
      // console.log("hist query completed")
      resolve();
    }
  });
})

//query for historical prices within a 1 day range
const dayrange_query = (coinID, currency) => {
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

const etherscan_query = (public_key) => {
  // console.log("etherscan-query");
  $.ajax({
    url:"https://api-ropsten.etherscan.io/api?module=account&action=balance&address="+public_key+"&tag=latest",
    success: result => {
      // console.log(result.result);
      const balance = result.result/1000000000000000000; //convert from wei to ether
      $("#metamask-balance").text(balance);
    }
  })
}
