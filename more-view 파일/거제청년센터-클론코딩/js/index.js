$(document).ready(function () {
  //window를 스크롤 했을 때 할 일 ↓
  $(window).scroll(function () {
    //윈도우가 스크롤한 양(스크롤탑)을 변수에 저장하기
    let st = $(this).scrollTop();
    console.log(st);
    //만약에 변수 > 450이면
    //header에 hide 추가하기
    //모바일.mb-bt에 hide 추가하기
    if (st > 450) {
      //반응형css에 클래스 있음(header.hide라고 썼었으니까 클래스명인 hide만 적으면 됨)
      $("header").addClass("hide");
      $(".mb-bt").addClass("mb-bt-hide");
    } else {
      //아니면
      //header에 hide 삭제하기
      //모바일.mb-bt에 hide 삭제하기
      $("header").removeClass("hide");
      $(".mb-bt").removeClass("mb-bt-hide");
    }
  });
  //all-menu
  //all-menu 클릭했을 때 할 일
  $(".all-menu").click(function () {
    //wrapper active 클래스 추가하기
    $(".all-nav-wrapper").addClass("all-nav-wrapper-active");
    //all nav mask active 클래스 추가하기
    $(".all-nav-mask").addClass("all-nav-mask-active");
  });
  $(".all-nav-close").click(function () {
    //닫기버튼 클릭했을 때 할일
    //wrapper active 클래스 삭제하기
    $(".all-nav-wrapper").removeClass("all-nav-wrapper-active");
    //all nav mask active 클래스 삭제하기
    $(".all-nav-mask").removeClass("all-nav-mask-active");
  });

  //mb-bt 클릭했을 때 할 일
  //a태그니까 막아줘야함 (작동 막기)
  //mb-bt에 mb-bt-open 클래스를 toggle시켜주기
  //모바일 메뉴 배경도 toggle 클래스 주기
  //mb-nav에 mb-nav-open 클래스 toggle 시켜주기
  $(".mb-bt").click(function (e) {
    e.preventDefault();
    $(".mb-bt").toggleClass("mb-bt-open");
    $(".mb-menu-mask").toggleClass("mb-menu-mask-active");
    $(".mb-nav").toggleClass("mb-nav-open");
  });

  // 화면사이즈체크(resize)해서 모바일에서 pc로 넘어갈 때 클래스를 없애주기!
  $(window).resize(function () {
    //화면의 가로사이즈를 변수로 저장하기
    let temp = $(window).width();
    if (temp > 1220) {
      // 화면 가로사이즈가 1220을 넘어가면 모바일 메뉴는 사라져야되니까
      //모바일 메뉴 클래스 3개 제거
      $(".mb-bt").removeClass("mb-bt-open");
      $(".mb-menu-mask").removeClass("mb-menu-mask-active");
      $(".mb-nav").removeClass("mb-nav-open");
    } else {
      // 화면 가로사이즈가 1220보다 작으면 pc메뉴가 사라져야되니까
      //전체메뉴 클래스 2개 제거
      $(".all-nav-wrapper").removeClass("all-nav-wrapper-active");
      $(".all-nav-mask").removeClass("all-nav-mask-active");
    }
  });

  //고탑버튼
  $(".gotop").click(function (e) {
    e.preventDefault();
    //html, body에 animate -> 스크롤탑0 / 초 입력
    // $('html, body').animate({
    //     scrollTop : 0
    // },500)
    $("html, body").scrollTop(0);
  });

  //모바일 서브메뉴
  const mb_mainmenu = $(".mb-mainmenu"), //모바일 메인 메뉴
    mb_submenu = $(".mb-submenu"); //모바일 서브 메뉴

  let mb_submenu_height = []; //펼쳐진 서브메뉴 높이값 / 빈 배열([];)에 변수를 선언한 것
  //높이값이 각각 서로 다르니까 = ($.each 사용)
  // $.each(mb_submenu, function(index, item){})라고 적어야 함
  $.each(mb_submenu, function (index) {
    //각각의 mb_submenu로 가서 li 갯수를 파악
    //값이 바뀌여야 되니까 let
    let count = $(this).find("li").length; //length는 배열의 갯수
    console.log(count); //각각의 li갯수들이 나옴
    // console.log(this)->mb_submenu
    //count에 서브메뉴(this)에있는li갯수를 집어넣은것
    mb_submenu_height[index] = 51 * count + 22; //최종결과를 저장
    // 51은 51px을 말하는 것=서브메뉴의 높이가 51px임
    // 22는 서브메뉴ul의 위아래 padding값임
  });
  console.log(mb_submenu_height); //->li의 높이들이 console창에 다 나옴

  let mb_li = $(".mb-menu > li"); // 전체 ul안에 있는 li를 변수지정함
  $.each(mb_mainmenu, function (index) {
    $(this).click(function (e) {
      e.preventDefault();
      //mb-mainmenu-open 있으면 펼쳐지고, 없으면 닫히는 클래스 생성
      $(this).toggleClass("mb-mainmenu-open");
      let active = $(this).hasClass("mb-mainmenu-open");
      if (active) {
        //=active가 있으면
        //클릭 됐다
        //해당(클릭된) li>a의 높이값을 저장
        let temp = mb_submenu_height[index];
        //저장한 높이값에다가 +54 시키기
        mb_li.eq(index).height(temp + 54);
      } else {
        //클릭 안됐다
        //mb_li의 높이가 54인데 그대로 두면 됨
        mb_li.eq(index).height(54);
      }
    });
  });

  //스와이퍼
  new Swiper(".sw-visual", {
    autoplay: true, //자동재생
    loop: true, //무한반복
    effect: "fade", //스윽 사라졌다가 스윽 나타났다가
    speed: 3000, //3000이니까 3초
    pagination: {
      el: ".swiper-pagination",
      clickable: true, //버튼을 클릭했을 때 해당페이지로 이동
    },
  });

  let sw_banner = new Swiper(".sw-banner", {
    slidesPerView: 2, //2개의 슬라이드가 보이게 (원래는 6개가 보여야 하는데 반응형 때문에 일단 2개로 설정함)
    autoplay: true, //자동재생
    loop: true, //무한반복
    breakpoints: {
      // slide 반응형으로 만드는 방법
      1023: { slidesPerView: 6 }, //너비가 1023px까지는 슬라이드 6개가 보이도록 하겠다는 뜻
      872: { slidesPerView: 5 },
      676: { slidesPerView: 4 },
      450: { slidesPerView: 3 },
      320: { slidesPerView: 2 },
    },
    spaceBetween: 13,
    navigation: {
      nextEl: ".banner-forward",
      prevEl: ".banner-back",
    },
  });

  //배너
  const banner_back = $(".banner-back");
  const banner_play = $(".banner-play");
  const banner_forward = $(".banner-forward");

  //bannerplay 클릭했을 때 할일
  banner_play.click(function () {
    //bannerplay가 toggleClass banner-play-start
    // this -> banner-play
    $(this).toggleClass("banner-play-start");
    //toggle은 왔다갔다하는 거

    //hasClass 있다없다하는 거
    // this -> banner-play
    let temp = $(this).hasClass("banner-play-start");

    if (temp) {
      //슬라이드 작동이 멈춰야함(▶ 버튼 상태니까)
      sw_banner.autoplay.stop();
    } else {
      //슬라이드 작동 해야함(|| 버튼 상태니까)
      sw_banner.autoplay.start();
    }
  });
});
