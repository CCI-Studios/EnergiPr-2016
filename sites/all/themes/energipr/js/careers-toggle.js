(function($){
	$(function(){
			$('.view-careers .info-button').click(function(e){
				e.preventDefault();
				var $row = $(this).closest('.views-row');
				$row.find('.views-field-nothing').slideToggle();
				$row.find('.views-field-nothing-1').toggleClass('open');
			});
	});
})(jQuery);
