$(document).ready(function(){

    $('.fa-bars').click(function (){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
      });

      $(window).on('load scroll', function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 30){
            $('.top-nav').css({'background':'#FFC727','box-shadow':'0 .2rem 5.rem rgba(0,0,0,.4)'});
        } else {
            $('.top-nav').css({'background':'none','box-shadow':'none'});
        }
      });

      $('.accordion-heading').click(function(){
        $('.accordion .accordion-body').slideUp();
        $(this).next('.accordion-body').slideDown();
        $('.accordion .accordion-heading span').text('+');
        $(this).children('span').text('-');
      });


});