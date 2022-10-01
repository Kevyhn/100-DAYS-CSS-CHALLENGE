let street = document.querySelector('.street');

for (let i = 1; i <= 4; i++) {
	let line = document.createElement('DIV');
	line.classList.add('line');
	line.classList.add(`line-${i}`);
	line.style.animationDelay=`${Math.floor(Math.random() * 2000)}ms`;
	line.style.width=`${Math.max(5, Math.floor(Math.random() * 25))}px`;
	street.appendChild(line);
}

for (let i = 5; i <= 10; i++) {
	let line = document.createElement('DIV');
	line.classList.add('line');
	line.classList.add(`line-${i}`);
	line.style.animationDelay=`${Math.floor(Math.random() * 2000)}ms`;
	line.style.width=`${Math.max(10, Math.floor(Math.random() * 20))}px`;
	line.style.animationDuration="900ms";
	street.appendChild(line);
}