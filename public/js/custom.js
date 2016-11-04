$(document).ready(function() {
    $(".imgLiquidFill").imgLiquid();

	$("#owl-votacao1").owlCarousel({
		autoPlay: 3000, //Set AutoPlay to 3 seconds

		items : 2,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		pagination: true,
	});
	$("#owl-votacao2").owlCarousel({
		autoPlay: 3000, //Set AutoPlay to 3 seconds

		items : 2,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		pagination: true,
	});
	$("#owl-votacao3").owlCarousel({
		autoPlay: 3000, //Set AutoPlay to 3 seconds

		items : 2,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		pagination: true,
	});

});

function scrollCustom(id) {
	$('html, body').animate({scrollTop:$('#' + id).offset().top}, 'slow');
}