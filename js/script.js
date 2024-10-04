

// файл тестовый пока что 


//Указываем что будем выводить по 3 слайда на экран
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});



    //Настройки по выводу слайдов в зависимости от разрешения экрана
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
  

{/* <div data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
      <div><h3>5</h3></div>
      <div><h3>6</h3></div>
  </div>    




   // Используйте леневую загрузку устаноиви ее в data-lazy атрибудет
      // В нем укажите источник к файлу в место SRC

      <img data-lazy="img/lazyfonz1.png"/>

      $('.lazy').slick({
          lazyLoad: 'ondemand',
          slidesToShow: 3,
          slidesToScroll: 1
      }); */}




      $(".multiple-items").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      });

      

    //   метод resize, breakpoint ??
