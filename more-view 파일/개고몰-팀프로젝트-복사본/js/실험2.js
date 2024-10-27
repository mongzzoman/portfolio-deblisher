$(function(){
    $('.popup-btn a').click(function(){
        $('.popup-btn a').toggleClass('active')
    })
    $('.popup-btn').click(function(){
        $('.popup-btn').slideToggle()
    })
})