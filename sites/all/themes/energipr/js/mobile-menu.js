(function($){
	
	$(function(){

		$('#mobile-button a').click(function(e){
			e.preventDefault();
			$('#block-system-main-menu').slideToggle();
		});

	});

})(jQuery)