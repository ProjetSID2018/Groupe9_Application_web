/*Boites des dates*/
$(function(){
  $("#startDate_input_research").DateTimePicker({
      fullMonthNames : ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"],
      shortDayNames: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
      fullDayNames : ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"],
      shortMonthNames : ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"],
      titleContentDateTime : "Choissisez la date de début",
      setButtonContent : "Appliquer",
      clearButtonContent : "Effacer",
      buttonsToDisplay : ["HeaderCloseButton", "SetButton"],
      dateTimeFormat : "dd-MM-yyyy"
  });
});

$(function(){
  $("#endDate_input_research").DateTimePicker({
      fullMonthNames : ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"],
      shortDayNames: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
      fullDayNames : ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"],
      shortMonthNames : ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"],
      titleContentDateTime : "Choissisez la date de fin",
      setButtonContent : "Appliquer",
      clearButtonContent : "Effacer",
      buttonsToDisplay : ["HeaderCloseButton", "SetButton"],
      dateTimeFormat : "dd-MM-yyyy"
  });
});

function verification(word,start,end){
  d1=new Date(start);
  d1=formattedDate(d1);
  d2=new Date(end);
  d2=formattedDate(d2);
  if (d1==false || d2==false){
    alert('date impossible,réessayez')
  }else{
  d1=new Date(d1)
  d2=new Date(d2)
  if (word=='' || isValidDate(start)== false || isValidDate(end)== false|| d2<d1){
    if (word==''){
      alert('Il faut absolument rentrer un mot')
    }else if (isValidDate(start)== false || isValidDate(end)== false){
      alert('Il faut absolument rentrer les 2 dates dans le bon format')
    }else{
      alert('Il faut absolument que la première date soit inférieur ou égale à la deuxième')      
    }
      return false
    }else{
      return true
    }
  }
}

function formattedDate(d) {
  var month = String(d.getMonth() + 1);
  var day = String(d.getDate());
  var year = String(d.getFullYear());
  if (month.length < 2) {
    month = '0' + month};
  if (day.length < 2) {
    day = '0' + day};
  if (day<=12 && month<=31){
    return '${day}/${month}/${year}';
  }else{
    return false;
  }
}

function isValidDate(date){
   var matches = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/.exec(date);
   if (matches == null) return false;
}



/*Auto-completion*/
var countries = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: 'code/web/countries.json'
});

$('#prefetch .typeahead').typeahead(null, {
  name: 'countries',
  source: countries
});



/*Boutton de recherche*/
$("#buttonResearch_input_research").click(function() {
  var valueSearchBar = $("#searchBar_input_research").val();
  var themeChoisi = $("#themeList_select_research").val();
  var sourceChoisie = $("#sourceList_input_research").val();
  var frequenceChoisie = $("#freqList_input_research").val();
  var dateDebutChoisie = $("#startDate_input_research").val();
  var dateFinChoisie = $("#endDate_input_research").val();

  if (frequenceChoisie=='Traitement par semaine'){frequenceChoisie='semaine'}
  if (frequenceChoisie=='Traitement par mois'){frequenceChoisie='mois'}
  if (frequenceChoisie=='Traitement par annee'){frequenceChoisie='annee'}

  if (verification(valueSearchBar,dateDebutChoisie,dateFinChoisie)==true){
    document.getElementById("titre1").innerHTML = recupererTitre1(valueSearchBar,dateDebutChoisie,dateFinChoisie,frequenceChoisie);
    document.getElementById("chart1_div_research").innerHTML = Graph1();
    document.getElementById("titre2").innerHTML = recupererTitre2(valueSearchBar,dateDebutChoisie,dateFinChoisie,frequenceChoisie);
    document.getElementById("chart2_div_research").innerHTML = Graph2();
    document.getElementById("titre3").innerHTML = recupererTitre3(valueSearchBar,dateDebutChoisie,dateFinChoisie);
    document.getElementById("chart3_div_research").innerHTML = Graph3();
    document.getElementById("titre4").innerHTML = recupererTitre4(valueSearchBar,dateDebutChoisie,dateFinChoisie);
    document.getElementById("chart4_div_research").innerHTML = Graph4();
    document.getElementById("titre5").innerHTML = recupererTitre5(valueSearchBar,dateDebutChoisie,dateFinChoisie);
    document.getElementById("chart5_div_research").innerHTML = Graph5();
    document.getElementById("titre6").innerHTML = recupererTitre6(valueSearchBar,dateDebutChoisie,dateFinChoisie);
    document.getElementById("chart6_div_research").innerHTML = Graph6();
  }

  $.ajax({
    url:'http://localhost:5000/test',
    type: 'GET',
    dataType: 'json',
    success: drawBasic,
    error: ajax_failed,
  });
});



