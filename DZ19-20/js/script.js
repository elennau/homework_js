'use strict;'
$(function(){
	
	$('.main__accordion h4:first').addClass('active');
	$('.main__accordion p:not(:first)').hide();

	$('.main__accordion h4').click(function(){
		$(this).next('p').slideToggle('slow')
		.siblings('p:visible').slideUp('slow');
		$(this).toggleClass('active');
		$(this).siblings('h4').removeClass('active');
	});

});

$(window).load(function() {
        $('#slider').nivoSlider({directionNavHide:true});
    });
	
$.getJSON("https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json", function(data){
	console.log(data);
	var data1 = _.sortBy(_.uniq(_.flatten(_.map(data,'skills'))));
	console.log('Skills=', data1);
				
	var data2 = _.map(_.sortBy(data, function (data){return data.friends.length;}), 'name');
	console.log('Name=', data2);

	var data3 =  _.uniq(_.map(_.flatten(_.map(data,'friends')),'name'));
	console.log('FriendsName=', data3);
});
