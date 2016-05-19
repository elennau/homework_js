'use strict'
$(function() {
	let tester = [
	{
	quest: "Какой оператор из этих - выполняет не только математические операции?",
	answ: [
	{text: "+", flag:true},
	{text: "-", flag:false},
	{text: "*", flag:false},
	]
	},
	{
	quest: "Какое событие не вызывается кликом мыши ?",
	answ: [
	{text: "onmousedown", flag:false},
	{text: "onkeydown", flag:true},
	{text: "onfocus", flag:false},
	]
	},
	{
	quest: "Чему равна переменная name ? let name = 'пупкин'.replace('п','д')",
	answ: [
	{text: "пупкин", flag:false},
	{text: "дудкин", flag:false},
	{text: "дупкин", flag:true},
	]
	}
	];
		
// Write
	localStorage["test_1"] = JSON.stringify(tester);

// Read
	let myTester = JSON.parse(localStorage["test_1"]);

	let Html = $("#test").html(); 
	
	let content = tmpl(Html, { 
	data: myTester  
	});

	$('body').append(content);
	
	$('[type=checkbox]').on('click', function(){
		let group = $('input:checkbox[name="'+$(this).attr("name")+'"]');
		$(group).prop('checked', false);
		$(this).prop('checked', true);
	});
	
	
	$('[type=button]').on('click', function(){
		let $chBox = $('input:checked');
		let arr = [];
		let i = 0;
		let correct = 0, incorrect = 0, rezult = '';
		
		while(i<$chBox.length) arr.push(i++);
		console.log('arr=', arr);
		for (let value of arr) {
			let str = $chBox.eq(value).attr('id');
			console.log('str = ', str);
			let id = str.split('_');
			let i = id[1];
			let j = id[2];
		(myTester[i].answ[j].flag) ? correct++ : incorrect++;
		}

		(correct == myTester.length) ? rezult = 'Вы успешно прошли тест!' :	rezult = 'Тест не пройден!' + ' Неправильных ответов - ' + incorrect; 
		
		$('#overlay').fadeIn(400,
		 	function(){ 
				$('#modal_form') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200); 
				$('#modal_text') 
				.html(rezult);
		});
		
		$('#modal_close, #overlay').click( function(){ 
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200, 
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400); 
					$('[type=checkbox]').prop('checked', false);
					let correct = 0, incorrect = 0, rezult = '';
				}
			);
		});
	})	
});

