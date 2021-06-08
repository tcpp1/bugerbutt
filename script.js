$(function(){

$('.top-wrap-logo').fadeIn(4000);

$('#topScroll').click(function(){
  $('html, body').animate({
    'scrollTop': 0
    }, 1500);
});


$('#menu').click(function(){
	const menuPoint = $('#menuPoint').offset().top - 300;
	$('html, body').animate({
		scrollTop:menuPoint
	}, 1500);
});


$('#location').click(function(){
	const mapPoint = $('#mapPoint').offset().top;
	$('html, body').animate({
		scrollTop:mapPoint
	}, 1500);
});


$('.map').hover(
	function(){
		$('.map-point').fadeIn(500);
	},
	function(){
		$('.map-point').fadeOut(500);
});


$(window).scroll(function(){
	$('.slideInAnime').each(function(){
		var imgPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > imgPos - windowHeight + windowHeight/2){
			$(this).addClass('slideIn');
			$(this).removeClass('slideOut');
		} else {
			$(this).removeClass('slideIn');
			$(this).addClass('slideOut');
		}
	});
});


$(window).scroll(function(){
	$('.BounceInAnime').each(function(){
		var imgPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > imgPos - windowHeight + windowHeight/10){
			$(this).addClass('animate__bounceInDown');
			$(this).removeClass('hide');
		} else if (scroll < imgPos - windowHeight){
			$(this).removeClass('animate__bounceInDown');
			$(this).addClass('hide');
		}
	});
});

$(window).scroll(function(){
	$('.BounceInAnime2').each(function(){
		var imgPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > imgPos - windowHeight + windowHeight/1.7){
			$(this).addClass('animate__bounceInDown');
			$(this).removeClass('hide');
		} else if (scroll < imgPos - windowHeight){
			$(this).removeClass('animate__bounceInDown');
			$(this).addClass('hide');
		}
	});
});


});
