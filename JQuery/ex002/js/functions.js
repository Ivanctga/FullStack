
$(function(){

    /*
    $('body').click(function(){
        $('.box').css('background-color', 'green');
    });

    $('.box').click(function(e){
        e.stopPropagation();    
    });
    */

    var el = $('div.box');

    el.css('background-color','green');

    function teste(){
        el.css('color', 'red');
    }

    teste()

});