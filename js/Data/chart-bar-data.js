// Establezca una nueva familia de fuentes predeterminada y color de fuente para imitar el estilo predeterminado de Bootstrap
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *    ejemplo: formato_numero(1234.56, 2, ',', ' ');
  // *     retorno: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Arreglo para IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

let alive = 0;
let dead = 0;
let unknown = 0;
async function getApiCountCharacterStatus(url){
  const response = await fetch (url);
  var data = await response.json();
  if(response){
      hideloaderCountCharacterStatus();
      
  }
  showCountCharacterStatus(data);
}

getApiCountCharacterStatus(enponint + apiCharacterAll);

function hideloaderCountCharacterStatus(){
  console.log('Error');
}

function showCountCharacterStatus(data){
  
  if(data.results.length > 0 ){
    for(let r of data.results){
      if(r.status == 'Alive'){
        alive++;
      }else if(r.status == 'Dead'){
        dead++;
      }else if(r.status == 'unknown'){
        unknown++;
      }
    }    
  }

  // Ejemplo de gráfico de barras
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Vivos", " Muertos", " Desconocidos",],
    datasets: [{
      label: "Revenue",
      backgroundColor: " #4e73df",
      hoverBackgroundColor: " #FFC300 ",
      borderColor: "#FFC300 ",
      data: [alive, dead, unknown],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{        
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 20,
          maxTicksLimit: 5,
          padding: 10,
          // Incluir un signo de dólar en las garrapatas
          callback: function(value, index, values) {
            return '' + number_format(value);
          }
        },
        gridLines: {
          color: "rgb(244, 161, 177)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ':' + number_format(tooltipItem.yLabel);
        }
      }
    },
  }
});
}
