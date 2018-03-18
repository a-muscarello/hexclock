
var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex_color');


function hexClock () {
	var time = new Date();

	var hours = (time.getHours() % 12).toString();
	var minutes = time.getMinutes().toString();
	var seconds = time.getSeconds().toString();

	if (hours.length < 2) {
		hours = '0' + hours;
	}
	if (minutes.length < 2) {
		minutes = '0' + minutes;
	}
	if (seconds.length < 2) {
		seconds = '0' + seconds;
	}

	var clockString = hours + ':' + minutes + '.' + seconds;

	var hexColorWheel = '#' + hours + minutes + seconds;

	clock.textContent = clockString;
	hexColor.textContent = hexColorWheel;

	document.body.style.backgroundColor = hexColorWheel;
}

hexClock();
setInterval (hexClock, 1000);



