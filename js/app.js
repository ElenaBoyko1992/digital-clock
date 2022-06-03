

function getTime() {

	let pageTime = document.querySelector('.page__time');
	let date = new Date();
	let day = getWeekDay(date);
	let hour = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	let timeIntervals = getTimeInterval();

	function addZero() {

		(hour >= 0 && hour < 10) ? (hour = '0' + hour) : hour;
		(minutes >= 0 && minutes < 10) ? (minutes = '0' + minutes) : minutes;
		(seconds >= 0 && seconds < 10) ? (seconds = '0' + seconds) : seconds;

	};
	function getWeekDay(date) {

		let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
		return days[date.getDay()];

	};
	function getTimeInterval() {

		if (date.getHours() >= 12) {

			if (date.getHours() >= 13) {
				hour -= 12;
			}

			return "PM";

		};

		return "AM";

	};

	addZero();

	pageTime.innerHTML = day + ' ' + hour + ' : ' + minutes + ' : ' + seconds + ' ' + timeIntervals;

};

getTime();

setInterval(getTime, 1000);