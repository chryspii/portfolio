var classicLayout = false;
var portfolioKeyword;
var $container, $blog_container;

(function ($) {
	NProgress.start();
	$(function() {
		setMasonry();
		fillBars();
	});

	var inAnimation, outAnimation;
	function initialize() {
		inAnimation = $('html').attr('data-inAnimation');
		outAnimation = $('html').attr('data-outAnimation');
	}
	
	function setup() {
		setupLigtbox();
	}

	function setMasonry() {
		var masonry = $('.portfolio-items, .latest-posts');
		if (masonry.length) {
			masonry.each(function(index, el) {

				refreshMasonry();
				$(el).imagesLoaded(function() {
					$(el).isotope({
					  layoutMode : $(el).data('layout') ? $(el).data('layout') : 'masonry'
					});
					refreshMasonry();
				});
				
				if (!$(el).data('isotope')) {
					var filters = $(el).siblings('.filters');
					if(filters.length) {
						filters.find('a').on("click", function() {
							var selector = $(this).attr('data-filter');
							$(el).isotope({ filter: selector });
							$(this).parent().addClass('current').siblings().removeClass('current');
							return false;
						});
					}
				}
			});
		}
	}			
	$(window).on('resize debouncedresize', function() {
    	refreshMasonry();
		setTimeout(function() { refreshMasonry(); },1000)
	});

	function refreshMasonry() {
		var masonry = $('.portfolio-items, .latest-posts');
		if (masonry.length) {
			masonry.each(function(index, el) {
				
				if ($(el).data('isotope')) {
					var itemW = 360;
					var containerW = $(el).width();
					var items = $(el).children('.hentry');
					var columns = Math.round(containerW/itemW);
				
					items.each(function(index, element) {
						var multiplier = $(this).hasClass('x2') && columns > 1 ? 2 : 1;
						var itemRealWidth = (Math.floor( containerW / columns ) * 100 / containerW) * multiplier ;
						$(this).css( 'width', itemRealWidth + '%' );
					});
				
					var columnWidth = Math.floor( containerW / columns );
					
					$(el).isotope( 'option', { masonry: { columnWidth: columnWidth } } );
					$(el).isotope('layout');
				}
			});
		}
	}	

	function fillBars() {
		$('.bar').each(function() {
			 var bar = $(this);
			 bar.find('.progress').css('width', bar.attr('data-percent') + '%' );
			});
	}	
})(jQuery);