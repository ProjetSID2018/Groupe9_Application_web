var compt=0;

function start() {
	request_top_10();
    request_word_cloud();
    request_top_theme();
}

function request_top_10() {
	$('#top10_sources').hide();
    	$.ajax({
        	//url:'/Top10_source/',
        	url:'http://localhost:5000/test',
        	type: 'GET',
        	dataType: 'json',
        	success: drawBasic,
        	error: ajax_failed,
	});
}

function request_word_cloud() {
    $('#word_cloud_cover').hide();
    $.ajax({
        //url:'/Top10_pertinent',
        url:'http://localhost:5000/test1',
        type: 'GET',
        dataType: 'json',
        success: draw_cloud,
        error: ajax_failed,
    });
}

function request_top_theme() {
    $('#most_popular_theme').hide();
    $.ajax({
        //url:'/MostPublishedCat',
        url:'http://localhost:5000/test2',
        type: 'GET',
        dataType: 'json',
        success: top_theme,
        error: ajax_failed,
    });
}

function drawBasic(data_json) {
	google.charts.load('visualization', '1', {packages: ['corechart', 'bar']});
	google.charts.setOnLoadCallback(function(){
		var data = new google.visualization.DataTable();
		data.addColumn("string", "sources");
    		data.addColumn("number", "nombres d'articles");
    		for (var i = 1; i <=10; i++) {
    			data.addRow([data_json[i].source,data_json[i].nombre]);
		}
		var options = {
			title: 'Top 10 des thèmes les plus traités de la semaine.',
    		hAxis: {
        		title: 'sources',
        		format: 'string',
			},
        	vAxis: {
        		title: "nombres d'articles par source"
			}
		};
		var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
		$('#top10_sources').show();
		chart.draw(data, options);
		$(window).resize(function(){
			chart.draw(data, options);
		});
	});
	draw_table(data_json);
}

function draw_table(data_json) {
   var length = data_json.length;
   for (var i = 1; i <=Object.keys(data_json).length; i++) {
       document.getElementById('table_source_body').insertAdjacentHTML("beforeEnd",'<tr><td>'+data_json[i].source+'</td> <td>'+data_json[i].nombre+'</td></tr>');
   }
}

function draw_cloud(some_words) {
	var tab = [];
	for (var i = 1; i <Object.keys(some_words).length+1; i++) {
		tab = tab.concat(some_words[i]);
	}
	$(document).ready(function() {
		$(".word_cloud_row_graph").jQCloud(tab);
	});
	$('#word_cloud_cover').show();
}

function top_theme(theme_pourcent) {
    $('#most_popular_theme').show();
    document.getElementById("most_popular_theme_pourcentage").textContent = theme_pourcent[1].pourcentage;
    document.getElementById("most_popular_theme_name").textContent = theme_pourcent[1].name;
}


function ajax_failed() {
    compt+=1;
    if ( compt == 3){
        alert('erreur')
    };
}
