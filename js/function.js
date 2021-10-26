$(function(){
    //Variaveis

    //Funcões
    slide();
    amount();
    addCart();

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
        var numb = eval(value.text())


        more.click(function(){
            numb = eval(value.text()) 
            console.log(numb)
            value.text(numb + 1);
    
        })

        less.click(function(){
            if(numb <= 0){
                // less.click(function(){
                     numb = eval(value.text());
                     console.log(numb);
                     value.text(0)
                     console.log('menor')
               //  })
             }
             else if(numb >= 1){
                 //less.click(function(){
                     numb = eval(value.text());
                     console.log(numb);
                     value.text(numb - 1);
                     console.log('maior')
                 //})
             }
        })

    }

    function addCart(){
        $('.car').click(function(){
            $('.car > svg').css('stroke','#f3791c');
        })

        $()
    }
})
