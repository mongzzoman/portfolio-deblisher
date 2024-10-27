$(function () {
  // go top button
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 1100) {
      $(".gotop").fadeIn();
    } else {
      $(".gotop").fadeOut();
    }
  });
  $(".gotop").click(function (e) {
    e.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: 0,
      },
      500
    );
  }); 

  // #header_fixed 고정된 헤드 일정구간 지나면 나오고 들어가면 사라지게
  $(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop() >= 1850) {
        $("#header_fixed").fadeIn();
        console.log(this)
      } else {
        $("#header_fixed").fadeOut();
      }
    });
  });


  $(".slider").bxSlider({
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    auto: true,
    infiniteLoop: true,
    speed: 2000,
    controls: true,
    pager: true,
    touchEnabled: navigator.maxTouchPoints > 0, // PC홈페이지에만 적용
    touchEnabled: false, // PC홈페이지에만 적용
  });

  // 대표 제품 호버하면 main_product1자리에 있는 글씨 사라짐
  $(".main_product1").mouseenter(function () {
    $(".main_txt").css({
      display: "none",
    });
  });
  $(".main_product1").mouseleave(function () {
    $(".main_txt").css({
      display: "block",
    });
  });
  //md-down 이미지 호버하면 white box 밑에서 올라오게
  
    // $(function(){
    //   $('.md5 .md-img').mouseenter(function(){
    //     $('.md5 .white_box').stop().animate({
    //       bottom: 0,
    //     },300);
    //   });
    //   $('.md5 .md-img').mouseleave(function(){
    //     $('.md5 .white_box').stop().animate({
    //       bottom: "-80px",
    //     },300);
    //   });
    // })

  function remaindTime() {
    var now = new Date();
    var end = new Date(now.getFullYear(),now.getMonth(),now.getDate(),'21','00','00');
    var open = new Date(now.getFullYear(),now.getMonth(),now.getDate(),'09','00','00');
  
    var nt = now.getTime();
    var ot = open.getTime();
    var et = end.getTime();
  
   if(nt<ot){
     $(".time").fadeIn();
     sec =parseInt(ot - nt) / 1000;
     day  = parseInt(sec/60/60/24);
     sec = (sec - (day * 60 * 60 * 24));
     hour = parseInt(sec/60/60);
     sec = (sec - (hour*60*60));
     min = parseInt(sec/60);
     sec = parseInt(sec-(min*60));
     if(hour<10){hour="0"+hour;}
     if(min<10){min="0"+min;}
     if(sec<10){sec="0"+sec;}
      $(".hours").html(hour);
      $(".minutes").html(min);
      $(".seconds").html(sec);
   } else if(nt>et){
    
    $(".time").fadeOut();
   }else {
       $(".time").fadeIn();
    
     sec =parseInt(et - nt) / 1000;
     day  = parseInt(sec/60/60/24);
     sec = (sec - (day * 60 * 60 * 24));
     hour = parseInt(sec/60/60);
     sec = (sec - (hour*60*60));
     min = parseInt(sec/60);
     sec = parseInt(sec-(min*60));
     if(hour<10){hour="0"+hour;}
     if(min<10){min="0"+min;}
     if(sec<10){sec="0"+sec;}
      $(".hours").html(hour);
      $(".minutes").html(min);
      $(".seconds").html(sec);
   }
  }
  setInterval(remaindTime,1000);

  new Swiper(".ecoSwiper", {
    slidesPerView: 2,
    autoplay : true,
    loop : true,
    speed : 1000,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    // breakpoints: {
    //   744: {
    //     slidesPerView : 1,
    //     spaceBetween : 10
    //   },
    //   360: {
    //     slidesPerView : 3,
    //     spaceBetween : 10
    //   }
    // }
  });

  new Swiper(".bannerSwiper", {
    autoPlay: 'auto',
    loop: 'true',
    speed: 600,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: 'true',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // $('.popup').mouseenter(function(){
  //   $('.imeco-hover-popup').addClass('imeco-hover-popup-show')
  // })
  // $('.popup').mouseleave(function(){
  //   $('.imeco-hover-popup').removeClass('imeco-hover-popup-show')
  // })


  // $('.popup').mouseenter(function(){
  //   $('.imeco-hover-popup').stop().slideDown(200)
  // })
  // $('.popup').mouseleave(function(){
  //   $('.imeco-hover-popup').stop().slideUp(200)
  // })


  // header 아임에코 호버했을 때 2차메뉴 스윽 나오고 사라지게
  $('.popup').mouseenter(function(){
    $('.imeco-hover-popup').stop().slideDown(200)
  })
  $('.popup').mouseleave(function(){
    $('.imeco-hover-popup').stop().slideUp(200)
  })

});