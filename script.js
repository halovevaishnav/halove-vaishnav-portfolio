// ==========================
// HALOVE VAISHNAV PORTFOLIO
// ==========================

// Loader Animation
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.transition = "all .8s ease";
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 1800);
});

// Navbar Blur on Scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

  if (window.scrollY > 60) {
    nav.style.background = "rgba(0,0,0,.65)";
    nav.style.backdropFilter = "blur(30px)";
  } else {
    nav.style.background = "rgba(0,0,0,.25)";
    nav.style.backdropFilter = "blur(20px)";
  }

});

// Hero Button Animation

const btn = document.querySelector(".btn");

btn.addEventListener("mouseenter", () => {

    btn.style.transform = "translateY(-8px) scale(1.05)";

});

btn.addEventListener("mouseleave", () => {

    btn.style.transform = "translateY(0px) scale(1)";

});
