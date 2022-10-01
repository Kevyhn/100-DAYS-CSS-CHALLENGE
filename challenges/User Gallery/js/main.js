let bgImg = document.querySelector('.bg-img');
let imgSelected = document.querySelector('.img-selected');
let bgColor = document.querySelector('.bg-color');
let closeBtn = document.getElementById('closeBtn');
let name = document.getElementById('name');
const nameIndex = ['Julia Toth','Elliot Beckham','Jane Chloe','Rosie Veronica'];

closeBtn.addEventListener('click', ()=> {
	closeBtn.style.top = "-60px";
	bgImg.style.top = "-45%";
	imgSelected.style.top = "-45%";
	bgColor.style.bottom = "-55%";
	closeBtn.style.transitionDelay = "0ms";
	bgImg.style.transitionDelay = "400ms";
	bgColor.style.transitionDelay = "400ms";
});

for (let i = 1; i <= 4; i++) {
	let ctnImg = document.getElementById(`img-${i}`);
	ctnImg.addEventListener('click', ()=> {
		closeBtn.style.top = "20px";
		bgImg.style.top = "0%";
		imgSelected.style.top = "45%";
		bgColor.style.bottom = "0%";
		closeBtn.style.transitionDelay = "900ms";
		bgImg.style.transitionDelay = "0ms";
		bgColor.style.transitionDelay = "0ms";
		const imgURL = `https://100dayscss.com/codepen/13-${i}.jpg`;
		imgSelected.style.backgroundImage=`url(${imgURL})`;
		name.textContent = nameIndex[i - 1];
	});
}