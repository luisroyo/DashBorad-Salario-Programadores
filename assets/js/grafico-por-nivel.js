function drawVisualization() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
      ['País' , '         Média salárial'],
      ['PORTUGAL',               12153.83],
      ['CANADA',                 29806.00],
      ['ALEMANHA',               29857.64],
      ['IRLANDA',                26389.33],      
      ['JAPÃO',                  18786.21],
      ['ANGOLA',                 18786.14],
      ['EUA',                    33000.33],
      ['HOLANDA',                31667.17],
      ['INGLATERRA',             26750.50],
      ['PAÍSES BAIXO',           34000.40]
    ]);

    var options = {       
      title : 'Os devs tem curso superior?',
      vAxis: {title: 'Salário'},
      hAxis: {title: 'Países'},
      seriesType: 'bars',
      series: {5: {type: 'line'}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }