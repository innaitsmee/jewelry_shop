import toggle from "./toggle-func.js";

const mobMenu = document.querySelector(".mobile-menu");

let disableScroll = () => document.body.classList.toggle("scroll-disabled");

document
  .querySelector(".menu-btn-open")
  .addEventListener("click", () => toggle(mobMenu, "is-open"));
document
  .querySelector(".menu-btn-close")
  .addEventListener("click", () => toggle(mobMenu, "is-open"));

document.querySelector(".menu-btn-open").addEventListener("click", disableScroll);
document.querySelector(".menu-btn-close").addEventListener("click", disableScroll);

