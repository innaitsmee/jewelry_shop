import toggleFunc from "./toggle-func.js";

const mobMenu = document.querySelector(".mobile-menu");

let disableScroll = () => document.body.classList.toggleFunc("scroll-disabled");

document
  .querySelector(".menu-btn-open")
  .addEventListener("click", () => toggleFunc(mobMenu, "is-open"));
document
  .querySelector(".menu-btn-close")
  .addEventListener("click", () => toggleFunc(mobMenu, "is-open"));

document.querySelector(".menu-btn-open").addEventListener("click", disableScroll);
document.querySelector(".menu-btn-close").addEventListener("click", disableScroll);

