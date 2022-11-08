const allBtn = document.querySelectorAll("button");
const recomm = document.querySelector(".recomm");

allBtn.forEach((btn) => {
	btn.addEventListener(
		"click",
		(e) => {
			console.log(e.target.value);
			recomm.innerHTML += `<p>${e.target.value}</p>`;
			e.target.style.backgroundColor = "grey";
		},
		{ once: true }
	);
});

