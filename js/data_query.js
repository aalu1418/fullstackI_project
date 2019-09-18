// query for current prices
let query = () => {
  $.ajax({
    url:
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cbitcoin-cash%2Cethereum%2Clitecoin&vs_currencies=usd%2Ccad%2Ceur",
    success: result => {
      console.log(result);
    }
  });
};
