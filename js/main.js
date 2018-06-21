/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var menuStatus = 0;

$(document).ready(function(){
   $("#add-new-corruption-title").click(function(){
       if($("#add-new-corruption").css)
        $("#add-new-corruption").css("display","block").delay(1000);
        //$("#add-new-corruption-title").css("display","none").delay(100);
       
   }); 
   
   $("#top-column-third-1").click(function(){
       if($(window).width() < 768)
      {
        if(menuStatus == 0)
        {
             $("#sidenav").css("width","50%").delay(300);
             menuStatus = 1;
         }
         else
         {
             $("#sidenav").css("width","0").delay(300);
             menuStatus = 0;
         }
     }
    
   });
});
