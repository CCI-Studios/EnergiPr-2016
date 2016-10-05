(function($){

	$(function(){


			if(window.location.href.indexOf('fr') > 0)
			{
				$('.view-front-blog .views-row').each(function(){
					var link = $(this).find('.views-field-nothing a').attr('href');
					link = link.substring(3, link.length);
					$(this).find('.views-field-nothing a').attr('href',link);
				});
			}

			$('.view-careers .info-button').click(function(){

				$(this).parents('.views-row').find('.views-field-nothing').slideToggle();
				$('.views-field-nothing').not($(this).parents('.views-row').find('.views-field-nothing')).slideUp();
				$('.views-field-nothing-1').not($(this).parents('.views-row').find('.views-field-nothing-1')).removeClass('open');
				$(this).parents('.views-row').find('.views-field-nothing-1').toggleClass('open');
			});
	});

})(jQuery);
