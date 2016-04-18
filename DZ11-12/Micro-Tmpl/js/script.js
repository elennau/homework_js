'use strict';
$(function() {
	var headHtml = $("#head").html(); 
	var listHtml = $("#list").html(); 
	var footHtml = $("#footer").html(); 
	
	var myHead = {
	name: 'Наумец Елена Викторовна',
	img: 'img/photo.jpg',
	work: 'Главный специалист отдела IT'
	};

	var myList = [
	{item: 'мне надоела моя скучная работа'},
	{item: 'у меня мизерная зарплата'},
	{item: 'я хочу делать что-то новое и интересное'}
	];

	var myFoot = {
	tel: '+380958031107',
	href: 'https://www.facebook.com/elennau7/',
	prof: 'Facebook',
	feedback: 'Меньше слов, а больше дела!'
	};
		
	var content1 = tmpl(headHtml, { 
	dataHead: myHead  
	});
	var content2 = tmpl(listHtml, { 
	dataList: myList  
	});
	var content3 = tmpl(footHtml, { 
	dataFoot: myFoot  
	});
	
	$('body').append(content1);
	$('.box1').append(content2);
	$('.box1').append(content3);
		
});