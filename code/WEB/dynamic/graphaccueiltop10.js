        var datatest=[
    {
        "source": "figaro",
        "nombre" : 210
    },
    {
        "source": "monde",
        "nombre": 2015
    },
    {
        "source": "depeche",
        "nombre" : 50
    },
    {
        "source": "set",
        "nombre": 45
    },
    {
        "source": "truc",
        "nombre" : 54654
    },
    {
        "source": "ouai",
        "nombre": 45
    },
    {
        "source": "plus",
        "nombre" : 76
    },
    {
        "source": "trente",
        "nombre": 71
    },
    {
        "source": "aller",
        "nombre" : 828
    },
    {
        "source": "test",
        "nombre": 783
    }
]

    google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'sources');
      data.addColumn('number', 'nombre');

for (var i = 0; i <10; i++) {
      data.addRow([ datatest[i].source,datatest[i]['nombre'] ]);
    }

//       data.addRows( [ datatest[0]['source'],datatest[0]['nombre'] ],
// [ datatest[1].source,datatest[1].nombre]);

      var options = {
        title: 'Motivation Level Throughout the Day',
        hAxis: {
          title: 'sources',
          format: 'string',
        },
        vAxis: {
          title: 'nombres'
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    }