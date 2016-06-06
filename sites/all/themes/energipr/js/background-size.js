(function($){

	$(function(){
	 	var max1 = ('.view-front-blog .views-row').length;
     	for(var i=1; i<=max1; i++)
        {
			$('.view-front-blog .views-row-'+i+' .views-field-field-header-image').replaceImgtag();

 	    }

 	    var block = '.view-practice-areas';
 	    var max1 = $(block+' .views-row').length;
     	for(var i=1; i<=max1; i++)
        {
			$(block+' .views-row-'+i+' .views-field-field-image-practice').replaceImgtag();
 	    }

        var img1 = $('.field-name-field-header-image').find('img');
        var imgSrc = img1.attr('src');
        $('.node-type-blog #header').css('background-image', 'url(' + imgSrc + ')');

	});

	 $.fn.replaceImgtag = function( action ) {
        
        var img = $(this).find('img');
        var imgSrc = img.attr('src');
        var div = $(this).find('div');
        console.log(img.attr('src'));
        img.remove();
        div.html('<div class="backbg"></div>');
        $(this).find('.backbg').css('background-image', 'url(' + imgSrc + ')');
    };

})(jQuery);
