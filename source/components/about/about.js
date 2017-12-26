require('./_about.scss');

let $sliderArc = $('.about__slider__arc');
let $sliderItem = $('.about__slider__item');

$('.about__slider__button').on('click', (e) => {
	let $button = $(e.currentTarget);
	let index = $button.index();

	$button.addClass('about__slider__button--active').siblings().removeClass('about__slider__button--active');

	$sliderArc.attr('data-for-item', index + 1);
	$sliderItem.eq(index).addClass('about__slider__item--active').siblings().removeClass('about__slider__item--active');
});
