//Chart Data Structs
let data_update = async new_dat => {
  if (Object.keys(data_obj).length === 0) {
    data_obj = new_dat;
    ticker_keys = Object.keys(data_obj);
    Object.keys(data_obj).forEach(crypto_key =>
      Object.keys(data_obj[crypto_key]).forEach(curr_key => {
        data_obj[crypto_key][curr_key] = [data_obj[crypto_key][curr_key]];
        dayrange_query(crypto_key, curr_key);
      })
    );
    await get_history();
  } else {
    Object.keys(data_obj).forEach(crypto_key =>
      Object.keys(data_obj[crypto_key]).forEach(curr_key => {
        data_obj[crypto_key][curr_key].push(new_dat[crypto_key][curr_key]);
        data_obj[crypto_key][curr_key].shift();
      })
    );
    myChart.update();
  }
  ticker_update();
};

// Chart information---------------------------------
const plotter = () => {
  const ctx = document.getElementById("myChart").getContext("2d");
  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: new Array(chart_length).fill(""),
      datasets: [
        {
          label: "Bitcoin",
          data: data_obj["bitcoin"][currency],
          fill: true,
          backgroundColor: fillColors.blue,
          borderColor: mainColors.blue,
          lineTension: 0.05,
          hidden: false
        },
        {
          label: "Bitcoin Cash",
          data: data_obj["bitcoin-cash"][currency],
          fill: true,
          backgroundColor: fillColors.green,
          borderColor: mainColors.green,
          lineTension: 0.05,
          hidden: false
        },
        {
          label: "Ethereum",
          data: data_obj["ethereum"][currency],
          fill: true,
          backgroundColor: fillColors.orange,
          borderColor: mainColors.orange,
          lineTension: 0.05,
          hidden: false
        },
        {
          label: "Litecoin",
          data: data_obj["litecoin"][currency],
          fill: true,
          backgroundColor: fillColors.red,
          borderColor: mainColors.red,
          lineTension: 0.05,
          hidden: false
        }
      ]
    },
    options: {}
  });
};
