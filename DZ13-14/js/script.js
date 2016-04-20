"use strict;"
$(function() {
	var tester = [
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
	quest: "Чему равна переменная name ? var name = 'пупкин'.replace('п','д')",
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
	var myTester = JSON.parse(localStorage["test_1"]);

	var Html = $("#test").html(); 
	
	var content = tmpl(Html, { 
	data: myTester  
	});

	$('body').append(content);
	
	$('[type=checkbox]').on('click', function(){
		var group = $('input:checkbox[name="'+$(this).attr("name")+'"]');
		$(group).prop('checked', false);
		$(this).prop('checked', true);
	});
	
	
	$('[type=button]').on('click', function(){
		var $chBox = $('input:checked');
		var correct = 0, incorrect = 0, rezult = '';
		for (var k=0; k < $chBox.length; k++) {
			var str = $chBox.eq(k).attr('id');
			var id = str.split('_');
			var i = id[1];
			var j = id[2];
		if (myTester[i].answ[j].flag) correct++;
		else incorrect++;
		}

		if (correct == myTester.length) result = 'Вы успешно прошли тест!';
		else result = 'Тест не пройден!' + ' Неправильных ответов - ' + incorrect; 
		
		$('#overlay').fadeIn(400,
		 	function(){ 
				$('#modal_form') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200); 
				$('#modal_text') 
				.html(result);
		});
		
		$('#modal_close, #overlay').click( function(){ 
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200, 
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400); 
					$('[type=checkbox]').prop('checked', false);
					var correct = 0, incorrect = 0, rezult = '';
				}
			);
		});
	})	
});

