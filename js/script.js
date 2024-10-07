$(document).ready(function() {
    // Функция для инициализации слайдера
    function initSlider(selector) {
        $(selector).slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: $(selector).siblings('.paginator').find('.prev'),
            nextArrow: $(selector).siblings('.paginator').find('.next'),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        // Обработчики событий для кнопок
        $(selector).siblings('.paginator').find('.prev').on('click', function() {
            $(selector).slick('slickPrev');
        });
        $(selector).siblings('.paginator').find('.next').on('click', function() {
            $(selector).slick('slickNext');
        });
    }

    // Инициализация слайдеров
    initSlider('.multiple-items');
    initSlider('.popular-destinations .multiple-items');
    initSlider('.testimonial .multiple-items');
});

