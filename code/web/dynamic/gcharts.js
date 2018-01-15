google.charts.load('current', {'packages':['corechart', 'table']});
/*google.charts.setOnLoadCallback(drawChart);

var val_most_treated_themes = [
		        ['Theme', 					'Effectif'],
            ['Politique fr',       5523095],
            ['Art et Culture',    31090763],
            ['Economie',          61801570],
            ['Science',           73137148],
            ['Sports',            74856000],
            ['France',            79716203],
		        ['International',		 	81902307],
		        ['Santé',    		     141850000]
		      ];

function drawChart() {
  var data = google.visualization.arrayToDataTable(val_most_treated_themes);
  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1, { calc: "stringify",
    sourceColumn: 1,
    type: "string",
    role: "annotation" 
  }
  ,2]);

  var options = {
    title: 'Thèmes les plus traités',
    width: 600,
    height: 400,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.BarChart(document.getElementById('series_chart_theme'));
  chart.draw(view, options);
  };

*/

//google.charts.load("current", {packages:["corechart"]});
var val_most_treated_themes = [
            ['Theme',           'Effectif'],
            ['Art et Culture',    31090763],
            ['Economie',          61801570],
            ['Science',           73137148],
            ['Sports',            74856000],
            ['France',            79716203],
            ['International',     81902307],
            ['Santé',            141850000]
          ];
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable(val_most_treated_themes);


      var options = {   
        hAxis : {
          title : "Nombre d'articles",
          minValue: 0
        },
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.BarChart(document.getElementById("series_chart_theme"));
      chart.draw(data, options);
  }

google.charts.setOnLoadCallback(drawTable);
// var cssClassNames = {'tableCell': 'table_trend_cell', 'headerCell': 'table_header_cell'};

var words_associated_trend_1 = [
  ["Mots liés au thème",  "Tendance"],
  ["Verbe", "Tendance1"],
  ["Nom", "Tendance2"],
  ["Adjectif", "Tendance3"]
];

var words_associated_trend_2 = [
  ["Mots liés au thème",  "Tendance"],
  ["Word1", "Res1"],
  ["Word2", "Res2"],
  ["Word3", "Res3"]
];

var words_associated_trend_3 = [
  ["Mots liés au thème",  "Tendance"],
  ["Expression1", "Analyse1"],
  ["Expression2", "Analyse2"],
  ["Expression3", "Analyse3"]
];

var json_table = {
   '1': {
       word_link: "Lorem",
       trend : 13
     },
     '2':{
       text: "Ipsum",
       weight: 10.5
     }
}

function drawTable() {
    // var options = { 'allowHtml': true, 'cssClassNames': cssClassNames };
    var options = {
      showRowNumber: true,
      width: '100%', 
      height: '100%'
    };
    var data = google.visualization.arrayToDataTable(words_associated_trend_1);
    var table = new google.visualization.Table(document.getElementById('table_div'));
    table.draw(data);
};