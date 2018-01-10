


/*fonction servant a inserer un header dans les pages web. Permet d'actualiser tous les headers en meme temps.*/
/*utilise le lien vers bootstrap de chaque page */



document.body.insertAdjacentHTML("afterBegin",
  '<header id="hd1">'+
  '<div class="container-fluid">'+

    '<div class="page-header">'+

      '<nav class="navbar navbar-default navbar-fixed-top">'+ /* fixe le menu en haut de page body {padding-top: 70px;} pour le décoler de 70 px */

        '<div class="container-fluid">'+

          '<div class="navbar-header">'+

            '<a class="navbar-brand" href="#">WATCHNEWS</a>'+

          '</div>'+

            '<ul class="nav navbar-nav navbar-right">'+

              '<li class="active"><a href="#">Accueil</a></li>'+

              '<li><a href="#">Thèmes</a></li>'+

              '<li><a href="#">Recherche</a></li>'+

            '</ul>'+

        '</div>'+

      '</nav>'+

    '</div>'+
    '</header>');


