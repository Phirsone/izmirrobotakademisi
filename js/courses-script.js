const loader = document.getElementById("loader");
const nav = document.querySelector("nav");
const navText = document.querySelectorAll("nav ul li a");
const navUl = document.getElementById("ul");

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
    navText.forEach((e) => {
      e.style.color = "#000";
      e.style.fontSize = "16px";
    });
  } else {
    nav.style.backgroundColor = "#ffffff00";
    nav.style.boxShadow = "0 0px 0px transparent";
    nav.style.height = "10vh";
    navUl.style.width = "50vw";
    navText.forEach((e) => {
      e.style.color = "#fff";
      e.style.fontSize = "20px";
    });
  }
});
