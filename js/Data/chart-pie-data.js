// Set new default font family and font color to mimic Bootstrap's default stylingEstablezca una nueva familia de fuentes predeterminada y color de fuente para imitar el estilo predeterminado de Bootstrap
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Ejemplo de gráfico circular
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Temporada 1", "Temporada 2", "Temporada 3", "HTemporada 4"],
    datasets: [{
      data: [11, 10, 10, 10],
      backgroundColor: ['#581845', '#C70039', '#900C3F', '#FF5733'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf', '#17a600'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
