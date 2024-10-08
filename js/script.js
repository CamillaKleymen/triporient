$(document).ready(function() {
    // Инициализация слайдера для '.multiple-items'
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.multiple-items').siblings('.paginator').find('.prev'),
        nextArrow: $('.multiple-items').siblings('.paginator').find('.next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Инициализация слайдера для '.popular-destinations 
    $('.popular-destinations').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.popular-destinations').siblings('.paginator').find('.prev'),
        nextArrow: $('.popular-destinations').siblings('.paginator').find('.next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Инициализация слайдера для '.testimonial 
    $('.testimonial').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.testimonial').siblings('.paginator').find('.prev'),
        nextArrow: $('.testimonial').siblings('.paginator').find('.next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Обработчики событий для кнопок 
    $('.multiple-items').siblings('.paginator').find('.prev').on('click', function() {
        $('.multiple-items').slick('slickPrev');
    });
    $('.multiple-items').siblings('.paginator').find('.next').on('click', function() {
        $('.multiple-items').slick('slickNext');
    });

    // Обработчики событий для кнопок '.popular-destinations
    $('.popular-destinations').siblings('.paginator').find('.prev').on('click', function() {
        $('.popular-destinations').slick('slickPrev');
    });
    $('.popular-destinations ').siblings('.paginator').find('.next').on('click', function() {
        $('.popular-destinations ').slick('slickNext');
    });

    // Обработчики событий для кнопок '.testimonial 
    $('.testimonial').siblings('.paginator').find('.prev').on('click', function() {
        $('.testimonial').slick('slickPrev');
    });
    $('.testimonial').siblings('.paginator').find('.next').on('click', function() {
        $('.testimonial').slick('slickNext');
    });
});
