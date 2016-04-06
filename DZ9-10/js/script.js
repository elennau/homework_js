// Karousel
$(function(){
	$('.jcarousel').jCarouselLite({
	btnNext: '.next',
	btnPrev: '.prev',
	scroll: 1,
	});
});

//Select
$(function() {
		$(function() {
			$('select').styler({
				selectSearch: true
			});
		});
});

//Checkbox
$(function(){
$('.niceCheck').mousedown(
function() {
     changeCheck($(this));
});

$('.niceCheck').each(
function() {
     changeCheckStart($(this));
});
});
 
function changeCheck(el)
{
     var el = el,
          input = el.find('input').eq(0);
     if(!input.attr('checked')) {
        el.css('background-position','0 -17px');    
        input.attr('checked', true)
    } else {
        el.css('background-position','0 0');    
        input.attr('checked', false)
    }
     return true;
}
 
function changeCheckStart(el)
{
var el = el,
        input = el.find('input').eq(0);
      if(input.attr('checked')) {
        el.css('background-position','0 -17px');    
        }
     return true;
}

//Drop Down Menu
$(function(){
$('.dropdown').hover(
function(){
$(this).children('ul').stop(true, false, true).slideToggle(200);
}
)
});
