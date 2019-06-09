$(function() {	

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

	$('.carousel-services-content').equalHeights();
});