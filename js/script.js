$(document).ready(function(){
    //slider
// если добавлять картинки, ОБЯЗАТЕЛЬНО измени  в .animated и .animatedTitle время
//    для 6 картинок оно равно 36
    // и прописать бэкграунд
    $('#page').append("<div class='nav'></div>");
    var AllSlide = $('.cb-slideshow');
    AllSlide.each(function ()
    {
        var obj = $(this);
        $(obj).find("li").each(function ()
        {
            var countImg = $(this).index();
            var setImg = countImg+1;
            $(this).addClass('slide'+setImg);
            $('.nav').append("<div class='wrapImg'><img class='nav-"+setImg+"' src='images/"+setImg+".jpg'/></div>");

        });
    });

    var countSlide = AllSlide.find('span').length;//количество изображений в слайдере

    var begin = 0;
    if ( $.cookie('begin') == null ) {
        begin = 1;
    }else begin = $.cookie('begin');

    function slide (counter){
        AllSlide.find('.slide'+counter).find('span').addClass('animated')
            .siblings('div').addClass('animatedTitle');
        counter++;
        if (counter > countSlide) counter = 1 ;

        setTimeout(function() {
            setTimeout(function() {
                $('.slide'+(counter-1)).find('span').removeClass('animated')
                    .siblings('div').removeClass('animatedTitle');

            }, 3000);
            slide(counter);
        }, 6000);
    }
    slide(begin);
    $('.wrapImg').on('click', function() {
        var targetClass = $(this).children().attr('class').slice(4, 5);
        $('.cb-slideshow').css('opacity', '0');
        $.cookie('begin', targetClass);

        setTimeout(function() {
          location.reload();
        }, 1000);

    });

    //slider

});

