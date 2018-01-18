/*Lien Wiki*/
function wiki(word){
	$.ajax({
      url:'http://localhost:5000/wiki' + '/' + word,
      type: 'GET',
      dataType: 'json',
      success: function(code_html, statut){
      	if (Object.keys(code_html).length==1){
      	//word_chaine.replace(/ /g,"");
      	var text = '<a id=wiki_a_research href="'+code_html[1].link+'"><img id=wiki_img_research src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png" width="50" height="50">'+code_html[1].word+'</img></a>';
      	$('#wiki').html(text);}},
      error: ajax_failed,
    });
} 


/*Boites des dates*/

function verification(word,start,end){
d1=formattedDate(start,'mmddyyyy');
d2=formattedDate(end,'mmddyyyy');
if (d1==false || d2==false){
  alert('date impossible,réessayez')
  }else{
    d1=new Date(d1)
    d2=new Date(d2)
    if (word=='' ||  d2<d1){
      if (word==''){
        alert('Il faut absolument rentrer un mot')
      }else{
        alert('Il faut absolument que la première date soit inférieur ou égale à la deuxième')      
      }
      return false
    }else{
      return true
    }
  }
}

function formattedDate(date,type) {
  var day="";var month="";var year="";
  if (date.substring(2,3)=='/' && date.substring(5,6)=='/'){day=date.substring(0,2); month=date.substring(3,5); year=date.substring(6,10)}
  if (date.substring(2,3)=='/' && date.substring(4,5)=='/'){day=date.substring(0,2); month=date.substring(3,4); year=date.substring(5,9)}
  if (date.substring(1,2)=='/' && date.substring(3,4)=='/'){day=date.substring(0,1); month=date.substring(2,3); year=date.substring(4,8)}
  if (date.substring(1,2)=='/' && date.substring(4,5)=='/'){day=date.substring(0,1); month=date.substring(2,4); year=date.substring(5,9)}
  if (day!="" && month!="" && year!=""){
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (day<=31 && month<=12 && type=='mmddyyyy'){
      return `${month}/${day}/${year}`;
    }else if (day<=31 && month<=12 && type=='yyyymmdd'){
      return `${year}-${month}-${day}`;
    }else{
      return false;
    }
  }else{
    return false
  }
}



/*Auto-completion*/
/*var countries = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: 'code/web/countries.json'
});
$('#prefetch .typeahead').typeahead(null, {
  name: 'countries',
  source: countries
});*/



/*Boutton de recherche*/
$("#buttonResearch_input_research").click(function() {
 var valueSearchBar = $("#searchBar_input_research").val();
 var themeChoisi = $("#themeList_select_research").val();
 var sourceChoisie = $("#sourceList_input_research").val();
 var frequenceChoisie = $("#freqList_input_research").val();
 var dateDebutChoisie = $("#startDate_input_research").val();
 var dateFinChoisie = $("#endDate_input_research").val();

 for (var i = 0; i<valueSearchBar.length; i++) {
   if (valueSearchBar.substr(i)==' '){
     valueSearchBar =valueSearchBar.replace(" ", "_")
   }
 }});

