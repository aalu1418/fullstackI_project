// Chart Colors
const chartColors = opacity => ({
  red: "rgba(255, 99, 132," + opacity + ")",
  orange: "rgba(255, 159, 64," + opacity + ")",
  yellow: "rgba(255, 205, 86," + opacity + ")",
  green: "rgba(75, 192, 192," + opacity + ")",
  blue: "rgba(54, 162, 235," + opacity + ")",
  purple: "rgba(153, 102, 255," + opacity + ")",
  grey: "rgba(201, 203, 207," + opacity + ")"
});
const mainColors = chartColors(1);
const fillColors = chartColors(0.2);

//Chart Data Structs
const chart_length = 60;
let data_obj = {};

let data_update = new_dat => {
  if (Object.keys(data_obj).length === 0) {
    data_obj = new_dat;
    Object.keys(data_obj).forEach(crypto_key =>
      Object.keys(data_obj[crypto_key]).forEach(curr_key => {
        data_obj[crypto_key][curr_key] = [data_obj[crypto_key][curr_key]];
        dayrange_query(crypto_key, curr_key);
      })
    );
  } else {
    Object.keys(data_obj).forEach(crypto_key =>
      Object.keys(data_obj[crypto_key]).forEach(curr_key => {
        data_obj[crypto_key][curr_key].push(new_dat[crypto_key][curr_key]);
        data_obj[crypto_key][curr_key].shift();
      })
    );
    myChart.update();
  }
};

// Chart information---------------------------------
let myChart = {}
let currency = "usd";
const plotter = () => {
  const ctx = document.getElementById("myChart").getContext("2d");
  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: new Array(chart_length).fill(""),
      datasets: [
        {
          label: "Bitcoin",
          data: [...data_obj["bitcoin"][currency]],
          fill: true,
          backgroundColor: fillColors.blue,
          borderColor: mainColors.blue,
          lineTension: 0.05,
          hidden: false,
        },
        {
          label: "Bitcoin Cash",
          data: [...data_obj["bitcoin-cash"][currency]],
          fill: true,
          backgroundColor: fillColors.green,
          borderColor: mainColors.green,
          lineTension: 0.05,
          hidden: false,
        },
        {
          label: "Ethereum",
          data: [...data_obj["ethereum"][currency]],
          fill: true,
          backgroundColor: fillColors.orange,
          borderColor: mainColors.orange,
          lineTension: 0.05,
          hidden: false,
        },
        {
          label: "Litecoin",
          data: [...data_obj["litecoin"][currency]],
          fill: true,
          backgroundColor: fillColors.red,
          borderColor: mainColors.red,
          lineTension: 0.05,
          hidden: false,
        }
      ]
    },
    options: {}
  });
};
