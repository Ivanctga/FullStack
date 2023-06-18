
$(function(){

    //função append() para adicinar conteúdo/elemento no final do elemento que selecionarmos
    //$('.box').eq(1).append('<h3>Meu conteudo adicionado dinamicamente</h3>');

    //Função remover conteudo
    //$('.box').eq(1).remove();

    var el = $('<h3>Meu conteúdo</h3>').appendTo($('.box')).css('color','red');

    var t = '<p>Meu conteúdo após a div box</p>';
    //$('.box').after(t);

    $(t).insertAfter($('.box')).css('color','red')
     $(t).insertBefore($('.box')).css('color','red')
    
});