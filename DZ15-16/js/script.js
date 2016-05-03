'use strict;'
$(function(){
	$('#searchForm').submit(function(){		
	var searchText = $('#search_text').val();
	var key = 'ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg';
	$.getJSON("http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key="+key+"&q="+searchText+"&callback=?",
	function(data){
	    var ul = document.createElement("ul");
		$.each(data.responseData.results, function(i, val){
            var li = document.createElement("li");
            li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a>"+'<site>'+val.url+'</site>'+'<p>'+val.content+'</p>';                            
            ul.appendChild(li);
		});
		$('.wrapper_results').html(ul);
	});
	return false;
	});
});




function Human() {
	this.name	= 'Петр',
	this.age	= 25,
	this.gender	= 'male',
	this.height	= 180,
	this.weight	= 70
}

function Worker() {
	this.placeOfWork	= 'Hartron',
	this.salary		= 8000,
	this.working 	= function(){
		this.premium	= this.salary * 0.02;
		this.weight = this.weight - this.weight * 0.1;
	}
}

function Student() {
	this.placeOfStudy = 'Nure',
	this.scholarship	 = 800,
	this.watchSeries	 = function(){
		this.indexation = this.scholarship - 10;
		this.height = this.height - 1;
	}
}


var human = new Human();
Worker.prototype = human;
Student.prototype = human;

var worker = new Worker();
var student = new Student();
var worker_1 = new Worker();
var student_1 = new Student();


worker.working();
student.watchSeries();

console.log ('worker=', worker); 
console.log ('student=', student); 
console.log ('worker_1=', worker_1); 
console.log ('student_1=', student_1); 
