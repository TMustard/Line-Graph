new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [2014, 2015, 2016],
    datasets: [{
        data: [73, 199, 395],
        label: "Number of Graduates",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Galvanize graduates by year'
    }
  }
});
