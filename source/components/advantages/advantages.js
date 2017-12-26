require('./_advantages.scss');

$('.advantages__image-slider').slick({
	fade: true,
	arrows: false,
	asNavFor: '.advantages__description-slider',
});

$('.advantages__description-slider').slick({
	speed: 500,
	asNavFor: '.advantages__image-slider',
});