/*fonction servant a inserer le header dans l'ensemble des pages du site. Permet d'actualiser tous les headers en meme temps.*/
/*utilise le lien vers bootstrap de chaque page */

document.body.insertAdjacentHTML("afterBegin",
'<header>'+
    '<nav class="navbar navbar-default">'+     
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
           '<li class="item"><a class="a-nav" href="index.html">Accueil</a></li>'+
           '<li class="item"><a class="a-nav" href="theme.html">Thèmes</a></li>'+
           '<li class="item"><a class="a-nav" href="search_page.html">Recherche</a></li>'+
         '</ul>'+
        '</div>'+
      '</div>'+
    /*Search bar*/
      '<div id ="searchBar" class="container">'+
        '<div class="navbar-header">'+
          '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#codebrainery-toggle-search" aria-expanded="false">'+
            '<span class="glyphicon glyphicon-search"></span>'+
          '</button>' +
          // '<div id="codebrainery-toggle-search" class="collapse navbar-collapse">' +
//             '<div class="col-lg-offset-3">'+
//               '<div class="row">' +
//                 '<div id="prefetch" class="col-xs-offset-4 col-xs-8 col-sm-offset-4 col-sm-8 col-md-offset-4 col-md-8 col-lg-offset-4 col-lg-8">' +
//                   '<input id="searchBar_input_research" type="text" class="typeahead" placeholder="Recherche">' +
//                 '</div>' +
//               '</div>'+
//               '<div class="row">' +
//                 '<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">' +
//                   '<div class="form-group">' +
//                     '<div class="input-group date" >' +
//                       '<input type="text" class="form-control" id="startDate_input_research" style="cursor: pointer" onclick="new calendar(this);" value="Du :">' +
//                       '<span class="input-group-addon">' +
//                         '<span class="glyphicon glyphicon-calendar"></span>' +
//                       '</span>' +
//                     '</div>' +
//                   '</div>' +    
//                 '</div>' +
//                 '<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">' +
//                   '<div class="form-group">' +
//                     '<div class="input-group date" >' +
//                       '<input type="text" class="form-control" id="endDate_input_research" style="cursor: pointer" onclick="new calendar(this);" value="Au :">' +
//                       '<span class="input-group-addon">' +
//                         '<span class="glyphicon glyphicon-calendar"></span>' +
//                       '</span>' +
//                     '</div>' +
//                   '</div>' +    
//                 '</div>' +
//                 '<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">' +
//                   '<button id="buttonCancel_input_research" type="submit" class="btn btn-primary" onclick="window.location.relo2d(false)">Réinitialiser</button>'+
//                 '</div>' +
//                 '<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">' +
//                   '<button id="buttonResearch_input_research" type="submit" class="btn btn-primary">Valider</button>' +
//                 '</div>'  +
//               '</div>' +
//             '</div>'+
//           '</div>'+  
			'<div class="row col-md-12 bar_center">' +
        '<div class="col-sm-3 col-md-3">' +
            '<form class="navbar-form" role="search">' +
            '<div id="prefetch" class="input-group">' +
                '<input id="searchBar_input_research" type="text" class="form-control" placeholder="Search" name="q">' +
                '<div class="input-group-btn">' +
                    '<button class="btn btn-default" type="submit">' +
                    '<i class="glyphicon glyphicon-search"></i></button>' +
                '</div>' +
            '</div>' +
            '</form>' +
        '</div>' +
        '<div class="bar_espace_top" >' +
            '<div class="col-md-2 calendrier_espace_top_left" >' +
                '<div class="form-group">' +
                    '<div class="input-group date">' +
                        '<input type="text" class="form-control" id="startDate_input_research" >' +
                        '<span class="input-group-addon">' +
                            '<span class="glyphicon glyphicon-calendar"/>' +
                        '</span>' +
                    '</div> '+
                '</div>' +
            '</div> '+
            '<div  class="col-md-2">' +
                '<div class="form-group">' +
                    '<div class="input-group date">' +
                        '<input type="text" class="form-control" id="endDate_input_research">' +
                        '<span class="input-group-addon">' +
                            '<span class="glyphicon glyphicon-calendar"/>' +
                        '</span>' +
                    '</div>' +
                '</div>' +
            '</div>' +    
        '</div>' +
        '<div class="col-md-2">' +
            '<button id="buttonResearch_input_research" class="btn btn-default btn-primary " type="submit" onclick="window.location.reload(false)">Valider</button>' +
            '<button id="buttonCancel_input_research" class="btn btn-default btn-primary" type="submit"></button>' +
        '</div>' +
    '</div>' + 
        '</div>'+
      '</div>' +

    /*Theme choice*/ 

      '<div id = "themeBar" class = "container">' +
        '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#codebrainery-toggle-theme" aria-expanded="false">'+
          '<span class="glyphicon glyphicon-search"></span>'+
        '</button>' + 
        '<div id="codebrainery-toggle-theme" class="collapse navbar-collapse ">' + 
          '<div class="navbar-header centred" id="container2_div_theme">' + 
            '<h5 class="theme"> Choisissez votre theme </h5>' + 
            '<div id="list_theme_div_theme" class="row ">' + 
              '<form>' +
                '<div class="btn-group">' +
                    '<label class="btn ">' +
                      '<input class="radio" id="internationnal" type="radio" name="optradio"><i class="fa fa-check-circle-o fa-2x"></i><span>International</span>' +
                    '</label>' + 
                    '<label class="btn">' +
                      '<input class="radio" id="france" type="radio" name="optradio"><i class="fa fa-check-circle-o fa-2x"></i><span>France</span>' +
                    '</label>' + 
                    '<label class="btn">' +
                      '<input class="radio" id="economie" type="radio" name="optradio"><i class="fa fa-check-circle-o fa-2x"></i><span>&Eacute;conomie</span>' +
                    '</label>' + 
                    '<label class="btn">' +
                      '<input class="radio" id="sciences_high_tech" type="radio" name="optradio"><i class="fa fa-check-circle-o fa-2x"></i><span>Science/High-tech</span>' +
                    '</label>' + 
                    '<label class="btn">' +
                      '<input class="radio" id="arts_et_culture" type="radio" name="optradio"><i class="fa fa-check-circle-o fa-2x"></i><span>Art et Culture</span>' +
                    '</label>' + 
                    '<label class="btn">' +
                      '<input class="radio" id="sport" type="radio" name="optradio"><i class="fa fa-check-circle-o fa-2x"></i><span>Sport</span>' +
                    '</label>' + 
                    '<label class="btn">' +
                      '<input class="radio" id="sante" type="radio" name="optradio"><i class="fa fa-check-circle-o fa-2x"></i><span>Sant&eacute;</span>' +
                    '</label>' + 
                    '<label class="btn active">' +
                      '<input class="radio" type="radio" name="optradio" checked><i class="fa fa-check-circle-o fa-2x"></i><span>Tous</span>' +
                    '</label>' + 
                '</div>' +
              '</form>' + 
            '</div>' + 
          '</div>' + 
        '</div>' + 
      '</div>' +       
    '</nav>'+
  '</header>');