google.charts.load('current', {'packages':['corechart', 'table']});
google.charts.setOnLoadCallback(drawSeriesChart);

var val_most_treated_themes = [
		        ['Theme', 				'X', 		'Y',		"Ordre",		 'Effectif'],
		        ['International',		 1,			 1,				0, 				81902307],
		        ['Politique fr',		 2,			 2,				1, 				5523095],
		        ['France',   			 3,			 3,				2, 				79716203],
		        ['Economie',    		 4,			 4,				3,  			61801570],
		        ['Science',    			 5,			 5,				4,  			73137148],
		        ['Art et Culture',   	 6,			 6,				5,  			31090763],
		        ['Sports',    			 7,			 7,				6, 				74856000],
		        ['Santé',    		     8,			 8,				7, 				141850000],
		      ];

function drawSeriesChart() {

    var data = google.visualization.arrayToDataTable(val_most_treated_themes);
    var options = {
      title: 'Thèmes les plus traités',
      hAxis: {title: 'X'},
      vAxis: {title: 'Y'},
      bubble: {textStyle: {fontSize: 11}}
      };

    var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_theme'));
    chart.draw(data, options);
};


google.charts.setOnLoadCallback(drawTable);
// var cssClassNames = {'tableCell': 'table_trend_cell', 'headerCell': 'table_header_cell'};

var words_associated_trend_1 = [
  ["Mots liés au thème",  "Tendance"],
  ["Mot1", "Tendance1"],
  ["Mot2", "Tendance2"],
  ["Mot3", "Tendance3"]
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

/*
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
*/

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