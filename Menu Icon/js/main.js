let menu = document.getElementById('menu');
menu.addEventListener('click', () => {
	let a = document.querySelector('.div-1');
	let b = document.querySelector('.div-2');
	let c = document.querySelector('.div-3');
	a.classList.toggle('open');
	if (a.classList[1] == 'open') {
		a.style.top="40px";
		a.style.transform="rotate(45deg)";
		a.style.transition="top 500ms, transform 500ms 500ms"
		b.style.transform="scale(0.8)";
		b.style.opacity="0";
		b.transition="opacity 500ms, transform 500ms"
		c.style.bottom="40px";
		c.style.transform="rotate(135deg)";
		c.style.transition="bottom 500ms, transform 500ms 500ms"

	} else {
		a.style.top="0";
		a.style.transform="rotate(0deg)";
		a.style.transition="top 500ms 500ms, transform 500ms";
		b.style.transform="scale(1)";
		b.style.opacity="1";
		b.style.transition="opacity 500ms, transform 500ms";
		c.style.bottom="0";
		c.style.transform="rotate(0deg)";
		c.style.transition="bottom 500ms 500ms, transform 500ms";
	}
});