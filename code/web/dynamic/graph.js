var compt=0;

function start() {
	request_top_10();
    request_word_cloud();
    request_top_theme();
    request_gauge();
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
        //url:'http://130.120.8.250:5000/MostPublishedCat',
        url:'http://localhost:5000/test2',
        type: 'GET',
        dataType: 'json',
        success: top_theme,
        error: ajax_failed,
    });
}

function request_gauge() {
    $.ajax({
        //url:'/MostPublishedCat',
        url:'http://localhost:5000/gauge',
        type: 'GET',
        dataType: 'json',
        success: draw_gauge,
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
	  $('#word_cloud_cover').show();
    var tab = [];
    for (var i = 1; i <Object.keys(some_words).length+1; i++) {
        tab = tab.concat(some_words[i]);
    }
    var trend_colors = {
        'trend_very_positive': '#32CD32',
        'trend_positive': '#7FFF00',
        'trend_neutral': '#FFD700',
        'trend_negative': '#FF4500',
        'trend_very_negative': '#B22222'
    };
    var colored_tab = [];
    for (var i = 0;i<7;i++){
        var color = tab[i].trend;
        console.log(color);
        colored_tab = colored_tab.concat({text : tab[i].text, weight : tab[i].weight, color : trend_colors[color]});
    }
    $(".word_cloud_row_graph").jQCloud(colored_tab);
    $(document).ready(function() {
        setTimeout(function () {
            var obj = $(".word_cloud_cover").data("jqcloud");
            var data = obj.word_array;
            for (var i in data) {
                $("#" + data[i]["attr"]["id"]).css("color", data[i]["color"]);
            }
        });
    });
}

function top_theme(theme_pourcent) {
    $('#most_popular_theme').show();
    document.getElementById("most_popular_theme_pourcentage").textContent = theme_pourcent[1].pourcentage;
    document.getElementById("most_popular_theme_name").textContent = theme_pourcent[1].name;
}

function draw_gauge(data_gauge) {
	var title1 = data_gauge[1].feeling;
	var title2 = data_gauge[2].feeling;
	var title3 = data_gauge[3].feeling;
	var pourcent1 = data_gauge[1].pourcent;
	var pourcent2 = data_gauge[2].pourcent;
	var pourcent3 = data_gauge[3].pourcent;
	gauge(title1,title2,title3,pourcent1,pourcent2,pourcent3);
}

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

function ajax_failed() {
    compt+=1;
    if ( compt == 3){
        alert('erreur')
    };
}
