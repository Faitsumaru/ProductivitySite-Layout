$(function () {

  //header_slider:
  $('.header__slider').slick({
    dots: true,
    infinite: true,
    speed: 400,
    fade: true,
    cssEase: 'linear',
    prevArrow: false,
    nextArrow: '<button type="button" class="slider-next"><svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.23077 4.17675C10.2564 4.76486 10.2564 6.23514 9.23077 6.82325L2.30769 10.793C1.28205 11.3811 0 10.646 0 9.46976V1.53024C0 0.354015 1.28205 -0.381125 2.30769 0.206988L9.23077 4.17675Z" fill="#5E81FF"/></svg></button>',
    autoplay: true
  });

  
//   var sl = $('.header__slider');
//   var btn = $('.header__top-btn');
//   if (btn.on('click')) {
//       sl.slick({autoplay: true, speed: 330, dots: false});
// }


});