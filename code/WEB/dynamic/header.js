
/*fonction servant a inserer le header dans l'ensemble des pages du site. Permet d'actualiser tous les headers en meme temps.*/
/*utilise le lien vers bootstrap de chaque page */

document.body.insertAdjacentHTML("afterBegin",
    '<header>'+
'<nav class="navbar navbar-default">'+      
     '<div class="container">'+
       '<div class="navbar-header">'+
         '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#codebrainery-toggle-nav" aria-expanded="false">'+
           '<span class="sr-only">Toggle navigation</span>'+
           '<span class="icon-bar"></span>'+
           '<span class="icon-bar"></span>'+
           '<span class="icon-bar"></span>'+
         '</button>'+
         '<a class="navbar-brand" href="#">Watchnews</a>'+
       '</div>'+

       '<div class="collapse navbar-collapse" id="codebrainery-toggle-nav">'+
         '<ul class="nav navbar-nav navbar-right">'+
           '<li><a href="../../../index.html">Accueil</a></li>'+
           '<li><a href="code/WEB/html/theme.html">Thèmes</a></li>'+
           '<li><a href="code/WEB/html/research_page.html">Recherche</a></li>'+
         '</ul>'+
       '</div>'+

     '</div>'+
'</nav>'+
'</header>');
