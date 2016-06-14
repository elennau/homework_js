'use strict;'
$(function(){
	$('.jcarousel')
    .jcarousel({
      animation: 'slow',
      wrap: 'circular'
     })
    .jcarouselAutoscroll({
      interval: 5000,
      target: '+=1',
      autostart: true
    });
	$('.jcarousel-control-prev').jcarouselControl({
      target: '-=1'
	});

	$('.jcarousel-control-next').jcarouselControl({
      target: '+=1'
	});
	
	$('.grid').masonry({
		itemSelector: '.grid__item'
	});

			
	$('form').on('submit', function(e){
		e.preventDefault();
		e.stopPropagation();
		var word = $('.search__input').val() || '';
		searchImg(word);
	});

	
	function createTmpl(array){
	var Html = $('#masonry').html(); 
	var content = tmpl(Html, {data: array});
    $('#ideas__grid').html(content);
	};


	var keyP = '2737229-d77c828bc96e9964645663545';

	function searchImg(word){
		
	$.getJSON('http://pixabay.com/api/?key=' + keyP + '&q=' + word + '&image_type=photo&per_page=7',
	function(data){
		console.log(data);
	    createTmpl(data.hits);
		})
	};

	searchImg('holiday+weekend');

});

	

