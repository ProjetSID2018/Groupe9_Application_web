google.charts.load('current', {'packages':['corechart']});
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

google.charts.load('current', {'packages':['treemap']});
google.charts.setOnLoadCallback(drawChart);

val_most_treated_words=[
          ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
          ['Global',    null,                 0,                               0],
          ['Europe',    'Global',             0,                               0],
          ['Asia',      'Global',             0,                               0],
          ['Australia', 'Global',             0,                               0],
          ['Africa',    'Global',             0,                               0],
          ['Brazil',    'Global',            11,                              10],
          ['USA',       'Global',            52,                              31],
          ['Mexico',    'Global',            24,                              12],
          ['Canada',    'Global',            16,                              -23],
          ['France',    'Global',             42,                              -11],
          ['Germany',   'Global',             31,                              -2],
          ['Sweden',    'Global',             22,                              -13],
          ['Italy',     'Global',             17,                              4],
          ['UK',        'Global',             21,                              -5]
        ];

function drawChart() {
        var data = google.visualization.arrayToDataTable(val_most_treated_words)

        tree = new google.visualization.TreeMap(document.getElementById('chart_div_theme'));

        tree.draw(data, {
          minColor: '#f00',
          midColor: '#ddd',
          maxColor: '#0d0',
          headerHeight: 15,
          fontColor: 'black',
          showScale: true
        });
}