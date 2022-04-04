$(document).ready(function(){

    $('.fa-bars').click(function (){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
      });

      $(window).on('load scroll', function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 10){
            $('.top-nav').css({'background':'#FFC727','box-shadow':'0 .2rem 5.rem rgba(0,0,0,.4)','z-index': '100'});
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

/* Scroll*/
$(document).on('click', 'a[href^="#"]', function(e) {
  // target element id
  var id = $(this).attr('href');
  // target element
  var $id = $(id);
  if ($id.length === 0) {
      return;
  }
  // prevent standard hash navigation (avoid blinking in IE)
  e.preventDefault();
  // top position relative to the document
  var pos = $id.offset().top;
  // animated top scrolling
  $('body, html').animate({scrollTop: pos}, 1000);
});