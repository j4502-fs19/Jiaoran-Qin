
$(document).ready(function() {
  $('.header .menu-trigger').click(function() {
    $('#nav').slideToggle(500);
  });

  $(window).resize(function() {
	   if (  $(window).width() > 700 ) {
		$('#nav').removeAttr('style');
	 }
	});
});
