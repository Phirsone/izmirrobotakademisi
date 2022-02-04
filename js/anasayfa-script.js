const loader = document.getElementById("loader");
const nav = document.querySelector("nav");
const navText = document.querySelectorAll("nav ul li a");
const navUl = document.getElementById("ul");
const boxes = document.querySelectorAll(".box");
const bTexts = document.querySelectorAll(".box-text");
const refs = document.querySelectorAll(".ref");
const left_btn = document.querySelector(".left-btn");
const right_btn = document.querySelector(".right-btn");
var pos = 0;

setTimeout(() => {
  loader.style.display = "none";
}, 1500);

if (screen.width <= 1400) {
  document.querySelector("body").innerHTML =
    "<div>Websitemiz cihazınızın özelliklerine uygun değildir. <br> Lütfen farklı bir cihaz deneyin ya da başka bir zaman tekrar deneyiniz. <br>Ekran genişliği " +
    screen.width +
    " <br>Ekran genişliği en az 1400 olmalı </div>";
}
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 50) {
    nav.style.backgroundColor = "#ffffff";
    nav.style.boxShadow = "0 10px 10px #000000";
    nav.style.height = "7vh";
    navUl.style.width = "40vw";
    nav.classList.add("nav-text-scrolled");
  } else {
    nav.style.backgroundColor = "#ffffff00";
    nav.style.boxShadow = "0 0px 0px transparent";
    nav.style.height = "10vh";
    navUl.style.width = "50vw";
    nav.classList.remove("nav-text-scrolled");
  }
  if (window.scrollY > 500) {
    boxes[0].style.right = "0";
    bTexts[0].style.right = "+24.5vw";
  }
  if (window.scrollY > 1100) {
    boxes[1].style.right = "0";
    bTexts[1].style.right = "-24.5vw";
  } else if (window.scrollY < 500) {
    boxes[0].style.right = "60vw";
    boxes[1].style.right = "-60vw";
    bTexts[0].style.right = "-60vw";
    bTexts[1].style.right = "60vw";
  }
});

left_btn.addEventListener("click", function () {
  pos += 20;
  if (pos == 60) {
    pos = 0;
  }
  refs.forEach((e) => {
    e.style.transform = "translateX(" + pos + "vw)";
  });
});

right_btn.addEventListener("click", function () {
  pos -= 20;
  if (pos == -60) {
    pos = 0;
  }
  refs.forEach((e) => {
    e.style.transform = "translateX(" + pos + "vw)";
  });
});
