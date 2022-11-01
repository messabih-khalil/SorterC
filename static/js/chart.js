var barColors = ["red", "green", "blue"];

Chart.defaults.global.defaultFontColor = "#fff";

export function chartGenerator(charts, exec_times) {
  return new Chart("myChart", {
    type: "bar",
    data: {
      labels: charts,
      datasets: [
        {
          backgroundColor: barColors,
          data: exec_times,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 0.5,
          },
        ],
        y: {
          beginAtZero: true,
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
