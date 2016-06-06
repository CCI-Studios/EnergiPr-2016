(function($){

	$(function(){


		 	$('.view-services .views-field-title').click(function(){

		 		$('.views-field-body').not($(this).next('.views-field-body')).hide();
		 		$(this).next('.views-field-body').show();

		 	});

		 	$('.view-careers .views-field-nothing-1').click(function(e){

		 		e.preventDefault();
		 		$('.views-field-nothing').not($(this).parents('.views-row').find('.views-field-nothing')).slideUp();
		 		$(this).parents('.views-row').find('.views-field-nothing').slideToggle();
		 		$('.view-careers .views-field-nothing-1').not($(this)).removeClass('open');
		 		$(this).toggleClass('open');

		 	});

		 	var count = $('.view-services .views-row').length;
		 	var divs = $(".view-services .views-row");

		 	for(var i = 0; i < count; i+=3) {
			  divs.slice(i, i+3).wrapAll("<div class='block-group-services'></div>");
			}

			if(window.location.href.indexOf('fr') > 0)
			{
				$('.view-front-blog .views-row').each(function(){
					var link = $(this).find('.views-field-nothing a').attr('href');
					link = link.substring(3, link.length);
					$(this).find('.views-field-nothing a').attr('href',link);
				});
			}
	});

})(jQuery);
