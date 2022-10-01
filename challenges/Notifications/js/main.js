let menuBtn = document.getElementById('menu-btn');
let searchBtn = document.getElementById('search-btn');
let menuOpen = false;

menuBtn.addEventListener('click', ()=> {
	if (!menuOpen) {
		let notifications = document.querySelector('.notifications');
		notifications.classList.toggle('open-notifications');
		let menu = document.querySelector('.menu');
		menu.classList.toggle('open-menu');
	}
});

let search = document.querySelector('.input');
let searchOpen = false;

searchBtn.addEventListener('click', ()=> {
	if (!searchOpen) {
		search.style.transform="translateX(-5px)";
		search.style.opacity="1";
		search.style.visibility="visible"
		searchOpen = true;
	} else {
		search.style.transform="translateX(5px)";
		search.style.opacity="0";
		search.style.visibility="hidden"
		searchOpen = false;
	}
});