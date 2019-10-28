
$(document).ready(function() {
  $('.menu').click(function() {
    $('#nav').slideToggle(500);
  });

  $(window).resize(function() {
	   if (  $(window).width() > 700 ) {
		$('#nav').removeAttr('style');
	 }
	});
});
