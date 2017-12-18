require('./section-2.scss');

$('.section__slider').slick({
	fade: true,
	appendArrows: ".section__col-1",
});

$('.section__preview--1').on('click', () => {
	$('.section__slider').slick('slickGoTo', 0);
});

$('.section__preview--2').on('click', () => {
	$('.section__slider').slick('slickGoTo', 1);
});

$('.section__preview--3').on('click', () => {
	$('.section__slider').slick('slickGoTo', 2);
});

$('.section__preview--4').on('click', () => {
	$('.section__slider').slick('slickGoTo', 3);
});