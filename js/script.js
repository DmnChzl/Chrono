var space = false;

var countDown = new IOWA.CountdownTimer.Core(
	// new Date(Date.now() + 10*24*60*60*1000), 
	new Date(Date.UTC(2016, 9, 31, 10, 30, 0)), // 31 Oct 2016 10h30
	document.querySelector('countdown-timer')
);
countDown.useUpTime = false; // Set to `true` to display uptime of your server
countDown.useChrono = false; // Set to `true` to display simple counter
countDown.showCurrentTime = false; // Set to `true` to display current clock
countDown.setUp(true);
countDown.attachEvents();
countDown.play(false);

$(document).keyup(function(event) {
	if (event.keyCode == 32) {
		if (space == false) {
			space = true;
			console.log('Space Is True Now !');
		} else if (space == true) {
			space = false;
			console.log('Space Is False Now !');
		}
	}
}).keydown(function(event) {
	if (event.keyCode == 32) {
		if (space == false) {
			countDown.pause();
		} else if (space == true) {
			countDown.play();
		}
	}
});