$("#buttonResearch_input_research").click(function() {
  var valueSearchBar = $("#searchBar_input_research").val();
  var themeChoisi = $("#themeList_select_research").val();
  var sourceChoisie = $("#sourceList_input_research").val();
  var frequenceChoisie = $("#freqList_input_research").val();
  var dateDebutChoisie = $("#startDate_input_research").val();
  var dateFinChoisie = $("#endDate_input_research").val();

  if (verification(valueSearchBar,dateDebutChoisie,dateFinChoisie)==true){
    document.getElementById("wiki").innerHTML = wiki(valueSearchBar);
    var dateDebutChoisie_ajax = formattedDate(dateDebutChoisie,'yyyymmdd') ;
    var dateFinChoisie_ajax = formattedDate(dateFinChoisie,'yyyymmdd');

    document.getElementById("titre1").innerHTML = recupererTitre1(valueSearchBar,dateDebutChoisie,dateFinChoisie,frequenceChoisie);
    $.ajax({
      url:'http://localhost:5000/recherche1' + '/' + valueSearchBar + '/' + dateDebutChoisie_ajax + '/' + dateFinChoisie_ajax,
      type: 'GET',
      dataType: 'json',
      success: Graph1,
      error: ajax_failed,
    });
    document.getElementById("titre2").innerHTML = recupererTitre2(valueSearchBar,dateDebutChoisie,dateFinChoisie,frequenceChoisie);
    $.ajax({
      url:'http://localhost:5000/recherche2' + '/' + valueSearchBar + '/' + dateDebutChoisie_ajax + '/' + dateFinChoisie_ajax,
      type: 'GET',
      dataType: 'json',
      success: Graph2,
      error: ajax_failed,
    });
    document.getElementById("titre3").innerHTML = recupererTitre3(valueSearchBar,dateDebutChoisie,dateFinChoisie);
    $.ajax({
      url:'http://localhost:5000/recherche3' + '/' + valueSearchBar + '/' + dateDebutChoisie_ajax + '/' + dateFinChoisie_ajax,
      type: 'GET',
      dataType: 'json',
      success: Graph3,
      error: ajax_failed,
    });
    document.getElementById("titre4").innerHTML = recupererTitre4(valueSearchBar,dateDebutChoisie,dateFinChoisie);
    $.ajax({
      url:'http://localhost:5000/recherche4' + '/' + valueSearchBar + '/' + dateDebutChoisie_ajax + '/' + dateFinChoisie_ajax,
      type: 'GET',
      dataType: 'json',
      success: Graph4,
      error: ajax_failed,
    });
    document.getElementById("titre5").innerHTML = recupererTitre5(valueSearchBar,dateDebutChoisie,dateFinChoisie);
    $.ajax({
      url:'http://localhost:5000/recherche5' + '/' + valueSearchBar + '/' + dateDebutChoisie_ajax + '/' + dateFinChoisie_ajax,
      type: 'GET',
      dataType: 'json',
      success: Graph5,
      error: ajax_failed,
    });
    document.getElementById("titre6").innerHTML = recupererTitre6(valueSearchBar,dateDebutChoisie,dateFinChoisie);
    $.ajax({
      url:'http://localhost:5000/recherche6' + '/' + valueSearchBar + '/' + dateDebutChoisie_ajax + '/' + dateFinChoisie_ajax,
      type: 'GET',
      dataType: 'json',
      success: Graph6,
      error: ajax_failed,
    });
  }
});



/*Création des titres*/
function recupererTitre1(word,start,end){  return "Evolution du nombre d'article utilisant le mot " + word + " par jour et par sources entre le " + start + " et le " + end;}
function recupererTitre2(word,start,end){  return "Evolution du nombre d'article utilisant le mot " + word + " par jour et par thèmes entre le " + start + " et le " + end;}
function recupererTitre3(word,start,end){  return "Nombre d'utilisation du mot " + word + " par sources entre le " + start + " et le " + end;}
function recupererTitre4(word,start,end){  return "Nombre d'utilisation du mot " + word + " par thèmes entre le " + start + " et le " + end;}
function recupererTitre5(word,start,end){  return "Evolution du nombre d'article utilisant le mot " + word + " par jour entre le " + start + " et le " + end;}
function recupererTitre6(word,start,end){  return "Score de polarité du mot " + word + " par sources par jour entre le " + start + " et le " + end;}


/*Création des graphiques*/
function Graph1(json_graph1) {
  google.charts.load('visualization', '1', {'packages':['corechart']});
  google.charts.setOnLoadCallback(function(){
    var data = new google.visualization.DataTable();    
    var week=json_graph1[1].periode;
    var col=0;
    data.addColumn('string', 'source');
    for (var g = 1; g <=Object.keys(json_graph1).length; g++) {
      if (json_graph1[g].periode==week){
        data.addColumn('number', json_graph1[g].source); //add every distinct sources present in the Json into column
        col=col+1;
      }
    }
    for (var i = 1; i <=Object.keys(json_graph1).length; i+=col) {
      var tab = [json_graph1[i].periode];
      for (var j = 0; j < col; j++) { //create a table proportional to the number of sources selected
        tab.splice(j+1, 0, json_graph1[j+i].nombre);
      }
     data.addRow(tab); //add the table to generate the lines
    }
    var options = {
      curveType: 'function',
      legend: { position: 'bottom' }};
    var chart = new google.visualization.LineChart(document.getElementById('chart1_div_research'));
    $("#chart1_div_research").show();
    chart.draw(data,options);
      $(window).resize(function(){ //make the graphics responsive
        chart.draw(data,options);
     });
  });
}

