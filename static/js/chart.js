let barColors = [
  "rgba(255, 159, 64, 0.2)",
  "rgba(255, 205, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(201, 203, 207, 0.2)",
];

let borderColor = [
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)",
];
Chart.defaults.global.defaultFontColor = "#fff";
Chart.defaults.global.legend.display = false;

export function chartGenerator(charts, exec_times) {
  return new Chart("myChart", {
    type: "bar",
    data: {
      labels: charts,
      datasets: [
        {
          backgroundColor: barColors,
          borderColor: borderColor,
          borderWidth: 1,
          data: exec_times,
        },
      ],
    },
    options: {
      tooltips: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.yLabel;
          },
        },
      },
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 0.5,
            categoryPercentage: 0.5,
          },
        ],
        y: {
          beginAtZero: true,
          stacked: true,
        },
        yAxes: [
          {
            ticks: {
              display: false,
            },
          },
        ],
      },
    },
  });
}
