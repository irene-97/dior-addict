require('./_home.scss');

$('.home__arrow').on('click', () => {
	$.fn.fullpage.moveSectionDown();
});