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

        /*$('.car').click(function(){
            $('.car > svg').css('stroke','#f3791c');
        })*/


        $('.cart').click(function(){
            let backgroundCurrent = $('.image-single:first-of-type').css('background-image');
 
            /*Para pode tornar automatico quando faz ser a single page*/
            /*Adicionar dinamicamente informações da pagina no lista de compras*/
            $('.img-cart').css('background-image',backgroundCurrent).css('background-position','center').css('background-size','100%')
            $('.valueSingle').html($('.price-discount > p:first-of-type').text()
            );
            $('.info-cart > p').html($('.info > h1').text())
            $('.p-wraper  p:nth-of-type(2)').html('x');
            $('.cart-amount').html($('.amount p:nth-of-type(2)').text())
            $('.cart-amount').fadeIn();
            $('.p-wraper > p:nth-of-type(3)').html($('.amount p:nth-of-type(2)').text());
            /**/

            /*Calculo automatico do valor vezes a quantidade*/
           var total = eval($('.amount p:nth-of-type(2)').text() + '*' + $('.valueSingle').text().substr(1,20));

           var totalUSD = total.toLocaleString('USD',{style: 'currency', currency: 'USD'});

           $('.p-wraper  p:last-of-type').html(totalUSD.substr(2,10));
           /**/ 

           /*Fazer a janela de lista de compras aparecer e deseparecer*/ 
           $('.car > svg').click(function(){
            $('.list-wraper').fadeIn();

                if($('.list-wraper').fadeIn() !== false){
                    $('.car svg').click(function(){
                        $('.list-wraper').fadeOut();
                    })
                }else{
                }
           })
           /**/

        })
    }


})

/*OBS:
        *Arrumar o problema de fadeIn e fadeOut na list-wraper.

        *Ajustar o input button e o icon da lixeira.

        *Colocar que quando a list estiver vazia aparecer "Your cart is empty".

        *Quando adiciona mais de um lista os valores onde tem o titulo, x e o 
        resultado somem.
        *E ajuste na estilização da lista modal.
        
*/ 
