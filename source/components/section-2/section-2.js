require('./_section-2.scss');

$('.section--2 .section__col-1 .section__slider').slick({
	fade: true,
	appendArrows: ".section--2 .section__col-1",
});

$('.section--2 .section__preview--1').on('click', () => {
	$('.section--2 .section__col-1 .section__slider').slick('slickGoTo', 0);
});

$('.section--2 .section__preview--2').on('click', () => {
	$('.section--2 .section__col-1 .section__slider').slick('slickGoTo', 1);
});

$('.section--2 .section__preview--3').on('click', () => {
	$('.section--2 .section__col-1 .section__slider').slick('slickGoTo', 2);
});

$('.section--2 .section__preview--4').on('click', () => {
	$('.section--2 .section__col-1 .section__slider').slick('slickGoTo', 3);
});