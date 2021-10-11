function loadHome() {
	document.getElementById("mainContent").innerHTML='<object type="text/html" data="../src/home.html" ></object>';
}

function loadWeDesc(id) {
	let descDiv = document.getElementById(id);

	if(descDiv.classList.contains('desc-visible')) {
		descDiv.style.display = "none";
		descDiv.classList.remove('desc-visible');
	} else {
		descDiv.style.display = "inline-block";
		descDiv.classList += " desc-visible";
	}
}

function loadSkillsDesc(id, expandIconId) {
	let descDiv = document.getElementById(id);
	let expandIcon = document.getElementById(expandIconId);
	if(descDiv.classList.contains('desc-visible')) {
		descDiv.style.display = "none";
		descDiv.classList.remove('desc-visible');
		expandIcon.src = "../utils/expand.png"
	} else {
		descDiv.style.display = "inline-block";
		descDiv.style.width = "100%";
		descDiv.classList += " desc-visible";
		expandIcon.src = "../utils/collapse.png";
		descDiv.scrollIntoView();
	}
}

function loadCV() {
	window.open('../utils/resume.pdf');
}

function loadSection(id, x, y) {
	window.scrollTo(x, y);
}