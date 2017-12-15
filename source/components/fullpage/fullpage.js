require('./fullpage.scss');

$(document).ready(() => {
	$('.fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
	});
});