const bar = document.querySelector('.bar');
const dropArea = document.querySelector('.drop-area');
const uploadButton = document.querySelector('button');
const uploadIcon = document.querySelector('.upload-icon');
let fileSelected = false;

dropArea.addEventListener("dragover", (e) => {
	e.preventDefault();
	dropArea.classList.add('active');
});

dropArea.addEventListener("dragleave", (e) => {
	e.preventDefault();
	dropArea.classList.remove('active');
});

dropArea.addEventListener("drop", (e) => {
	e.preventDefault();
	showFile(e);
	dropArea.classList.remove('active');	
});

const showFile = (e) => {
	let file = e.dataTransfer.files;
	let fileName = file[0].name;
	dropArea.textContent = fileName;
	fileSelected = true;
}

uploadButton.addEventListener("click", () => {
	uploadFile();
});

const uploadFile = () => {
	if (fileSelected == true) {
		bar.classList.add('bar-progress');
		uploadButton.textContent = "Uploading...";
		dropArea.style.border = "none";
		dropArea.innerHTML = `<img src="https://100dayscss.com/codepen/syncing.svg" class="upload-icon rotate">`;
		setInterval(()=> {
			uploadButton.textContent = "Done";
			fileSelected = false;
		}, 3000);
		setTimeout(()=> {
			dropArea.innerHTML = `<img src="https://100dayscss.com/codepen/checkmark.svg" class="upload-icon">`;
		}, 3000);
	}
}