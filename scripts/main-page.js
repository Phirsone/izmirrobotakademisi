const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const okulOncesi = document.getElementById("okul-oncesi");
const ilk = document.getElementById("ilk");
const orta = document.getElementById("orta");
const lise = document.getElementById("lise");
menuBtn.addEventListener("click", function () {
	nav.classList.toggle("clicked");
});

okulOncesi.addEventListener("click", function () {
	window.location.href = "../courses.html?1";
});
ilk.addEventListener("click", function () {
	window.location.href = "../courses.html?2";
});
orta.addEventListener("click", function () {
	window.location.href = "../courses.html?3";
});
lise.addEventListener("click", function () {
	window.location.href = "../courses.html?4";
});
