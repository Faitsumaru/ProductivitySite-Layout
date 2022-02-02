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

  //reading block slider:
  $('.reading__slider').slick({
    dots: true,
    infinite: true,
    prevArrow: '<button type="button" class="slider-arrow-prev"><img src="images/reading-slider-prev.svg"></button>',
    nextArrow: '<button type="button" class="slider-arrow-next"><img src="images/reading-slider-next.svg"></button>',
    speed: 300,
    slidesToShow: 1
  });

  //reading block popup:
  $('.img-popup-item').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

  //quotes block slider:
  $('.quotes__slider').slick({
    dots: true,
    infinite: true,
    speed: 400,
    arrows: false,
    autoplay: true,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  });

  //FAQ block:
  var $speed = 200;
  var $class = 'opened';
  var $class_openBlock = '.faq-answer';

  $(document).ready(function() {
    $('.faq-question').on('click', function() {
      $ul = $(this).closest('ul');
      $answer = $(this).closest('li').find($class_openBlock);

      if (!$(this).closest('li').hasClass($class)) {

        $ul.find('li').each(function() {
          if ($(this).hasClass($class))
            $(this).removeClass($class).find($class_openBlock).slideUp($speed);
        });
      }

      $answer
        .slideToggle($speed)
        .closest('li')
        .toggleClass($class)
        .find($class_openBlock).css("display", "flex");
    });
  });

  //burger for header block:
  $('.burger-btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active'); //list show
    $('.burger-btn').toggleClass('burger-btn--active'); //burger-btn animation
  });

});