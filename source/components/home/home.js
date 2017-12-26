require('./_home.scss');

$('.home .section__arrow').on('click', () => {
	$.fn.fullpage.moveSectionDown();
});