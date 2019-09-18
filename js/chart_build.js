// Chart Framework
let chartColors = (opacity) => (
  {red: 'rgba(255, 99, 132,'+opacity+')',
  orange: 'rgba(255, 159, 64,'+opacity+')',
  yellow: 'rgba(255, 205, 86,'+opacity+')',
  green: 'rgba(75, 192, 192,'+opacity+')',
  blue: 'rgba(54, 162, 235,'+opacity+')',
  purple: 'rgba(153, 102, 255,'+opacity+')',
  grey: 'rgba(201, 203, 207,'+opacity+')'}
);
let mainColors = chartColors(1)
let fillColors = chartColors(0.2)

// Chart information---------------------------------
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [1, 2, 3],
    datasets: [
      {
        label: "test 1",
        data: [1, 2, 3],
        fill: true,
        backgroundColor: fillColors.blue,
        borderColor: mainColors.blue,
        lineTension: 0.05,
      },
      {
        label: "test 2",
        data: [3, 1, 2],
        fill: true,
        backgroundColor: fillColors.red,
        borderColor: mainColors.red,
        lineTension: 0.05,
      }
    ]
  },
  options: {}
});
