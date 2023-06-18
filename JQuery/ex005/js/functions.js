
$(function(){

    
   $('.box1').fadeOut(2000,function(){
        $('.box2').fadeIn(1000, function(){

        });
   });
   

   $('.box3').click(function(){
        $('.box4').slideToggle();
   })   

});