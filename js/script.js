//=require ../node_modules/jquery/dist/jquery.min.js
//=require ../node_modules/bootstrap/dist/js/bootstrap.min.js
//=require ../node_modules/jquery-parallax.js/parallax.min.js
//=require ../node_modules/slick-carousel/slick/slick.min.js

//=require jquery.validate.min.js
//=require isotope.pkgd.min.js
$('#main-screen__slider').slick({
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  adaptiveHeight: true,
    //autoplay: true,
    autoplaySpeed: 4000,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        autoplaySpeed: 3000,
        fade: true,
      }
    }]
  });


$(document).ready(function() {
	$('.parallax-window').parallax({imageSrc: '../img/para.jpg'});

});
$(window).on('load', function(){

});


$(document).ready(function(){
  $('.services-section__link').on('click', function(evt) {
    evt.preventDefault();

    $('.services-section__link').removeClass('active');
    $(this).addClass('active');

  });
  var $izotop = $('.photo').isotope({
    itemSelector: '.photo__item',
    percentPositon: true,
    masonry: {
      columnWidth: '.photo__sizer'
    }
  });
  $('.gallery-section__link').on('click',  function(evt) {
    evt.preventDefault();

    var filt = $(this).data('filter');
    $izotop.isotope({filter: filt });

    $(".gallery-section__link").removeClass('activ');
    $(this).addClass('activ');
  })

  //Slow scroll from menu-item to current section



});

  $(".fairmenu__link").on("click", function(event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 700);
  });

    if ($('#button-up').length) {
    let scrollTrigger = 300, // px
      backToTop = function() {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#button-up').addClass('is-visible');
        } else {
          $('#button-up').removeClass('is-visible');
        }
      };
    backToTop();
    $(window).on('scroll', function() {
      backToTop();
    });
    $('#button-up').on('click', function(e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 1000);
    });
  }