google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart); 
function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Júnior',     31.94],
      ['Pleno',      31.05],
      ['Sênior',  25.99],
      ['Estágio', 8.10],
      ['Outros', 2.93]
    ]);

    var options = {
      title: 'Dos Participantes',
      width:'100%',
      height:'400px'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }