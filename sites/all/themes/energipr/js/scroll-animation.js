(function($) {
	$(function()
	{	
		init();	
	});

	function init()
	{	
		if($(window).width() > 1080)
		{
			$("#navigation").after($("#navigation").clone().addClass("animateIt"));
	    $(window).on("scroll", function () {
	      $("body").toggleClass("down", ($(window).scrollTop() > 100));
	    });
		}
	}

}(jQuery));
