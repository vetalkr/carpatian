$(function () {
    $('.menu__item_active .menu__content').slideDown();

    $('.menu .menu__title').click(function () {
        $('.menu .menu__content').not($(this).next()).slideUp();
        $('.menu__item').removeClass('menu__item_active');
        $(this).next().slideToggle(300).parent().addClass('menu__item_active');  //slideDown
    })
})


$(document).ready(function(){
    $('.multiple-items').slick(
        {
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
        }
    );
  });

(function($){
     $(window).on("load",function(){
         $(".about").mCustomScrollbar({
             axis:"x"
         });
     });
 })(jQuery);


$('.slider-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.slider-nav'
 });
 $('.slider-nav').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.slider-for',
   dots: true,
   centerMode: true,
   focusOnSelect: true
 });