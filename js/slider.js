$(document).ready(function(){
	$('.home-frame2__slider-container').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: false
	});
	$('.slick-prev').html('<span class="ion-ios-arrow-left"></span>');
	$('.slick-next').html('<span class="ion-ios-arrow-right"></span>');
});
   
