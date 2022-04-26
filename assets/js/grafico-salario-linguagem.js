google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['City', 'Ano 2022'],
        ['JAVASCRIPT, 3557 Participantes', 7113.78],
        ['JAVA, 2048 Participantes', 8070.31],
        ['C#, 1614 Participantes', 7810.90],
        ['PHP, 1227 Participantes', 6209.53],
        ['PYTHON, 881 Participantes', 8585.61],
        ['TYPESCRIPT, 464 Participantes', 7209.55],
        ['KOTLIN, 269 Participantes', 9413.14],
        ['DART, 234 Participantes', 6459.89],
        ['DELPHI, 194 Participantes', 6492.76],
        ['RUBY, 185 Participantes', 10143.72]
      ]);

      var options = {
        title: 'Média salárial das 10 linguagens mais citadas pelos Devs',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Valor Salário',
          minValue: 0
        },
        vAxis: {
          title: 'Linguagem'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div_linguagem'));

      chart.draw(data, options);
    }