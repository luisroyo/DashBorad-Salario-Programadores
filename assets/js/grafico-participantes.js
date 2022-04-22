function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['39,9% são programadores FullStak',     39.8],
      ['26,2% cursam alguma graduação',      26.2],
      ['12,1% possuem entre 4 a 6 anos de experiência',  12.1],
      ['1,68% são devs que moram e trabalham fora do Brasil', 1.68],
      ['20,22% outros', 20.22]
    ]);

    var options = {
      title: 'Dos Participantes'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }