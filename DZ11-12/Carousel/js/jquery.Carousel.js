'use strict'
$(function(){
        $.fn.Carousel = function(options) {

var settings = {
        nambImg: 1,  
        speed: 1000, 
       	margin: 1,	
		btnNext: null, 
        btnPrev: null, 
		};

return this.each(function() {
        if (options) {
        $.extend(settings, options); 
        }
                
        var $this = $(this);				
        var $carousel = $this.children('ul');
		var itemWidth = $carousel.children().outerWidth()+settings.margin; 
			
		$this.css({
        'position': 'relative', 
        'overflow': 'hidden', 
        'width': settings.nambImg * itemWidth + 'px' ,
		});
	
	    $carousel.children('li').css({
        'margin-left': settings.margin/2+ 'px',
		'margin-right': settings.margin/2+ 'px', 
		});				   

	   $carousel.css({
        'position': 'relative',
        'width': 9999 + 'px',
        'top': 0,
		'left': 0
        });


$(function(){
	$(settings.btnNext).click(function(){
		$('ul li').eq(0).clone().appendTo('ul');
		$('ul').css({'left':'0px'}); 
		$('ul').animate({left: '-' + itemWidth + 'px'}, settings.speed); 
		$('ul li').eq(0).remove(); 
	});
	
	$(settings.btnPrev).click(function(){
		$('ul li').eq(-1).clone().prependTo('ul'); 
		$('ul').css({left: '-' + itemWidth + 'px'}); 
		$('ul').animate({left: '0px'}, settings.speed); 
		$('ul li').eq(-1).remove(); 
	});
});

});
 };     
})(jQuery);