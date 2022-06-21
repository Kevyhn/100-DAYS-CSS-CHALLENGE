const frame = document.querySelector('.frame');
const moon = document.querySelector('.moon');
const clouds = document.querySelector('.clouds');

for (let i = 1; i <= 30; i++) {
 	const drop_big = document.createElement('DIV');
 	const form_1 = document.createElement('DIV');
 	const form_2 = document.createElement('DIV');
 	const form_3 = document.createElement('DIV');
 	form_1.classList.add('drop-1');
 	form_2.classList.add('drop-2');
 	form_3.classList.add('drop-3');
	drop_big.appendChild(form_1);
 	drop_big.appendChild(form_2);
 	drop_big.appendChild(form_3);
 	drop_big.classList.add('drop-big');
 	drop_big.style.left=`${(Math.random() * 400).toFixed(0)}px`;
 	drop_big.style.animation=`drop-big 1s ${(Math.random() * 10)}s infinite`;
 	frame.appendChild(drop_big);
}

for (let i = 1; i <= 11; i++) {
	const crater = document.createElement('DIV');
	crater.classList.add(`crater-${i}`);
	crater.style.position="absolute";
	crater.style.borderRadius="50%";
	crater.style.background="#ece1a8";
	moon.appendChild(crater);
}

for (let i = 1; i <= 5; i++) {
	const cloud = document.createElement('DIV');
	cloud.classList.add(`cloud-${i}`);
	cloud.style.position="absolute";
	cloud.style.width="340px";
	cloud.style.height="280px";
	cloud.style.borderRadius="50%";
	clouds.appendChild(cloud);
}