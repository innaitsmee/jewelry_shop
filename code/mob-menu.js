import toggleFunc from "./toggle-func.js";
import { headerForm } from "./search-form.js";

const mobMenu = document.querySelector(".mobile-menu"),
  [...btns] = document.querySelectorAll(".mob-menu-btn"),
  actionsArr = [
    document.querySelector(".mob-menu-open"),
    document.querySelector(".mob-menu-close"),
  ];

//open/close mob menu
for (let elem of actionsArr) {
  elem.addEventListener("click", () => {
    //if header search form is open we close it
    if (headerForm.classList.contains("is-active")) {
      toggleFunc(headerForm, "is-active");
    }
    toggleFunc(mobMenu, "is-open");
    toggleFunc(document.querySelector("body"), "scroll-disabled");
  });
}

//open sublist
btns.forEach((elem) => {
  elem.addEventListener("click", () => {
    //toggle class at sublist after clicked btn
    toggleFunc(elem.nextElementSibling, "active-sublist");
    //open items of sublist
    [...elem.nextElementSibling.children].forEach((e, i) => {
      toggleFunc(e, "active-sub-item");
      if (e.classList.contains("active-sub-item")) {
        //add delay for open item step by step
        e.style.transitionDelay = `.${i}s`;
      } else e.removeAttribute("style");
    });
  });
});

export { mobMenu };
