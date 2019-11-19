$(document).ready(function(){
    $('input, label').focus(function(){
        if( $(this).val() == "" ){


        $('main').append('<p class="notification">please fill ' + $(this).attr('id') + ' out</p>');
        }
    });

        $('input, label').blur(function(){
            $('p.notification').remove()
    });

    $('select#FX').change(function(){
        var currentSelection = $(this).val();

        if(currentSelection == 'show'){
            $('.box').show(1000);
        }
        if(currentSelection == 'hide'){
            $('.box').hide(1000);
        }

        if(currentSelection == 'slidedown'){
            $('.box').slideown(1000);
        }

        if(currentSelection == 'slideup'){
            $('.box').slideUp(1000);
        }
    })

});