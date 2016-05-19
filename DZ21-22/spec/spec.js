var app = require('../js/test.js');

describe("Powtest", function() {
//POW			
	it("pow(2, 10)", function() {
		var result;
		result = app.app.pow(2,10);
		expect(result).toBe(1024);
	});
	it("pow(10, -2", function(){
		var result;
		result = app.app.pow(10,-2);
		expect(result).toBe(0.01);
	});
	it("pow(7000777, 0)", function(){
		var result;
		result = app.app.pow(7000777, 0);
		expect(result).toBe(1);
	});
	it("pow(38, 1)", function(){
		var result;
		result = app.app.pow(38, 1);
		expect(result).toBe(38);
	});
	it("pow(0, 9)", function(){
		var result;
		result = app.app.pow(0, 9);
		expect(result).toBe(0);
	});
	it("pow(0, 0)", function(){
		var result;
		result = app.app.pow(0, 0);
		expect(result).toBe('NaN');
	});
// NOD
	it("nod(36, 12)", function(){
		var result;
		result = app.app.nod(36, 12);
		expect(result).toBe(12);
	});
	it("nod(-25, 5)", function(){
		var result;
		result = app.app.nod(-25, 5);
		expect(result).toBe(5);
	});
	it("nod(471, -9)", function(){
		var result;
		result = app.app.nod(471, 9);
		expect(result).toBe(3);
	});
	it("nod(777, 0)", function(){
		var result;
		result = app.app.nod(777, 0);
		expect(result).toBe(777);
	});
});