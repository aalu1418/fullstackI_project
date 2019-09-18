// query for current prices
let curr_query = () => {
  $.ajax({
    url:
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cbitcoin-cash%2Cethereum%2Clitecoin&vs_currencies=usd%2Ccad%2Ceur",
    success: result => {
      console.log(result);
    }
  });
};

// query for historical prices
let hist_query = (coinID, date) => {
  $.ajax({
    url:
      "https://api.coingecko.com/api/v3/coins/"+coinID+"/history?date="+date,
    success: result => {
      console.log(result);
    }
  });
};
