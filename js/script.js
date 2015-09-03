// если добавлять картинки, ОБЯЗАТЕЛЬНО измени  в .animated и .animatedTitle время
//    для 6 картинок оно равно 36

(function( $ ){

    $.fn.fullSlideCss = function() {

        var rootForSlide = $('#full-slide-css'); // корневой элемент
        var imageSlide = rootForSlide.find('li');
        var countSlide = imageSlide.length;//количество изображений в слайдере
        var click = false;

        //bg for slides
            rootForSlide.find('li').each(function (i, elem){
                elem.style.background = 'url("../images/' + i +'.jpg")';
                elem.setAttribute('data-id', i)
        });

        //thumbails
        rootForSlide.append("<div class='nav'></div>").each(function () {

            for (var i = 0; i <= countSlide-1; i++) {
                $('.nav').append("<div class='wrapImgNav'><img class='nav-" + i + "' src='../images/" + i + ".jpg'/></div>")

            }

        });



        //do slide
        slideImages = function(imgId) {

            var slideAnimated = rootForSlide.find(("[data-id='" + imgId + "']"));
            slideAnimated.css({
                'opacity': 1,
                'transform': 'scale(1.1, 1.1)'
            });

          setTimeout(function(){
                    slideAnimated.css({
                        'opacity': 0,
                        'transform': 'scale(1, 1)'
                    });

                if (click) {
                    click = false;
                    return;
                }

               else if (imgId >= countSlide-1) {
                    imgId=0;
                } else {
                    imgId++;
                }

                slideImages(imgId)

                }, 9000, imgId, countSlide);

        };

        slideImages(0);

        this.find('.nav').on ('click', function(e){
            var newimgId = e.target.className.slice(4,5)

            click = true;
            slideImages(newimgId)
        })

    }


})( jQuery );

$('#full-slide-css').fullSlideCss();


