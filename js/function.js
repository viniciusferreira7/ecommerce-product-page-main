$(function(){
    //Variaveis

    //Funcões
    slide();
    amount();

    function slide(){
        $('.image-single').click(function(){
            var backgroundCurrent = $(this).css('background-image');
            var overlay = $(this).find('.overlay');
            
            $('.overlay').fadeOut();
            overlay.fadeIn();
            $('.main-image').css('background-image',backgroundCurrent);
        })
    }

    function amount(){
        var less = $('.amount p:first-of-type');
        var more = $('.amount p:last-of-type');
        var value = $('.amount p:nth-of-type(2)');
        var TextValue = value.text();
        var current = TextValue;

        if(TextValue != '0'){
            less.click(function(){
                console.log('menos');
                eval(TextValue + current--);
                value.text(eval(TextValue - current))
            })
        }

        more.click(function(){
            console.log('mais');
            eval(TextValue + current++);
            value.text(eval(TextValue + current))
        })
    }
})


//Não consego subtrair usando o less