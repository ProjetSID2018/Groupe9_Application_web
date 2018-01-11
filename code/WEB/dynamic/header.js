
/*fonction servant a inserer le header dans l'ensemble des pages du site. Permet d'actualiser tous les headers en meme temps.*/
/*utilise le lien vers bootstrap de chaque page */

document.body.insertAdjacentHTML("afterBegin",
  '<header id="header">'+
  '<div class="container-fluid" id="div_header">'+
    '<div class="page-header" id="sub_div_header">'+
      '<nav class="navbar navbar-default navbar-fixed-top" id="bar_header">'+ /* fixe le menu en haut de page body {padding-top: 70px;} pour le décoler de 70 px */
        '<div class="container-fluid" id="div_logo_header">'+
          '<div class="navbar-header" id="logo_bar_header">'+
            '<a class="navbar-brand" href="#" id="logo_header">WATCHNEWS</a>'+
          '</div>'+
          '<ul class="nav navbar-nav navbar-right" id="bar_page_choise_header">'+
            '<li class="active" id="bouton_accueil_header"><a href="#" id="accueil_link_header">Accueil</a></li>'+
            '<li id="bouton_themes_header"><a href="#" id="themes_link_header">Thèmes</a></li>'+
            '<li id="bouton_recherche_header"><a href="#" id="recherche_link_header">Recherche</a></li>'+
          '</ul>'+
        '</div>'+
      '</nav>'+
    '</div>'+
  '</div>'+ 
  '</header>');