function Graph2(json_graph2) {
  google.charts.load('visualization', '1', {'packages':['corechart']});
  google.charts.setOnLoadCallback(function(){
    var data = new google.visualization.DataTable();    
    var week=json_graph2[1].periode;
    var col=0;
    data.addColumn('string', 'theme');
    for (var g = 1; g <=Object.keys(json_graph2).length; g++) {
      if (json_graph2[g].periode==week){
        data.addColumn('number', json_graph2[g].theme); //add every distinct sources present in the Json into column
        col=col+1;
      }
    }
    for (var i = 1; i <=Object.keys(json_graph2).length; i+=col) {
      var tab = [json_graph2[i].periode];
      for (var j = 0; j < col; j++) { //create a table proportional to the number of sources selected
        tab.splice(j+1, 0, json_graph2[j+i].nombre);
      }
     data.addRow(tab); //add the table to generate the lines
    }
    var options = {
      curveType: 'function',
      legend: { position: 'bottom' }};
    var chart = new google.visualization.LineChart(document.getElementById('chart2_div_research'));
    $("#chart2_div_research").show();
    chart.draw(data,options);
      $(window).resize(function(){ //make the graphics responsive
        chart.draw(data,options);
     });
  });
}


function Graph3(json_graph3){
  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(function(){
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'source');
    data.addColumn('number', "nombre");
    for (var i = 1; i <Object.keys(json_graph3).length; i++) {
    data.addRow([json_graph3[i].source,json_graph3[i].nombre ]);
    }
    var chart = new google.visualization.ColumnChart(
    document.getElementById('chart3_div_research'));
    chart.draw(data,{legend: {position: 'none'}});
    $(window).resize(function(){ //make the graphics responsive
      chart.draw(data,{legend: {position: 'none'}});
    });
    $("#chart3_div_research").show();
  });
}

function Graph4(json_graph4){
  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(function(){
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'theme');
    data.addColumn('number', "nombre");
    for (var i = 1; i <Object.keys(json_graph4).length; i++) {
    data.addRow([json_graph4[i].theme,json_graph4[i].nombre ]);
    }
    var chart = new google.visualization.ColumnChart(
    document.getElementById('chart4_div_research'));
    chart.draw(data,{legend: {position: 'none'}});
    $(window).resize(function(){ //make the graphics responsive
      chart.draw(data,{legend: {position: 'none'}});
    });
    $("#chart4_div_research").show();
  });
}

function Graph5(json_graph5) {
  google.charts.load('visualization', '1', {'packages':['corechart']});
  google.charts.setOnLoadCallback(function(){
    var data = new google.visualization.DataTable();    
    data.addColumn('string', 'periode');
    data.addColumn('number', "nombre");
    for (var i = 1; i <= Object.keys(json_graph5).length; i++) {
    data.addRow([json_graph5[i].periode,json_graph5[i].nombre ]);
    }
    var options = {
      curveType: 'function',
      legend: { position: 'bottom' }};
    var chart = new google.visualization.LineChart(document.getElementById('chart5_div_research'));
    $("#chart5_div_research").show();
    chart.draw(data,options);
      $(window).resize(function(){ //make the graphics responsive
        chart.draw(data,options);
     });
  });
}

function Graph6(json_graph6){
  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(function(){
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'source');
    data.addColumn('number', "polarite");
    for (var i = 1; i < Object.keys(json_graph6).length; i++) {
    	data.addRow([json_graph6[i].source,json_graph6[i].polarite-0.5]);
    }
    var chart = new google.visualization.ColumnChart(
    document.getElementById('chart6_div_research'));
    chart.draw(data,{legend: {position: 'none'}});
    $(window).resize(function(){ //make the graphics responsive
      chart.draw(data,{legend: {position: 'none'}});
    });
    $("#chart6_div_research").show();
  });
}


function ajax_failed() {
    alert('Essayez un autre mot');
}