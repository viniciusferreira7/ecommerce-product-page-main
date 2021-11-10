$(function(){
    //Variaveis

    //Funcões
    slide();
    amount();
    addCart();
    addCart_item();
    modalSlide();
    

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
            $('.list svg').fadeIn();
            $('.list input[type="button"]').fadeIn();
            $('.p-wraper > p:nth-of-type(3)').html($('.amount p:nth-of-type(2)').text());
            /**/

            /*Calculo automatico do valor vezes a quantidade*/
           var total = eval($('.amount p:nth-of-type(2)').text() + '*' + $('.valueSingle').text().substr(1,20));

           var totalUSD = total.toLocaleString('USD',{style: 'currency', currency: 'USD'});

           $('.p-wraper  p:last-of-type').html(totalUSD.substr(2,10));
           /**/ 

           if(true){
            if( $('.cart-amount').html() == '0'){
                $('.list').append('<p class="empty">Your cart is empty.</p>');
                $('.empty').eq(1).remove();
                setTimeout(function(){
                    $('.cart-wraper').fadeOut();
                   },1000)
                setTimeout(function(){
                $('.empty').fadeIn();
                },2000)

            }
            if( $('.cart-amount').html() !== '0'){
                setTimeout(function(){
                    $('.empty').fadeOut();
                   },1000)
                setTimeout(function(){
                    $('.cart-wraper').fadeIn();
                },2000)
            }
        }

        $('.img-title svg').click(function(){
            setTimeout(function(){
                $('.cart-wraper').fadeOut();
               },1000)
            setTimeout(function(){
            $('.empty').fadeIn();
            },2000)
            
        })

           
        })

        
    }

    function addCart_item(){
         /*Fazer a janela de lista de compras aparecer e deseparecer*/ 
         $('.car > svg').click(function(){
            if($('.list-wraper').css('display') == 'none'){
                $('.list-wraper').fadeIn();
            
            }
            else if($('.list-wraper').css('display') == 'block' ){
                $('.list-wraper').fadeOut();
            }
        })


        if(true){
            if( $('.cart-amount').html() == '0'){
                $('.list').append('<p class="empty">Your cart is empty.</p>');
                $('.empty').eq(1).remove();
                setTimeout(function(){
                    $('.cart-wraper').fadeOut();
                   },1000)
                setTimeout(function(){
                $('.empty').fadeIn();
                },2000)

            }
            if( $('.cart-amount').html() !== '0'){
                setTimeout(function(){
                    $('.empty').fadeOut();
                   },1000)
                setTimeout(function(){
                    $('.cart-wraper').fadeIn();
                },2000)
            }
        }    
    }

    function modalSlide(){
     

        $('.main-image').click(function(){
            //Variaveis
            var indexAtual = 0;

                /*Funções*/
                slides();
                imgDinamico();

                //Pega a image do img-single e colocar no imgSingle_modal
                function imgDinamico(){
                    $('.imgSingle_modal').eq(0).css('background-image',$('.image-single').eq(0).css('background-image'));    
                    $('.imgSingle_modal').eq(1).css('background-image',$('.image-single').eq(1).css('background-image'));    
                    $('.imgSingle_modal').eq(2).css('background-image',$('.image-single').eq(2).css('background-image'));    
                    $('.imgSingle_modal').eq(3).css('background-image',$('.image-single').eq(3).css('background-image'));    
                }

                //Alterar image clicando na seta
                function slides(){
                    $('.arrowRight').click(function(){
                        indexAtual++;
                        console.log('mais ' + indexAtual)
                        let thisbackground = $('.imgSingle_modal').eq(indexAtual).css('background-image');
                        $('.imgModal').css('background-image', thisbackground);
                        if(indexAtual > 3){
                            indexAtual = -1;
                        }
                        $('.imgSingle_modal').find('.overlayModal').fadeOut();
                        $('.imgSingle_modal').eq(indexAtual).find('.overlayModal').fadeIn();

                    })

                    $('.arrowLeft').click(function(){
                        indexAtual-=1;
                        console.log('Menos ' + indexAtual)
                        let thisbackground = $('.imgSingle_modal').eq(indexAtual).css('background-image');
                        $('.imgModal').css('background-image', thisbackground);
                        if(indexAtual < 0){
                            indexAtual = 3;
                        }
                        $('.imgSingle_modal').find('.overlayModal').fadeOut();
                        $('.imgSingle_modal').eq(indexAtual).find('.overlayModal').fadeIn();
                    })
                }    
           
            $('.imgSingle_modal').click(function(){

                /*Trocar de imagem principal com base na imgSinle_modal*/ 
               let thisbackground =  $(this).css('background-image');
               $('.imgModal').css('background-image', thisbackground);
                
               /*Aplicar o overlay nas img menores*/
               $('.overlayModal').fadeOut();
               $(this).find('.overlayModal').fadeIn();
               /**/
               
            })

            /*Pegar a imagem do main-image  e colocar no imgModal*/ 
            let thisbackground = $(this).css('background-image');
            $('.imgModal').css('background-image',thisbackground);
            $('.modalSlides').fadeIn();

            $('.close').click(function(){
                $('.modalSlides').fadeOut();
            })

        })
    }

})

/*OBS:
        

        *Quando adiciona mais de um lista os valores onde tem o titulo, x e o 
        resultado somem. (MAIS DIFICIL)

        *Criar pagina pricinpal (MAIS DEMORADO).

        *Converter tudo para o React no sabado (VAI DEMORAR O DIA TODO)
        
*/ 
