require('./_section-5.scss');

$('.section--5 .section__image-slider').slick({
	fade: true,
	arrows: false,
	asNavFor: '.section--5 .section__description-slider',
});

$('.section--5 .section__description-slider').slick({
	speed: 500,
	asNavFor: '.section--5 .section__image-slider',
});