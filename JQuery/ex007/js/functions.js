
$(function(){

    verificarCliqueMenu();

    function verificarCliqueMenu(){
     $('a').click(function(){
          var href = $(this).attr('href');
          $.ajax({
               'beforeSend': function(){
               },
               'timeout': 10000,
               'url':href,
               'error':function(){},
               'success':function(data){
                    $('#container').html(data);
               }
          });
          return false;
     });
    };
  
});