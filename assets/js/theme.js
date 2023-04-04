jQuery(function($){
	$('.qa-opener').off('click').on('click', function(){
		if(!$(this).hasClass('opened')) {
			$(this).parent().next('.answer').slideDown();
			$(this).addClass('opened');
		} else {
			$(this).parent().next('.answer').slideUp();
			$(this).removeClass('opened');
		}
	});
});