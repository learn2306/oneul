$(function() {
	$('header').on('mouseover', function() {
		$(this).addClass('on')
		$('.bg_gnb').css({
			display: 'block',
		}, 300)
		$('.sub').css({
			display: 'block'
		})
	})
	$('.bg_gnb').on('mouseleave', function() {
		$('header').removeClass('on touch');
		$('.gnb .sub').css({
			display: 'none'
		});
		$('.bg_gnb').css({
			display: 'none',
		}, 100)
	});

	$(window).on("scroll", function() {
		let headerHeight = $('header').height();
		let i = $(this).scrollTop();
		//console.log(i, headerHeight);
		let wid=$(window).width();

		if (headerHeight < i) {
			$('header').addClass('touch');
			if (wid <= 600) {
				$('header').addClass('mobile')
			}
		} else if (headerHeight > i) {
			$('header').removeClass('touch');
			if (wid <= 600) {
				$('header').removeClass('mobile')
			}
		}
	});

	/* let wid=$(window).width();
	
	if (wid <= 600) {
		console.log(wid);
		$('header').removeClass('on touch');
		$('header').addClass('mobile');
	} */

	$('.menu_right_mob').on('click', function() {
		$('.gnb').slideToggle(500); 
		$('.bg_gnb').hide()
		/* $('.bg_gnb').css({
			display: 'none'
		}); 
		$('.bg_gnb').animate({
			opacity: 0,
			height: 0
		}) */
	}) 
})