/*fonction servant a inserer le header dans l'ensemble des pages du site. Permet d'actualiser tous les headers en meme temps.*/
/*utilise le lien vers bootstrap de chaque page */

document.body.insertAdjacentHTML("afterBegin",
  '<header>'+
    '<nav class="navbar navbar-default">'+ 

    /*Navigation bar*/    
      '<div id = "navBar" class="container">'+
        '<div class="navbar-header">'+
          '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#codebrainery-toggle-nav" aria-expanded="false">'+
            '<span class="sr-only">Toggle navigation </span>'+
            '<span class="icon-bar"></span>'+
            '<span class="icon-bar"></span>'+
            '<span class="icon-bar"></span>'+
          '</button>'+
        '<img src="https://raw.githubusercontent.com/ProjetSID2018/Groupe10_Qualite_communication/master/Logos/bleu1.png" class="navbar-brand"></img>'+
        '</div>'+
        '<div class="collapse navbar-collapse" id="codebrainery-toggle-nav">'+
          '<ul class="nav navbar-nav navbar-right">'+
            '<li class="item"><a class="a.a-nav" href="#">Accueil</a></li>'+
            '<li class="item"><a class="a.a-nav" href="#">Thèmes</a></li>'+
            '<li class="item"><a class="a.a-nav" href="#">Recherche</a></li>'+
          '</ul>'+
        '</div>'+
      '</div>'+

    /*Search bar*/
      '<div id ="searchBar" class="container">'+
        '<div class="navbar-header">'+
          '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#codebrainery-toggle-search" aria-expanded="false">'+
            '<span class="glyphicon glyphicon-search"></span>'+
          '</button>' +
          '<div id="codebrainery-toggle-search" class="collapse navbar-collapse">' +
            '<div class="col-sm-offset-4">'+
              '<div class="row">' +
                '<div id="prefetch" class="col-sm-offset-4 col-sm-4">' +
                  '<input id="searchBar_input_research" type="text" class="typeahead" placeholder="Recherche">' +
                '</div>' +
              '</div>'+
              '<div class="row">' +
                '<div class="col-sm-4">' +
                  '<SELECT id="themeList_select_research" class="form-control" name="theme" size="1">' +
                    '<option> Tous les th&egrave;mes </option>' +
                    '<option> International </option>' +
                    '<option> France </option>' +  
                    '<option> Economie </option>' +
                    '<option> Science/High-Tech </option>' +
                    '<option> Culture </option>' +
                    '<option> Sport </option>' +
                    '<option> Sant&eacute; </option>' +
                  '</SELECT>' +
                '</div>' +
                '<div class="col-sm-4">' +        
                  '<SELECT id="sourceList_input_research" class="form-control" name="Source" size="1">' +
                    '<option> Toutes les sources </option>' +
                    '<option> </option>' +
                  '</select>' +
                '</div>' +
                '<div class="col-sm-4">' +        
                  '<SELECT id="freqList_input_research" class="form-control" name="frequence" size="1">' +
                    '<option>Traitement par semaine</option>' +
                    '<option>Traitement par mois</option>' +
                    '<option>Traitement par année</option>' +
                  '</select>' +
                '</div>' +
              '</div>' +

              '<div class="row">' +
                '<div class="col-sm-3">' +    
                  '<input id="startDate_input_research" type="text" name="dateDeb" style="cursor: pointer" onclick="new calendar(this);" value="Du :"/>' +
                '</div>' +
                '<div class="col-sm-offset-1 col-sm-3">' +
                  '<input id="endDate_input_research" type="text" name="dateFin" style="cursor: pointer" onclick="new calendar(this);" value="Au :"/>' +
                '</div>' +
                '<div class="col-sm-offset-1 col-sm-2">' +
                  '<button id="buttonCancel_input_research" type="submit" class="btn btn-primary" onclick="window.location.reload(false)">Réinitialiser</button>'+
                '</div>' +
                '<div class="col-sm-2">' +
                  '<button id="buttonResearch_input_research" type="submit" class="btn btn-primary">Valider</button>' +
                '</div>' +
              '</div>' +
            '</div>'+
          '</div>'+   
        '</div>'+
      '</div>' +

    /*Theme choice*/ 

      '<div id = "themeBar" class = "container">' +
        '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#codebrainery-toggle-theme" aria-expanded="false">'+
          '<span class="glyphicon glyphicon-search"></span>'+
        '</button>' +
        '<div id="codebrainery-toggle-theme" class="collapse navbar-collapse">' +
          '<div class="navbar-header" id="container2_div_theme">' +
            '<h5>' +
              'Choisissez votre theme' +
            '</h5>' +
            '<div id="list_theme_div_theme" class="row">' +
              '<form>' +
                '<div class="col-sm-2" + id="_international" value="_international">' +
                  '<label><input id="_international" class="radio" type="radio" name="optradio">International</label>' +
                '</div>' +
                '<div class="col-sm-2" id="_france">' +
                  '<label><input id="_france" class="radio" type="radio" name="optradio">France</label>' +
                '</div>' +
                '<div class="col-sm-2" id="_economie">' +
                  '<label><input id="_economie" class="radio" type="radio" name="optradio">&Eacute;conomie</label>' +
                '</div>' +
                '<div class="col-sm-2" id="_sciences_high_tech">' +
                  '<label><input id="_sciences_high_tech" class="radio" type="radio" name="optradio">Science/High-tech</label>' +
                '</div>' +
                '<div class="col-sm-2" id="_arts_et_culture">' +
                  '<label><input id="_arts_et_culture" class="radio" type="radio" name="optradio">Art et Culture</label>' +
                '</div>' +
                '<div class="col-sm-1" id="_sports">' +
                  '<label><input id="_sports" class="radio" type="radio" name="optradio">Sports</label>' +
                '</div>'+
                '<div class="col-sm-1" id="_sante">' +
                   '<label><input id="_sante" class="radio" type="radio" name="optradio">Sant&eacute;</label>' +
                '</div>' +
              '</form>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      
    '</nav>'+
  '</header>');