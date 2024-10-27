$(document).ready(function () {
  // 햄버거를 클릭했을 때 할 일 ↓
  // nav가 보이게!!
  $(".depth1").click(function () {
    $(".depth2").slideToggle(500);
  });

  // $('nav').mouseleave(function(){
  //     $('nav').hide()
  // })

  $(".swiper-slide").css({
    width: "450px",
    height: "600px",
    margin: "0 20px 0 0",
  });
  $(".best-slider").bxSlider({
    slideWidth: 1530,
    slideHeight: 750,
    maxHeight: 1140,
  });

  //show <-> hide (보이게 <-> 사라지게)
  //show, hide 번갈아 가면서 하기 = toggle

  //slideDown (내려오기) <-> slideUp (올라가기)
  //slideDown, slideUp 번갈아 가면서 하기 = slideToggle

    $("#toggle").toggle(
      function () {
        $(".bg1").text("강아지");
      },
      function () {
        $(".bg3").text("강아지");
      }
    );
    $("#toggle").click(function () {
      $(location).attr("href", "고양이.html");
      $("html, body").fadeIn(1000);
    });

  // $('#toggle').toggle(function(){
  //     $('.cat').css({
  //         display : block
  //     });
  // });

  //   $("#toggle").toggleClass(function () {
  //     if ($("#catcat").css("display") == "none") {
  //       $("#catcat").hide();
  //     } else {
  //       $("#catcat").show();
  //     }
  //   });

  // $("#toggle").click(function () {
  //   $("#catcat").toggle();
  //   $("#dogdog").toggle();
  // });

  // let btn = toggle

  // $('btn').click(function(){
  //     $('btn').slideToggle(function(){
  //         $('.cat').show()
  //         $('.dog').hide()
  //     })
  // })

  // top버튼
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      $(".top-btn").fadeIn();
    } else {
      $(".top-btn").fadeOut();
    }
  });
  $(".top-btn").click(function (e) {
    e.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
});

// // element.style 없애는 코드
// $(function(){
//     const result = selectedNode.style.removeProperty(width);
// });
