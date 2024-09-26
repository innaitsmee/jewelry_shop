import toggleClass from "./toggle-func.js";
import { headerForm } from "./search-form.js";

const mobMenu = document.querySelector(".mobile-menu"),
  menuActions = [
    document.querySelector(".mob-menu-open"),
    document.querySelector(".mob-menu-close"),
  ];

//open/close mob menu
for (let elem of menuActions) {
  elem.addEventListener("click", () => {
    //if header search form is open we close it
    if (headerForm.classList.contains("is-active")) {
      toggleClass(headerForm, "is-active");
    }
    toggleClass(mobMenu, "is-open");
    toggleClass(document.querySelector("body"), "scroll-disabled");
  });
}

//open sublist
document.querySelector(".mobile-menu__list").addEventListener("click", (e) => {
  if (e.target.classList.contains("mob-menu-btn")) {
    //toggle class at sublist after clicked btn
    toggleClass(e.target.nextElementSibling, "active-sublist");
    //open items of sublist
    [...e.target.nextElementSibling.children].forEach((el, i) => {
      toggleClass(el, "active-sub-item");
      if (el.classList.contains("active-sub-item")) {
        //add delay for open item step by step
        el.style.transitionDelay = `.${i}s`;
      } else el.removeAttribute("style");
    });
  }
});

export { mobMenu };
