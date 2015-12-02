(function ($) {
    $.fullSlideCss = function () {

        var fsc = {

            rootForSlide: $('#full-slide'), // корневой элемент

            init: function () {

                fsc.imageSlide = fsc.rootForSlide.find('li');
                fsc.countSlide = fsc.imageSlide.length;//количество изображений в слайдере

                //bg for slides
                fsc.rootForSlide.find('li').each(function (i, elem) {

                    elem.style.background = 'url("' + window.location.href + 'images/' + i + '.jpg")';
                    elem.setAttribute('data-id', i);
                });

                //thumbails
                fsc.rootForSlide.append("<div class='nav'></div>").each(function () {

                    for (var i = 0; i <= fsc.countSlide - 1; i++) {

                        $('.nav').append("<div class='wrapImgNav'><img class='nav-" + i + "'src=" + window.location.href + "images/" + i + ".jpg ></div>")
                    }
                });
                fsc.slideImages(0);
                fsc.rootForSlide.find('.nav').on('click', function (e) {

                    fsc.onclick(e)
                })
            },
            slideImages: function (imgId) {

                fsc.slideAnimated = fsc.rootForSlide.find(("[data-id='" + imgId + "']"));
                fsc.slideAnimated.css({
                    'opacity': 1,
                    'transform': 'scale(1.1, 1.1)'
                });

                setTimeout(function () {
                    fsc.slideAnimated.css({
                        'opacity': 0,
                        'transform': 'scale(1, 1)'
                    });

                    if (imgId >= fsc.countSlide - 1) {
                        imgId = 0;
                    } else {
                        imgId++;
                    }
                    fsc.timersZeroing();
                    fsc.slideImages(imgId)

                }, 6000, imgId, fsc.countSlide);
            },
            onclick: function (e) {

                fsc.slideAnimated.css({
                    'opacity': 0,
                    'transform': 'scale(1, 1)'
                });

                fsc.timersZeroing();

                var newimgId = e.target.className.slice(4, 5);
                fsc.slideImages(newimgId)
            },
            timersZeroing: function () {
                //Обнуление всех таймеров Это я нашел http://dmitrypodgorniy.com/blog/
                var max_id;
                max_id = setTimeout(function () {
                });
                while (max_id--) {
                    clearTimeout(max_id);
                }
                //Обнуление всех таймеров 
            }
        };

        return {
            init: fsc.init
        };
    };
})(jQuery);

var fsc = $.fullSlideCss().init();
