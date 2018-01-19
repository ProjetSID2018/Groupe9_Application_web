// Groupe 9 
//author : P.S-B, N.C, L.C, V.F, T.R, F.G, K.B, S.D, M.D, M.V


// all of the data in this page concern the past 7 days


var compt=0;

//function beginning when the page is ready and that launches all the AJAX requests at once
function start() { 
	request_top_10();
    request_word_cloud();
    request_top_theme();
    request_gauge();
}

//all the following functions are AJAX requests for all the different charts
//They hide the parts of the page in wich the chart should be draw 
//If they successfuly receive the Json they pass it to the drawing function else they call a fail function.

//for our top 10 chart and table of source and their number of article
// data : source + number of article
function request_top_10() {
	$('#top10_sources').hide();
    	$.ajax({
        	//url:'http://130.120.8.250:5000/newspaper_by_article/',
        	url:'http://localhost:5000/newspaper_by_article',
        	type: 'GET',
        	dataType: 'json',
        	success: drawBasic,
        	error: ajax_failed,
	});
}

//for our word cloud 
//data : word + weight + trend
function request_word_cloud() {
    $('#word_cloud_cover').hide();
    $.ajax({
        //url:'http://130.120.8.250:5000/Top10_pertinent',
        url:'http://localhost:5000/test1',
        type: 'GET',
        dataType: 'json',
        success: draw_cloud,
        error: ajax_failed,
    });
}

//for the theme the most treated this week
//data : theme + pourcentage
function request_top_theme() {
    $('#most_popular_theme').hide();
    $.ajax({
        //url:'http://130.120.8.250:5000/best_label_week',
        url:'http://localhost:5000/best_label_week',
        type: 'GET',
        dataType: 'json',
        success: top_theme,
        error: ajax_failed,
    });
}

//for our 3 gauges
//data : top 3 feeling + rate
function request_gauge() {
    $.ajax({
        //url:'/top_3_rate_feeling',
        url:'http://localhost:5000/top_3_rate_feeling',
        type: 'GET',
        dataType: 'json',
        success: draw_gauge,
        error: ajax_failed,
    });
}

//all the drawing function receiving the Json data

//draw the top 10 chart and call the function for the pop-up
//uses google chart technology and the 10 first sources
function drawBasic(data_json) {
	google.charts.load('visualization', '1', {packages: ['corechart', 'bar']});
	google.charts.setOnLoadCallback(function(){
		var data = new google.visualization.DataTable();
		data.addColumn("string", "sources");
    		data.addColumn("number", "nombres d'articles");
    		for (var i = 1; i <=10; i++) {
    			data.addRow([data_json[i].newspaper,data_json[i].number_article]);
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
		$(window).resize(function(){
			chart.draw(data, options);
		});
	});
	draw_table(data_json);
}

//fill the table of the pop-up with sources and their number of articles
//uses the same data than the chart drawing function but not limited to the 10 first
function draw_table(data_json) {
   var length = data_json.length;
   for (var i = 1; i <=Object.keys(data_json).length; i++) {
       document.getElementById('table_source_body').insertAdjacentHTML("beforeEnd",'<tr><td>'+data_json[i].newspaper+'</td> <td>'+data_json[i].number_article+'</td></tr>');
   }
}

//draw the word cloud, the size of the word is determined by its weight and its color depends on its trend
//uses the jqcloud plugin and its method
function draw_cloud(some_words) {
	  $('#word_cloud_cover').show();
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
    $(".word_cloud_row_graph").jQCloud(colored_tab);
    $(document).ready(function() {
        setTimeout(function () {
            var obj = $(".word_cloud_row_graph").data("jqcloud");
            var data = obj.word_array;
            for (var i in data) {
                $("#" + data[i]["attr"]["id"]).css("color", data[i]["color"]);
            }
        });
    });
}

//show the most present theme and its percentage
function top_theme(theme_pourcent) {
    $('#most_popular_theme').show();
    document.getElementById("most_popular_theme_pourcentage").textContent = theme_pourcent[1].pourcentage;
    document.getElementById("most_popular_theme_name").textContent = theme_pourcent[1].name;
}

//those 2 functions draw 3 gauges of the feeling with the highest rate
//uses the just gage plugin we did it in 2 times to be more understandable
//uses the data to get the title and the rate of the 3 feeling
function draw_gauge(data_gauge) {
	var title1 = data_gauge[1].feeling;
	var title2 = data_gauge[2].feeling;
	var title3 = data_gauge[3].feeling;
	var pourcent1 = data_gauge[1].rate*100;
	var pourcent2 = data_gauge[2].rate*100;
	var pourcent3 = data_gauge[3].rate*100;
	gauge(title1,title2,title3,pourcent1,pourcent2,pourcent3);
}

//take the differents titles and percent as arguments and uses the methods of the plugin to draw 3 gauges
function gauge(title1,title2,title3,pourcent1,pourcent2,pourcent3) {
    var g1 = new JustGage({
        id: "g1",
        value: pourcent1,
        min: 0,
        max: 100,
        title: title1,
        label: "%"
    });

    var g2 = new JustGage({
        id: "g2",
        value: pourcent2,
        min: 0,
        max: 100,
        title: title2,
        label: "%"
    });

    var g3 = new JustGage({
        id: "g3",
        value: pourcent3,
        min: 0,
        max: 100,
        title: title3,
        label: "%"
    });
}

//this function is used when the AJAX request failed
//if all the 4 requests failed the alert message will come out
function ajax_failed() {
    compt+=1;
    if ( compt == 4){
        alert('erreur')
    };
}
