
function preloader(){
	if($('.preloader').length){
		$('.preloader').delay(100).fadeOut(500, function(){
		});
	}
}

$(window).on('load', function(){
	preloader()
})(window.jQuery);
