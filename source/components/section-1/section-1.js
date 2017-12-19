require('./_section-1.scss');

$('.section--1 .section__arrow').on('click', () => {
	$.fn.fullpage.moveSectionDown();
});