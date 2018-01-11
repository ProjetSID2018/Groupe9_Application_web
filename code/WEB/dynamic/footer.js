
/*ajout du lien necessaire pour les logos (font-incone) du footer*/

document.head.insertAdjacentHTML("beforeend",'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">');

/*fonction servant a inserer un footer dans les pages web. Permet d'actualiser tous les footer en meme temps.*/
/*utilise le lien vers bootstrap de chaque page */

document.body.insertAdjacentHTML("beforeend",
	'<footer id ="footer">'+
    '<div class="top-bar" id="bar_footer">'+
      '<div class="container-fluid" id="div_footer">'+
        '<div class="row" id="div_row_footer">'+
          '<div class = "text-left" id="sid_div_footer">'+
            '<a href="#" class="navbar-left" id="sid_link_footer"><img src="https://archive.is/o4KHi/3e85f3ee0e66b11b1b91af32d2568fb284561469.png" id="sid_logo_footer"></a>'+
          '</div>'+
          '<div class="socl-icons text-right" id="social_icons_div_footer">'+
            '<ul  class="list-inline" id="social_icons_set_cover">'+
              '<li id="facebook_link_footer"><a href="#"><i class="fa fa-facebook fa-5x" aria-hidden="true" id="facebook_icons_footer"></i></a> </li>'+
              '<li id="twitter_link_footer"><a href="#"><i class="fa fa-twitter fa-5x" aria-hidden="true" id="twitter_icons_footer"></i></a></li>'+
              '<li id="google_plus_link_footer"><a href="#"><i class="fa fa-google-plus fa-5x" aria-hidden="true" id="google_plus_icons_footer"></i></a></li>'+
            '</ul>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</footer>');