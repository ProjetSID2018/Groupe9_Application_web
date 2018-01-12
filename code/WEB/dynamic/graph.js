function start() {
	request_top_10();
	request_word_cloud();
}

function request_top_10() {
	$('#top10_sources').hide();
    	$.ajax({
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
        url:'http://localhost:5000/test1',
        type: 'GET',
        dataType: 'json',
        success: draw_cloud,
        error: ajax_failed,
    });
}


function drawBasic(data_json) {
	google.charts.load('visualization', '1', {packages: ['corechart', 'bar']});
	google.charts.setOnLoadCallback(function(){
		var data = new google.visualization.DataTable();
		data.addColumn("string", "sources");
    		data.addColumn("number", "nombres d'articles");
    		for (var i = 1; i <11; i++) {
    			data.addRow([data_json[i].source,data_json[i].nombre]);
		}
		var options = {
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
	});
}

function draw_cloud(some_words) {
	var tab = [];
	for (var i = 1; i <11; i++) {
		tab = tab.concat(some_words[i]);
	}
	$(document).ready(function() {
		$(".word_cloud_row_graph").jQCloud(tab);
	});
	$('#word_cloud_cover').show();
}


function ajax_failed() {
    alert('erreur');
}
