require('./_fullpage.scss');

$(document).ready(() => {
	$('.fullpage').fullpage({
		anchors: ['1', '2', '3', '4', '5', '6'],
		menu: '.navigation',
		onLeave(index, nextIndex) {
			$('.navigation').toggleClass('navigation--visible', nextIndex !== 1);
		},
		afterLoad(anchorLink, index) {
			setTimeout(() => {
				$(`.navigation li:nth-child(${index})`).addClass('active-point').siblings().removeClass('active-point');
				$(`.fullpage .section:nth-child(${index})`).addClass('animate');
			}, 0);
		},
	});
});