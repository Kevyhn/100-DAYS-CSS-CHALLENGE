const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

let hour = document.querySelector('.hour');
let minutes = document.querySelector('.minutes');
let day = document.querySelector('.day');
let dayN = document.querySelector('.day-n');
let month = document.querySelector('.month');
let year = document.querySelector('.year');

const time = () => {
	const date = new Date();
	let dateDay = date.getDay();
	let dateDayN = date.getDate();
	let dateMonth = date.getMonth() + 1;
	let dateYear = date.getFullYear();
	let dateHour = date.getHours();
	let dateMinute = date.getMinutes();

	dayN.textContent = dateDayN;
	year.textContent = dateYear;

	const addZeros = (x, y) => {
		if (x < 10) {
			let y = `0${x}`;
			return y;
		} else return x;
	}

	let hourZero;
	let minutesZero;

	let dateHourZeros = addZeros(dateHour, hourZero);
	let dateMinutesZeros = addZeros(dateMinute, minutesZero);;

	dateHourZeros > 12 ? hour.textContent = `0${dateHourZeros - 12}` : hour.textContent = dateHourZeros;
	
	minutes.textContent = dateMinutesZeros;

	switch (dateDay) {
		case 1:
		day.textContent = days[0];
		break;	

		case 2:
		day.textContent = days[1];
		break;	

		case 3:
		day.textContent = days[2];
		break;	

		case 4:
		day.textContent = days[3];
		break;	

		case 5:
		day.textContent = days[4];
		break;	

		case 6:
		day.textContent = days[5];
		break;	

		case 7:
		day.textContent = days[6];
		break;	
	}

	switch (dateMonth) {	
		case 1:
		month.textContent = months[0];
		break;	

		case 2:
		month.textContent = months[1];
		break;	

		case 3:
		month.textContent = months[2];
		break;	

		case 4:
		month.textContent = months[3];
		break;	

		case 5:
		month.textContent = months[4];
		break;	

		case 6:
		month.textContent = months[5];
		break;	

		case 7:
		month.textContent = months[6];
		break;	

		case 8:
		month.textContent = months[7];
		break;

		case 9:
		month.textContent = months[8];
		break;

		case 10:
		month.textContent = months[9];
		break;

		case 11:
		month.textContent = months[10];
		break;

		case 12:
		month.textContent = months[11];
		break;
	}
}

time();

setInterval(time, 1000);