/*
    $(document).ready(function(){
        alert("Olá mundo!");
    })

    $(function(){
    alert("Olá mundo!");
    })

    $(windows).on('load',function(){
        alert("Olá mundo!");
    })

*/

$(function(){
    setTimeout(function(){
        $('#teste > p').css('background-color','white');
    },2000);
});

$(function(){  /* Para mudar cor de um elemento. */ 
    $('.artigo2').click(function(){
        $('.artigo2').css('background-color', 'purple');
    });

    $('.artigo1').hover(function(){
        $('.artigo2').css ('background-color', 'green');
    },function(){
        $('.artigo2').css('background-color', 'rgb(100,100,100)');
    });
});


