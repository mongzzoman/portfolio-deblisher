$(function(){
    // popup-btn 에 있는 a를 클릭했을 때 할 일
    $('.popup-btn a').click(function(){
        $('.popup-btn a').toggleClass('active')
        // popup-btn에 있는 a에 active 클래스가 토글되도록
        // popup-btn에 있는 i 클래스를 업/다운 되도록
        $('.popup-btn i').toggleClass('fa-circle-up fa-circle-down') 
    });
    $('.popup-btn').click(function(){
        // popup-btn을 클릭했을 때 할 일
        //popup-text가 나왔다 들어갔다 번갈아가도록
        $('.popup-text').slideToggle();
    });
    return false;  // a 동작을 막는 것 
});