$(function() {
	var headHtml = $("#head").html(); 
	var listHtml = $("#list").html(); 
	var footHtml = $("#footer").html(); 
	var myHead = [
	'Наумец Елена Викторовна',
	'img/photo.jpg',
	'Главный специалист отдела IT'
	];
	
	var myList = [
	{item: 'мне надоела моя скучная работа'},
	{item: 'у меня мизерная зарплата'},
	{item: 'я хочу делать что-то новое и интересное'}
	];
		
	var myFoot = [
	'+380958031107',
	'https://www.facebook.com/elennau7/',
	'Facebook',
	'Меньше слов, а больше дела!'
	];
	
	var content1 = tmpl(headHtml, {data: myHead});
	var content2 = tmpl(listHtml, {data1: myList});
	var content3 = tmpl(footHtml, {data2: myFoot});
	
	$('body').append(content1);
	$('.box1').append(content2);
	$('.box1').append(content3);
		
});