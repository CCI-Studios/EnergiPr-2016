(function($){

$(function(){

		$('.view-team .views-row').each(function(index){
			var textValue = $(this).find('a').attr("href");  
			textValue = textValue.replace(/,/g, "");     
	        textValue = textValue.split(' ').join('_');
	        $(this).find('a').attr("href",textValue);    
		});

		$('.view-team-bio .views-row').each(function(index){
			var textValue = $(this).find('.pos_link').attr("id");    
	        textValue = textValue.split(' ').join('_');
	        $(this).find('.pos_link').attr("id",textValue);    
		});
			

		$('.view-team .views-row a').click(function(e){

			var textValue = $(this).attr("href");    
			$(this).parents('#block-views-team-block').hide();
			$('.view-team-bio').fadeIn();		
			$('.view-team-bio').find(textValue).parents('.views-row').fadeIn();

			if($(window).width()<767)
			{
			  var target = textValue;
	          var $target = $(target);
	          $('html, body').stop().animate({
	              'scrollTop': $target.offset().top-100
	          }, 400, 'swing', function () {
	              window.location.hash = target;
	          });
			}
			
			e.preventDefault();

		});

		$('.view-team-bio .close').click(function(e){

			var textValue = $(this).parents('.views-row a').attr("href")  
			$('#block-views-team-block').fadeIn();
			$(this).parents('.view-team-bio').hide();
			$(this).parents('.view-team-bio').find('.views-row').hide();
			e.preventDefault();
		});
	});

})(jQuery);
