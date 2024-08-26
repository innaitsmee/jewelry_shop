import toggleClass from "./toggle-func.js";
import { headerForm } from "./search-form.js";

const mobMenu = document.querySelector(".mobile-menu"),
  [...menuBtns] = document.querySelectorAll(".mob-menu-btn"),
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
menuBtns.forEach((elem) => {
  elem.addEventListener("click", () => {
    //toggle class at sublist after clicked btn
    toggleClass(elem.nextElementSibling, "active-sublist");
    //open items of sublist
    [...elem.nextElementSibling.children].forEach((e, i) => {
      toggleClass(e, "active-sub-item");
      if (e.classList.contains("active-sub-item")) {
        //add delay for open item step by step
        e.style.transitionDelay = `.${i}s`;
      } else e.removeAttribute("style");
    });
  });
});

export { mobMenu };
