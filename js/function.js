$(function(){
    //Variaveis

    //Funcões
    slide();
    amount();
    addCart();

    function slide(){
        $('.image-single').click(function(){
            let backgroundCurrent = $(this).css('background-image');
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


        $('.cart').click(function(){
            let backgroundCurrent = $('.image-single:first-of-type').css('background-image');
            /*Para pode tornar automatico quando faz ser a single page*/
            $('.img-cart').css('background-image',backgroundCurrent).css('background-position','center').css('background-size','contain')
            $('.valueSingle').html($('.price-discount > p:first-of-type').text()
            );

            /**/
            $('.cart-wraper > span:nth-of-type(3)').html($('.amount p:nth-of-type(2)').text());

           var total = eval($('.amount p:nth-of-type(2)').text() + '*' + $('.valueSingle').text().substr(1,20));

           var totalUSD = total.toLocaleString('USD',{style: 'currency', currency: 'USD'});

           $('.cart-wraper span:nth-of-type(2)').html('x');
           $('.cart-wraper > span:last-of-type').html(totalUSD.substr(2,10));

           $('.cart-amount').html($('.amount p:nth-of-type(2)').text())
           $('.cart-amount').fadeIn();

        })
    }


})
