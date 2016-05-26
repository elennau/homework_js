requirejs.config({
	paths: {
		'jquery': 'jquery.min',
		'tmpl': 'tmpl',
	},
	shim:{
		'tmpl': {
			exports: 'tmpl'
		}
	}
});

require([
	'jquery',
	'tmpl',
	'todo/model',
	'todo/view',
	'todo/controller'
	], 
function( $, tmpl, Model, View, Controller ) {

	$(function() {

    	var myPLan = [
        	'Купить продукты',
	        'Сварить борщ',
	        'Проверить уроки'
	        ];

	    var myModel = new Model(myPLan);
	    var myView = new View(myModel);
	    var myController = new Controller(myModel, myView);

	}) 

});


