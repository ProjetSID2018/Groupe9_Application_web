 // JQUERY : function to handle the navigation bar
(function($){
   // When the document is loaded
   $(document).ready(
    function(){
      var offset= $("header").offset().top; 
      $(document).scroll(function(){
          var scrollTop = $(document).scrollTop();
          if(scrollTop > offset){
            $("nav").addClass("navbar-fixed-top");
          }
          else {
            $("nav").removeClass("navbar-fixed-top");
          }
      });
      // Get the ID of the title division
      var title = $("title").attr("id");
      // Compares the recovered id with the id pages to be able to hide the good parts of the header  
      if(title == "Search_Page"){
        $("#themeBar").hide();
      }
      else if(title == "theme_page"){
        $("#searchBar").hide();
      }
      else if(title == "index"){
        $("#searchBar").hide();
        $("#themeBar").hide();
      };
   });
})(jQuery);


      
    

