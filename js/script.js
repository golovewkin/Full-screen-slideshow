(function($) {
    $.fullSlideCss = function() {
        var fsc = {

            rootForSlide : $('#full-slide-css'), // корневой элемент
            imageSlide : $('#full-slide-css').find('li'),
            countSlide: $('#full-slide-css').find('li').length,//количество изображений в слайдере
            click : false, // был ли клик

            init: function( ) {

                //bg for slides
                fsc.rootForSlide.find('li').each(function (i, elem){
                    elem.style.background = 'url("../images/' + i +'.jpg")';
                    elem.setAttribute('data-id', i)
                });

                //thumbails
                fsc.rootForSlide.append("<div class='nav'></div>").each(function () {

                    for (var i = 0; i <= fsc.countSlide-1; i++) {
                        $('.nav').append("<div class='wrapImgNav'><img class='nav-" + i + "' src='../images/" + i + ".jpg'/></div>")
                    }
                });
                fsc.slideImages(0);
                $('#full-slide-css').find('.nav').on ('click', function(e){
                    fsc.slideAnimated.css({
                        'opacity': 0,
                        'transform': 'scale(1, 1)'
                    });

                    fsc.onclick(e)
                })
            },
            slideImages: function(imgId) {

                fsc.slideAnimated = fsc.rootForSlide.find(("[data-id='" + imgId + "']"));
                fsc.slideAnimated.css({
                        'opacity': 1,
                        'transform': 'scale(1.1, 1.1)'
                    });

                fsc.timerId = setTimeout (function(){
                    fsc.slideAnimated.css({
                            'opacity': 0,
                            'transform': 'scale(1, 1)'
                        });

                         //if (fsc.click) {
                         //
                         //
                         //}

                        if (imgId >= fsc.countSlide-1) {
                            imgId=0;
                        } else {
                            imgId++;
                        }
                        //
                        fsc.slideImages(imgId)

                    }, 6000, imgId, fsc.countSlide);


            },
            onclick: function(e) {

                var max_id;
                max_id = setTimeout(function () {});
                while (max_id--) {
                    clearTimeout(max_id);
                }

                var newimgId = e.target.className.slice(4,5);
                fsc.slideImages(newimgId)

            }
        };
        return {
            init: fsc.init
            //close: jpm.closeMenu,
            //someComplexMethod: function( ) {
            ////…
            //}
        };
    };
})(jQuery);

var fsc = $.fullSlideCss();

fsc.init( );





