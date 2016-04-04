$(document).ready(function(){
    $(".form").hover(function(){
        $(this).next('span.help').toggleClass("show");
    });
});

$(document).ready(function() {
	$('ul.tabs__nav').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});

});

