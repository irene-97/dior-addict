require('./_assortment.scss');

$('.assortment__slider').slick({
	fade: true,
	appendArrows: ".assortment__col-1",
});

$('.assortment__preview--1').on('click', () => {
	$('.assortment__slider').slick('slickGoTo', 0);
});

$('.assortment__preview--2').on('click', () => {
	$('.assortment__slider').slick('slickGoTo', 1);
});

$('.assortment__preview--3').on('click', () => {
	$('.assortment__slider').slick('slickGoTo', 2);
});

$('.assortment__preview--4').on('click', () => {
	$('.assortment__slider').slick('slickGoTo', 3);
});