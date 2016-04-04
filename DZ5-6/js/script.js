'use strict'
var myTimer = {
proceedTimerID:'',
prevTime : 0,
currTime : 0,
startTime : 0,
startTimeID : 0,
element:'', 

proceed: function() {
	myTimer.proceedTimerID = setInterval (function() {
		var t = myTimer.prevTime + myTimer.currTime - myTimer.startTime;
		var ms = t % 1000;
		t = (t / 1000) >> 0;
		var s = t % 60;
		t = (t / 60) >> 0;
		var m = t % 60;
		t = (t / 60) >> 0;
		var h = t % 24;
		var timerBig = '' + ((h / 10) >> 0) + (h % 10) + ':' +
							   ((m / 10) >> 0) + (m % 10) + ':' +
							   ((s / 10) >> 0) + (s % 10); 
		var timerSec = '' + ((ms / 100) >> 0) + ((ms % 100/10) >> 0) + (ms % 10);
		document.TestForm.BigClock.value=timerBig; 
		document.TestForm.SecClock.value=timerSec; 
	}, 1);
},


startClock: function() { 
	var t = new Date();
	myTimer.startTime = t.getTime();
	myTimer.currTime = myTimer.startTime;
	myTimer.startTimeID = setInterval (function(){
		var t = new Date();
		myTimer.currTime = t.getTime();
	}, 1);
	myTimer.showStart();
}, 

stopClock: function() {
	clearInterval(myTimer.startTimeID);
	var t = new Date();
	myTimer.prevTime = myTimer.prevTime + myTimer.currTime - myTimer.startTime;
	myTimer.currTime = 0;
	myTimer.startTime = 0;
	myTimer.showStop();
},

clearClock: function() { 
	clearInterval(myTimer.startTimeID);
	myTimer.prevTime = 0;
	myTimer.currTime = 0;
	myTimer.startTime = 0;
	myTimer.showStop();
},

showStart: function () {
	myTimer.element = document.querySelector('.clock__start');	
	myTimer.element.classList.add('show');
	myTimer.element = document.querySelector('.clock__stop');	
	myTimer.element.classList.remove('show');
},

showStop: function () {
	myTimer.element = document.querySelector('.clock__stop');	
	myTimer.element.classList.add('show');
	myTimer.element = document.querySelector('.clock__start');	
	myTimer.element.classList.remove('show');
}
}

window.addEventListener('click', myTimer.proceed);
document.TestForm.StartClock.addEventListener('click', myTimer.startClock);
document.TestForm.StopClock.addEventListener('click', myTimer.stopClock);
document.TestForm.ClearClock.addEventListener('click', myTimer.clearClock);