/*Création des titres*/
function recupererTitre1(word,start,end,frequence){  return "Graphe 1 : Evolution du nombre d'article utilisant " + word + " par "+ frequence + " et par source(s) selectionnée(s) entre le " + start + " et le " + end;}
function recupererTitre2(word,start,end,frequence){  return "Graphe 2 : Evolution du nombre d'article utilisant " + word + " par "+ frequence + "semaine et par thème(s) selectionné(s) entre le " + start + " et le " + end;}
function recupererTitre3(word,start,end){  return "Graphe 3 : Nombre d'utilisation de " + word + " par source(s) selectionnée(s) entre le " + start + " et le " + end;}
function recupererTitre4(word,start,end){  return "Graphe 4 : Nombre d'utilisation de " + word + " par thème(s) selectionné(s) entre le " + start + " et le " + end;}
function recupererTitre5(word,start,end){  return "Graphe 5 : Nuage des mots les plus associés à " + word + " par source(s) selectionnée(s) entre le " + start + " et le " + end;}
function recupererTitre6(word,start,end){  return "Graphe 6 : Nuage des mots les plus associés à " + word + " par thème(s) selectionné(s) entre le " + start + " et le " + end;}


/*Création des graphiques*/
function Graph1() {
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var json  = [
      {"week": "w1", "source":"La Dépêche", "nombre": 10 },
      {"week": "w1", "source":"Le Figaro", "nombre": 1 },
      {"week": "w1", "source":"Le Point", "nombre": 12 },
      {"week": "w1", "source":"Le Monde", "nombre": 2 },
      {"week": "w1", "source":"Libération", "nombre": 9 },
      {"week": "w1", "source":"Nouvelle Obs", "nombre": 13 },
      {"week": "w1", "source":"Telerama", "nombre": 6 },
      {"week": "w1", "source":"Futurasciences", "nombre": 5 },
      {"week": "w1", "source":"L’Humanité", "nombre": 9 },
      {"week": "w2", "source":"La Dépêche", "nombre": 20 },
      {"week": "w2", "source":"Le Figaro", "nombre": 35 },
      {"week": "w2", "source":"Le Point", "nombre": 15 },
      {"week": "w2", "source":"Le Monde", "nombre": 17 },
      {"week": "w2", "source":"Libération", "nombre": 3 },
      {"week": "w2", "source":"Nouvelle Obs", "nombre": 22 },
      {"week": "w2", "source":"Telerama", "nombre": 8 },
      {"week": "w2", "source":"Futurasciences", "nombre": 3 },
      {"week": "w2", "source":"L’Humanité", "nombre": 6 },
      {"week": "w3", "source":"La Dépêche", "nombre": 15 },
      {"week": "w3", "source":"Le Figaro", "nombre": 5 },
      {"week": "w3", "source":"Le Point", "nombre": 11 },
      {"week": "w3", "source":"Le Monde", "nombre": 17 },
      {"week": "w3", "source":"Libération", "nombre": 7 },
      {"week": "w3", "source":"Nouvelle Obs", "nombre": 23 },
      {"week": "w3", "source":"Telerama", "nombre": 28 },
      {"week": "w3", "source":"Futurasciences", "nombre": 13 },
      {"week": "w3", "source":"L’Humanité", "nombre": 9 }
    ]
    var data = new google.visualization.DataTable();
    var w1=json[0].week;
    var col=0;
    data.addColumn('string', "week");
    for (var g = 0; g <json.length; g++) {
      if (json[g].week==w1){
        data.addColumn('number', json[g].source); //add every distinct sources present in the Json into column
        col=col+1;
      }
    }
    for (var i = 0; i <json.length; i+=col) {
      var tab = [json[i].week];
      for (var j = 0; j <col; j++) { //create a table proportional to the number of sources selected
        tab.splice(j+1,0,json[j+i].nombre); 
      }
      data.addRow(tab) //add the table to generate the lines
    }
    var options = {
      curveType: 'function',
      legend: { position: 'bottom' }};
    var chart = new google.visualization.LineChart(document.getElementById('chart1_div_research'));
    chart.draw(data,options);
  }
  $(window).resize(function(){ //make the graphics responsive
    drawChart();
  });
}

function Graph2() {

}

function Graph3(){
  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawBasic);
  function drawBasic() {
    var json=[
      {"source": "figaro","nombre" : 210},
      {"source": "monde","nombre": 2015},
      {"source": "depeche","nombre" : 50},
      {"source": "libération","nombre": 45},
      {"source": "nouvel Obs","nombre" : 544},
      {"source": "Telerama","nombre": 45},
      {"source": "Futurasciences","nombre" : 76},
      {"source": "L’Humanité","nombre": 71}
    ]
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'source');
    data.addColumn('number', "nombre");
    for (var i = 0; i <json.length; i++) {
    data.addRow([json[i].source,json[i].nombre ]);
    }
    var chart = new google.visualization.ColumnChart(
    document.getElementById('chart2_div_research'));
    chart.draw(data,{legend: {position: 'none'}});
  }
  $(window).resize(function(){ //make the graphics responsive
    drawBasic();
  });
}

function Graph4(){

}

function Graph5(){

}