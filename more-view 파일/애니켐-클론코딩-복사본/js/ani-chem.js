$(function(){
    var text = [
        "플라스틱 포장재",
        "자동차용 소재",
        "농업용 필름",
        "코팅종이"];

    new Swiper('.main_news .swiper-container',{       
        // slidesPerView: 'auto',
        loop: true,
        autoplay: true,
        speed: 1000,
        slidesPerView: 3,
        // centeredSlides: true,
        spaceBetween: 50,
        pagination: {
            el: ".swiper-pagination-eco",
            bulletClass: "custom_bullet",
            bulletActiveClass: "swiper-pagination-custom-bullet-active",
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<div class="' +
                className +
                '"><span>' +
                text[index] +
                "</span></div>"
              );
            },
          },
        navigation: {
        nextEl: ".swiper-button-next-eco",
        prevEl: ".swiper-button-prev-eco",
        clickable: true,
        },
    });
});