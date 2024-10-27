$(document).ready(function(){
    // header에 메뉴li를 클릭하면 해당 영역으로 이동
    $("header .menu li").click(function (e) {
        e.preventDefault();
        let idx = $(this).index();
        let section = $(".works > div").eq(idx);
        let sectionH = section.offset().top;
        $("html, body").animate(
          {
            scrollTop: sectionH,
          },
          500
        );
      });

    // gotop버튼을 클릭하면 맨 상단으로 이동
    $('.gotop').click(function(e){
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop : 0
      }, 500)
    })

    // 로고 클릭하면 맨 상단으로 이동
    $('.name').click(function(e){
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop : 0
      },500)
    })

    // 스크롤 했을 때 일정 구간에서 gotop버튼이 생기도록
    $(window).on('scroll', function(){
      if($(window).scrollTop() > 1200){
        $('.gotop').fadeIn();
      }else{
        $('.gotop').fadeOut();
      };
    })
  
    // detail view 버튼 누르면 팝업 생성
    $('.detailview').on('click',function(){
      $('.detailview-popup').addClass('active');
    })
    
    // detail view 바깥영역이나 x표 누르면 팝업 사라지게
    $('.detailview-popup-wrapper, .detailview-popup .detailview-popup-wrapper .exit').on('click',function(){
      $('.detailview-popup').removeClass('active');
    })

    // detail view 해당이미지와 연결시키기
    const popupImg = [
      "images/카사바고양이모래 상세페이지 작업.jpg",
      "images/스파오 레더자켓 상세페이지3.jpg",
      "images/NANU 대나무칫솔 상세페이지 작업-최종.jpg"
    ];

    $('.webdesign .content').each(function(index){
      $(this).find('.detailview').on('click',function(){
        $('.detailview-popup .detailview-popup-wrapper .detailview-popup-img-box .detail-img').attr('src',popupImg[index]);
      })
    })

    // design 이미지 누르면 해당 이미지 팝업창이 뜨도록
    $('.design .image').on('click',function(){
      $('.design-popup').addClass('active');
    })

    // design popup 바깥영역이나 exit 누르면 팝업창이 꺼지도록
    $('.design-popup-wrapper, .design-popup-img-box .exit').on('click',function(){
      $('.design-popup').removeClass('active');
    })

    // design popup 해당이미지와 연결시키기
    const DpopupImg = [
      "images/개고몰-mainbanner-cat1.png",
      "images/뚜레쥬르 말차 sns 이미지2.jpg",
      "images/뚜레쥬르 말차 sns 이미지.jpg",
      "images/12월마켓오픈인포.jpg",
      "images/개고몰-mainbanner-dog2.png",
      "images/쉼 포스터.jpg",
      "images/힐링이 필요해.jpg",
      "images/거리예술마켓  포스터.jpg",
      "images/개고몰-mainbanner-cat2.png",
      "images/몽쪼만하우스-테라스-인스타2-02.jpg",
      "images/몽쪼만하우스-키친-인스타-02.jpg",
      "images/몽쪼만하우스-방-인스타1-02.jpg"
    ];
    const firstTitle = [
      "배너디자인",
      "SNS 디자인",
      "SNS 디자인",
      "SNS 디자인",
      "배너디자인",
      "포스터 그래픽 디자인",
      "포스터 그래픽 디자인",
      "포스터 그래픽 디자인",
      "배너디자인",
      "디지털 드로잉 (with 아이패드)",
      "디지털 드로잉 (with 아이패드)",
      "디지털 드로잉 (with 아이패드)"
    ];
    const secondTitle = [
      '"퍼펙트 카사바 고양이 모래 3종 출시 기념 20% 할인 배너디자인"',
      '"출시예정인 뚜레쥬르의 말차크림빵 소개 sns 디자인"',
      '"출시예정인 뚜레쥬르의 말차크림빵 소개 sns 디자인"',
      '"크리스마스 마켓 오픈 알림인포 sns 디자인"',
      '"30% 세일하는 강아지 장난감 모음 배너디자인"',
      '"쉼(휴식)이라는 주제의 전시 초대 포스터 디자인"',
      '"쉼(휴식)이라는 주제의 아트워크 디자인"',
      '"거리예술마켓 홍보 포스터 디자인"',
      '"프리미요츄 고양이 츄르 4종 출시 기념 체험단 30인 모집 배너디자인"',
      '"몽쪼만 하우스 - 테라스 를 주제로 한 디지털드로잉"',
      '"몽쪼만 하우스 - 키친 을 주제로 한 디지털드로잉"',
      '"몽쪼만 하우스 - 방 을 주제로 한 디지털드로잉"'
    ];

    $('.design .contents-box .image').each(function(index){
      $(this).on('click',function(){
        $('.design-img').attr('src',DpopupImg[index]);
        $('.first-title').text(firstTitle[index]);
        $('.second-title').text(secondTitle[index]);
      })
    })


     // hamburger 버튼을 클릭하면 팝업 생성
     $('.menu-hamburger').click(function(){
      $('.hamburger-popup').toggleClass('active');
      $('.menu-hamburger').toggleClass('active');
    })
    
    // hamburger 바깥 영역 클릭하면 팝업 사라지게
    $('.hamburger-popup-wrapper').click(function(){
      $('.hamburger-popup').removeClass('active');
      $('.menu-hamburger').removeClass('active');
    })

    // hamburger list를 클릭하면 해당영역으로 이동하게
    $('.hamburger-popup .menu li').click(function(e){
      e.preventDefault();
      let idx = $(this).index();
      let section = $('.works > div').eq(idx);
      let sectionH = section.offset().top;

      $('html, body').animate({
        scrollTop: sectionH
      },500)
      
    });




    // 다크모드
    $('#toggle').on('click',function(){
      $('.wrapper').toggleClass('dark');
      $('#header').toggleClass('dark');
      $('#header .menu-hamburger span').toggleClass('dark');
      $('a').toggleClass('dark');
      $('#main > .ellipse1').toggleClass('dark');
      $('#main > .ellipse2').toggleClass('dark');
      $('.first-page .text-box').toggleClass('dark');
      $('.first-page .text-box p').toggleClass('dark');
      $('.first-page .text-box .txt-1 span').toggleClass('dark');
      $('.introduce .btns a .txt').toggleClass('dark');
      $('.introduce .introduce-contents .introduce-txt').toggleClass('dark');
      $('.introduce .skill-box p').toggleClass('dark');
      $('.works h1').toggleClass('dark');
      $('.works .contents .content .image-box').toggleClass('dark');
      $('.works .contents .content .explain p').toggleClass('dark');
      $('.works .contents .content .explain h2').toggleClass('dark');
      $('.works .contents .content .explain .tag li').toggleClass('dark');
      $('.works .contents .content .explain .btns a').toggleClass('dark');
      $('#footer .inner h1').toggleClass('dark');
      $('#footer .inner .coment').toggleClass('dark');
      $('.hamburger-popup-inner').toggleClass('dark');
      $('#footer .ellipse1').toggleClass('dark');
      $('#footer .ellipse2').toggleClass('dark');
    })
  })
  