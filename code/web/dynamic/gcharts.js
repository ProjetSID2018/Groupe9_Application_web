function start() {
	request_number_article_theme();
	request_word_trend();
	request_word_cloud_theme();
	//request_word_cloud();
}

function request_number_article_theme() {
	$.ajax({
		//url:'',
		//url:'http://localhost:5000/theme',
		url:'http://127.0.0.1:5000/theme',
		type: 'GET',
		dataType: 'json',
		success: draw_number_article_theme,
		error: ajax_failed,
	});
}

function request_word_trend() {
	$( ".radio" ).click(function() {
		var theme = $(this).attr('id');
		$.ajax({
			//url:'',
			//url:'http://localhost:5000/trend/'+theme,
			url:'http://127.0.0.1:5000/trend/'+theme,
			type: 'GET',
			dataType: 'json',
			success: draw_word_trend,
			error: ajax_failed,
		});
	});
}

function request_word_cloud_theme() {
	$( ".radio" ).click(function() {
		var theme = $(this).attr('id');
		$.ajax({
			//url:'',
			//url:'http://localhost:5000/cloud/'+theme,
			url:'http://127.0.0.1:5000/cloud/'+theme,
			type: 'GET',
			dataType: 'json',
			success: draw_word_cloud_trend,
			error: ajax_failed,
		});
	});
}

function draw_number_article_theme(data_json_most_treated_themes) {
	//$("#most_treated_word_article_theme").hide();
	//$("#world_cloud_div_theme").hide();
	$("#3_main_words_article_theme").hide();
	//$('#word_cloud_cover').hide();
	google.charts.load('visualization', '1', {packages: ['corechart']});
	google.charts.setOnLoadCallback(function(){
    	var tab = new Array(['Theme','Effectif']);
		for (var i = 1; i <=Object.keys(data_json_most_treated_themes).length; i++) {
			tab[i] = [data_json_most_treated_themes[i].theme,data_json_most_treated_themes[i].effectif];
		}
		var data = new google.visualization.arrayToDataTable(tab);
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
		$(window).resize(function(){
			chart.draw(data, options);
		});
	});
	$("#most_treated_theme_article_theme").show();
}


function draw_word_trend(data_json_trend_themes) {
	$("#most_treated_theme_article_theme").hide();
	google.charts.load('visualization', '1', {packages: ['table']});
	google.charts.setOnLoadCallback(function(){
    	var options = {
      		showRowNumber: true,
      		width: '100%',
      		height: '100%'
    	};
    	var trend_translated = {
  			'Strongly_increasing_trend': 'En très forte hausse',
  			'Increasing_trend': 'En hausse',
  			'No_trend': 'Stagnante',
  			'Decreasing_trend': 'En baisse',
  			'Strongly_decreasing_trend': 'En très forte baisse'
		};
    	var tab = new Array(['Mots liés au thème',  'Tendance']);
		for (var i = 1; i <=Object.keys(data_json_trend_themes).length; i++) {
			var json_trend = data_json_trend_themes[i].trend;
			tab[i] = [data_json_trend_themes[i].text, trend_translated[json_trend]];
		}
    	var data = google.visualization.arrayToDataTable(tab);
    	var table = new google.visualization.Table(document.getElementById('table_div'));
    	table.draw(data);
	});
	$("#3_main_words_article_theme").show();
}

function draw_word_cloud_trend(some_words) {
	$("div.modal-bg").removeClass("hide");
	$("#most_treated_theme_article_theme").hide();
	var tab = [];
	for (var i = 1; i <Object.keys(some_words).length+1; i++) {
		tab = tab.concat(some_words[i]);
	}
	var trend_colors = {
  		'Strongly_increasing_trend': '#32CD32',
  		'Increasing_trend': '#7FFF00',
  		'No_trend': '#FFD700',
  		'Decreasing_trend': '#FF4500',
  		'Strongly_decreasing_trend': '#B22222'
	};
	var colored_tab = [];
	for (var i = 0;i<7;i++){
  		var color = tab[i].trend;
  		colored_tab = colored_tab.concat({text : tab[i].text, weight : tab[i].weight, color : trend_colors[color]});
	}
	$(".world_cloud_div_theme").jQCloud(colored_tab);
	$(document).ready(function() {
		//$(".world_cloud_div_theme").jQCloud('destroy');
		//$(".word_cloud_row_graph").jQCloud(tab);
		$(".world_cloud_div_theme").jQCloud('update', colored_tab);
		setTimeout(function () {
    		var obj = $(".world_cloud_div_theme").data("jqcloud");
    		var data = obj.word_array;
    		for (var i in data) {
        		$("#" + data[i]["attr"]["id"]).css("color", data[i]["color"]);
    		}
		});
	});
	$('#most_treated_word_article_theme').show();
}


function ajax_failed() {
//     compt+=1;
//     if ( compt == 3){
//         alert('erreur')
//     };
	alert('erreur');
}