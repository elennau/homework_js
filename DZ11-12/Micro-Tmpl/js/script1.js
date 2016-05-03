$(function(){

function GoogleCallback (func, data) {
   // window[func](data);
   alert(data);
}


// Устанавливаем фокус ввода в поле для ввода текста:
/*
	$('#search_text').focus();

	$('#searchForm').submit(function(){
		googleSearch();
		return false;
	});
*/	
var searchText = $('#search_text').val();
var key = 'ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg';

	$('#searchForm').submit(function(){		


	
	
	$.get("http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key="+key+"&q="+searchText+", { name: "John", time: "2pm" })
.done(function(data) {
  alert("Data Loaded: " + data);
});

	
	
	
	
	
return false;
	});

	
	
	
	
	
});

