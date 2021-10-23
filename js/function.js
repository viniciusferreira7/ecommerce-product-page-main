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


        more.click(function(numb2){
            console.log('mais');
            var numb = eval(value.text())
            value.text(numb + 1);

            less.click(function(eval(value.text())){
                var numb2 = eval(value.text())
                console.log(numb2)
                
                if(numb2 >= 0){
                    value.text(numb2 - 1)
                
                }else if(numb2 < 0){
                    value.text(0);
                    
                }
            })    
        })

    }
})


//Não consego subtrair usando o less