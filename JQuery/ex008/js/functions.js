
$(function(){

   $(window).scroll(function(){
     var windowOffy = $(window).scrollTop();
     var windowHeight = $(window).height();
     $('.sessao').each(function(){          
          var eloffy = $(this).offset().top;
          if(eloffy+30 < (windowOffy + windowHeight) &&     eloffy+30+$(this).height() > windowOffy){
               $('a').css('border-botton','0');
               var target = $(this).attr('target');
               $('.'+target).css('border-botton','2px solid #333');
               return;
          }
     });
   });
  
});