
/*ajout du lien necessaire pour les logos (font-incone) du footer*/



document.head.insertAdjacentHTML("beforeend",'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">');



/*fonction servant a inserer un footer dans les pages web. Permet d'actualiser tous les footer en meme temps.*/
/*utilise le lien vers bootstrap de chaque page */



document.body.insertAdjacentHTML("beforeend",
	'<footer id ="ft1">'+
    '<div class="top-bar">'+

      '<div class="container-fluid">'+

       '<div class="row">'+

          '<div class = "text-left">'+
          
              '<a href="#" class="navbar-left"><img src="https://archive.is/o4KHi/3e85f3ee0e66b11b1b91af32d2568fb284561469.png" ></a>'+

            '</div>'+

            '<div class="socl-icons text-right" >'+

              '<ul  class="list-inline ">'+

                  '<li><a href="#"><i class="fa fa-facebook fa-5x" aria-hidden="true"></i></a> </li>'+

                  '<li><a href="#"><i class="fa fa-twitter fa-5x" aria-hidden="true"></i></a></li>'+

                  '<li><a href="#"><i class="fa fa-linkedin fa-5x" aria-hidden="true"></i></a></li>'+

                  '<li><a href="#"><i class="fa fa-google-plus fa-5x" aria-hidden="true"></i></a></li>'+

            '</ul>'+

          '</div>'+

        '</div>'+

      '</div>'+

    '</div>'+
    '</footer>');