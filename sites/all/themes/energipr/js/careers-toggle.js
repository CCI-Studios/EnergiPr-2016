(function($){
	$(function(){
			$('.view-careers .info-button').click(function(e){
				e.preventDefault();
				var $row = $(this).closest('.views-row');
				$row.find('.content').slideToggle();
				$row.toggleClass('open');
			});
	});
})(jQuery);
