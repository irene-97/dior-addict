require('./_section-3.scss');

let $sliderArc = $('.section__slider__arc');
let $sliderItem = $('.section__slider__item');

$('.section__slider__button').on('click', (e) => {
	let $button = $(e.currentTarget);
	let index = $button.index();

	$button.addClass('section__slider__button--active').siblings().removeClass('section__slider__button--active');

	$sliderArc.attr('data-for-item', index + 1);
	$sliderItem.eq(index).addClass('section__slider__item--active').siblings().removeClass('section__slider__item--active');
});
