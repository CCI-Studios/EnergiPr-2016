
(function($) {

	$(function()
	{	
		init();	
	});

	function init()
	{	

		if($(window).width() > 1080)
		{
			$("#navigation").before($("#navigation").clone().addClass("animateIt"));
		    $(window).on("scroll", function () {
		        $("body").toggleClass("down", ($(window).scrollTop() > 100));
		    });
		}
	 	
		/*$(window).scroll(function()
		{	

			bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			$('.front .grey-section-1').css({'height': '' + (bodyScrollTop+(0.06*bodyScrollTop)) + 'px'}); 

		    if(document.body.scrollTop>115)
		    {
		    	$('#navigation').addClass('fixed');
		    }
		    else
		    {	
		    	$('#navigation').removeClass('fixed');
		    }
			
		});*/
	}

}(jQuery));
