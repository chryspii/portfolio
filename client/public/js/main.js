var classicLayout = false;
var portfolioKeyword;
var $container, $blog_container;

(function ($) {
	NProgress.start();
	$(function() {
		setMasonry();
		fillBars();
		typewritter();
	});
	
	window.onload = function() {
		NProgress.done();
	};

	var inAnimation, outAnimation;
	function initialize() {
		inAnimation = $('html').attr('data-inAnimation');
		outAnimation = $('html').attr('data-outAnimation');
	}

	function typewritter() {
		class Typewritter {
			constructor({ text, time = 300 }) {
				this.texts = text.split(",");
				this.sT = document.querySelector(".secondary__title");
				this.realTime = time;
				this.wait = time + 1000;
				this.changeTime = 0;
				this.length = this.texts.length;
				this.countChar = 0;
				this.current = 0;
				this.flag = false;

				this.cutText();
			}

			cutText() {
				const text = this.texts[this.current];
				const tLength = this.texts[this.current].length;

				if (this.countChar === tLength) this.changeTime = this.wait;
				if (this.flag && this.countChar === tLength - 1)
				this.changeTime = this.realTime / 2;
				if (this.countChar === 0) this.changeTime = this.realTime;

				this.drawText(text.substr(0, this.countChar));

				if (!this.flag) {
					this.countChar++;
					if (this.countChar === tLength) {
						this.flag = true;
					}
				} else if (this.flag) {
					this.countChar--;
					if (this.countChar === 0) {
						this.flag = false;
						this.current = ++this.current % this.length;
					}
				}

				setTimeout(() => this.cutText(), this.changeTime);
			}

			drawText(chars) {
				this.sT.innerHTML = chars;
			}
		}

		new Typewritter({
			text: "a full-stack developer.,a programmer.,a fast-learner.",
			time: 100 // Set speed of writing
		});
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