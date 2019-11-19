$(document).ready(function(){

    $('select#FX').change(function(){
        var currentSelection = $(this).val();

        if(currentSelection == 'show'){
            $('.banddog').show(1000);
        }
        if(currentSelection == 'hide'){
            $('.spadog').hide(1000);
        }

        if(currentSelection == 'slideup'){
            $('.dino').slideUp(1000);
        }
    })

});