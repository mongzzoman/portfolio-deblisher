$(function(){
    // menu버튼을 클릭했을때 navigation이 나오도록
    $('.btn_menu').on('click',function(){
        $(this).toggleClass('active')
        // toggleClass 자체에 display:block이 있기 때문에 css에서 block을 굳이 주지 않아도 됨
        // click을 계속 빠르게하면 slide가 정신을 못 차리니까 stop()꼭 써주기
        $('.navigation').toggleClass('active').stop().slideToggle()
    });

    // navigation안에 input(search)안에 내용을 적을때 아이콘이 사라지도록
    // keydown : 키보드를 누르고 있을 때
    $('header .navigation input').on('keydown',function(){
        $(this).addClass('active')
    })

    // navigation안에 input(search)안에 내용이 없을 땐 다시 아이콘이 나타나도록
    // blur : unfocus 됐을 때
    // keyup : 키보드 떼고 있을 때
    $('header .navigation input').on('blur keyup',function(){
        var val = $(this).val();
        if(val == ""){
            $(this).removeClass('active');
        }
    });


    // 서브페이지 detail info에서 이미지를 클릭하면 클릭된 이미지가 나오도록
    // 변수img는 .detail_info .list안에 있는 이미지
    var img = $('.detail_info .list img');
    // img를 클릭했을 때 실행시킬 함수 imgInfo
    img.on('click',imgInfo);
    // imgInfo 함수에 대한 정의
    function imgInfo() {
        // this를 쓰는 이유는 클릭한 그 자신(img)가 되어야 하기 때문
        var src = $(this).attr('src');
        var alt = $(this).attr('alt');
        var thumb = $('.thumbnail');

        // thumbnail을 thumb으로 변수를 지정하고 속성
        thumb.attr('src',src).attr('alt',alt);
    }

    // 모바일 사이즈일 때 서브페이지 .thumb과 .list 이미지 크기 

    $(window).on('resize load', resize)

    function resize (){
        var winWid = $(window).width()
        // window 사이즈가 1199보다 작으면 = 모바일 사이즈일 때
        if(winWid < 1199){
            var img = $('.thumbnail');
            var li = $('.detail_info .list li');
            var imgWid = img.width();
            var imgHei = imgWid / 2;

            img.css('height', imgWid);
            li.find('img').css('height', imgHei - 4.225);

            $('.detail_info .more span').removeClass('hide');
        }else {
            $('.thumbnail').removeAttr('style');
            $('.detail_info .list li img').removeAttr('style');
            $('.detail_info .more span').addClass('hide');
        }

    }



});