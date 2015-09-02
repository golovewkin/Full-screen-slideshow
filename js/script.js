// если добавлять картинки, ОБЯЗАТЕЛЬНО измени  в .animated и .animatedTitle время
//    для 6 картинок оно равно 36

(function( $ ){

    $.fn.fullSlideCss = function() {

        var rootForSlide = $('#full-slide-css'); // корневой элемент
        var imageSlide = rootForSlide.find('li');
        var countSlide = imageSlide.length;//количество изображений в слайдере

        //bg for slides
            rootForSlide.find('li').each(function (i, elem){
                elem.style.background = 'url("../images/' + i +'.jpg")';
                elem.setAttribute('data-id', i)
        });

        //thumbails
        rootForSlide.append("<div class='nav'></div>");

        slideImages = function (imgId) {


            var slideAnimated = rootForSlide.find(("[data-id='" + imgId + "']"));
            slideAnimated.css({
                'opacity': 1,
                'transform': 'scale(1.1, 1.1)'
            });
            $('#full-slide-css').on('click', function(){
                this.exit = true;
                //console.log(this.exit)
            })

            setTimeout(function(){
                    slideAnimated.css({
                        'opacity': 0,
                        'transform': 'scale(1, 1)'
                    });
                console.log(this.exit)
                if (exit) {

                }
                else if (imgId > countSlide-2) {

                    imgId=0;

                }else {
                    imgId++;
                }
                slideImages(imgId)

                }, 9000, imgId, countSlide);

        };

        slideImages(0);


        //
        //rootForSlide.each(function ()
        //{
        //    var obj = $(this);
        //    $(obj).find("li").each(function ()
        //
        //        var countImg = $(this).index();
        //        var setImg = countImg+1;
        //        $(this).addClass('slide'+setImg);
        //        $('.nav').append("<div class='wrapImg'><img class='nav-"+setImg+"' src='images/"+setImg+".jpg'/></div>");
        //
        //    });
        //});


    }


})( jQuery );

$('#full-slide-css').fullSlideCss();


//$(document).ready(function(){
//
//
//    var begin = 0;
//    if ( $.cookie('begin') == null ) {
//        begin = 1;
//    }else begin = $.cookie('begin');
//
//    function slide (counter){
//        AllSlide.find('.slide'+counter).find('span').addClass('animated')
//            .siblings('div').addClass('animatedTitle');
//        counter++;
//        if (counter > countSlide) counter = 1 ;
//
//        setTimeout(function() {
//            setTimeout(function() {
//                $('.slide'+(counter-1)).find('span').removeClass('animated')
//                    .siblings('div').removeClass('animatedTitle');
//
//            }, 3000);
//            slide(counter);
//        }, 6000);
//    }
//    slide(begin);
//    $('.wrapImg').on('click', function() {
//        var targetClass = $(this).children().attr('class').slice(4, 5);
//        $('.cb-slideshow').css('opacity', '0');
//        $.cookie('begin', targetClass);
//
//        setTimeout(function() {
//          location.reload();
//        }, 1000);
//
//    });
//
//    //slider
//
//});

