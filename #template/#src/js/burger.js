$(document).ready(function() {
	$('.icon-menu').click(function(event) {
		$('.menu__icon, .menu__body').toggleClass('_active');
		$('body').toggleClass('_lock');
	});
});

