$(document).ready(function(){
    baners = $('.baner-slider');
    baners.on('init',function(){
        $(this).append($(this).find('.slick-prev'));
    });
    baners.slick({
        arrows: true,
        dots:false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 6500
    });
    $('.action-slider').slick({
        arrows: true,
        dots:false,
        infinite: true,
        slidesToShow: 3,
        appendArrows: $('.action-content'),
        responsive: [{
            breakpoint: 998,
            settings:{
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings:{
                slidesToShow: 1,
                arrows: false
            }
        }]
    });
    $('.vendors-slider').slick({
        arrows: true,
        dots:false,
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        responsive: [{
            breakpoint: 1200,
            settings:{
                slidesToShow: 3
            }
        }, {
            breakpoint: 998,
            settings:{
                slidesToShow: 2
            }
        },{
            breakpoint: 768,
            settings:{
                slidesToShow: 1,
                arrows: false
            }
        }]
    });
    $('.news-slider').slick({
        arrows: true,
        dots:false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 8000,
        appendArrows: $('.news-content')
    });
});
//поиск в шапке
$('a').on('click',function(){
    return false;
});
$('.search-drop').on('click',function(e){
    if (!$(e.target).hasClass('inSearch')) {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            $(this).addClass('active');
        }
    }
});
$(document).on('keydown',function(e){
    if (e.keyCode == 27) {
        close();
    }
});
$(document).on('click',function(e){
    if($('.search-drop').hasClass('active') && !$(e.target).hasClass('search') && !$(e.target).parents('.search').hasClass('search'))
        close();
});
function close(){
    var search = $('.search-drop');
    search.removeClass('active');
    search.find('input').val('');
}
//шапка мобилка
nav_wraper = $('.nav-wraper');
$('.burger').on('click',function(){
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        nav_wraper.animate({height:0},300);
    } else {
        $(this).addClass('active');
        nav_wraper.animate({height:nav_wraper.find('ul').css('height')},300);
    }
});
