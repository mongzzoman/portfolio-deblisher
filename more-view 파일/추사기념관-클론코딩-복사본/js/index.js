$(document).ready(function () {
  $(".depth1 span").mouseenter(function () {
    $(".depth2").show();
    $(".gnb_bg").show();
    $(".gnb_title").animate({
      opacity: 1
    },600);
  });
  $(".gnb_bg").mouseleave(function () {
    $(".depth2").hide();
    $(".gnb_bg").hide();
    // $(".gnb_title").hide();
  });


  //depth2 호버하면 depth3나오게
  $('.dep3_show').mouseenter(function(){ 
    $('.depth3').hide()
    $(this).find('.depth3').show() //this = .dep3_show
    })

  $('.dep3_show').mouseleave(function(){
    $(this).find('.depth3').hide()
  })

  //윈도우를 스크롤 했을 때 일정지점에서 고탑버튼나오게
  $(window).scroll(function(){
    let scroll = $(window).scrollTop();
    if(scroll > 200){
      $('.gotop').addClass('gotop-show')
    }else{
      $('.gotop').removeClass('gotop-show')
    }
  });


  //메인배너 스와이퍼
  let main = new Swiper(".mainSwiper", {
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination-main",
      type: "fraction",
      // fraction 2자리 숫자로 만들기
      formatFractionCurrent: function (number) {
        return ("0" + number).slice(-2);
      },
      formatFractionTotal: function (number) {
        return ("0" + number).slice(-2);
      },
    },
    navigation: {
      nextEl: ".swiper-button-next-main",
      prevEl: ".swiper-button-prev-main",
    },
    //progress animate,active클래스 추가 및 제거
    on: {
      init: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").addClass("animate");
        $(".swiper-progress-bar").addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").addClass("active");
      },
      slideChangeTransitionEnd: function () {
        $(".swiper-progress-bar").addClass("animate");
      },
    },
  });
   // stop버튼 누르면 progress초기화 되고 배너재생 멈추게 
  const stop = $('.stop')
  stop.click(function(){
    $(this).toggleClass('stop-changePlay')

    let have = $(this).hasClass('stop-changePlay')
    if(have){
      main.autoplay.stop()
      $(".swiper-progress-bar").removeClass("animate");
        // $(".swiper-progress-bar").removeClass("active");
    }else{
      main.autoplay.start()
      $(".swiper-progress-bar").addClass("animate");
        $(".swiper-progress-bar").addClass("active");
    }
  });


  // section2 
  $('.notice-item').click(function(e){
    e.preventDefault();
    // active 클래스 추가 및 제거
    $('.notice-menu span').removeClass('active');
    $(this).find('span').addClass('active');

    $('.notice-inner').hide();
    //span이랑 inner 내용 index로 연결하기
    let idx = $(this).index()
    console.log(idx)

    $('.notice-inner').eq(idx).show();
  })
  // 화면 켰을 때 inner 첫번째 내용은 늘 나와있는것처럼 하기
  $('.notice-item span').eq(0).trigger('click')

  // section3 swiper
  new Swiper(".sec3-Swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    // centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next-3",
      prevEl: ".swiper-button-prev-3",
    },
  });

  // 고탑 버튼 누르면 스르륵 위로 올라가게
  $('.gotop').click(function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop : 0
    },600)
  })


  // footer 관련 사이트를 클릭하면 리스트들이 나오게
  $('.site').click(function(){
    $('.siteList').toggleClass('siteList-active')
  })

});
