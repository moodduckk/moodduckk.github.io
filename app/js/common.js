$(function() {	

	$(window).on('load', function() {
		$('.preloader').delay(500).fadeOut('slow')
	})

	$('#my-menu').mmenu({
		extensions: ['widescreen', 'border-none', 'theme-dark', 'fx-menu-slide', 'fx-panels-slide-up', 'pagedim-black', 'position-right'],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="S&Mitler">'
		}
	});

	var menu = new Mmenu('#my-menu');
  var api = menu.API;
	api.bind( 'open:finish', function( )  {
		$('.hamburger').addClass('is-active');
	});
	api.bind( 'close:finish', function( )  {
		$('.hamburger').removeClass('is-active');
	});
	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselService();
		}, 100);
	});
	$('.carousel-services').owlCarousel({
		loop: true,
		dots: false,
		smartSpeed: 700,
		nav: true,
		navText: ['<i class="far fa-angle-double-left"></i>', '<i class="far fa-angle-double-right"></i>'],
		navType: 'div',
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			800: {
				items: 2,
			},
			1100: {
				items: 3,
			},
		},
	});

	$('.reviews').owlCarousel({
		loop: true,
		dots: true,
		smartSpeed: 700,
		nav: false,
		items: 1,
		autoHeight: true,
	});

	$('.partners').owlCarousel({
		loop: true,
		dots: false,
		smartSpeed: 700,
		nav: true,
		navText: ['<i class="far fa-angle-left"></i>', '<i class="far fa-angle-right"></i>'],
		navType: 'div',
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			}
		},
	});

	$('select').selectize({
		create: true,
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()){
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow' , 'swing');
	})

	function carouselService() {
		$('.carousel-services-item').each(function() {
			var ths	 = $(this),
					thsh = ths.find('.carousel-services-content').outerHeight()
					ths.find('.carousel-services-image').css('min-height', thsh);
		});
	}carouselService()

	$('.carousel-services-composition .h3').each(function() {
		var ths = $(this)
		ths.html(ths.html().replace(/(\S+\s*$)/, '<span>$1</span>'));
	});
	$('section .h2').each(function() {
		var ths = $(this)
		ths.html(ths.html().replace(/(\S+)/, '<span>$1</span>'));
	});

	$('form.callback').on('submit', function() {
    "use strict";
    var th = $(this);
    $.ajax({
      url: 'send.php',
      type: 'POST',
      contentType: false,
      processData: false,
      data: new FormData(this),
      success: function(msg) {
        console.log(msg);
        if (msg == 'ok') {
          $(th).find('.success').addClass('active').hide().fadeIn();
          setTimeout(function() {
            th.trigger("reset");
            $(th).find('.success').removeClass('active').fadeOut();
          }, 3000);
        }
      }
    });
  });

	$('.carousel-services-content').equalHeights();
});