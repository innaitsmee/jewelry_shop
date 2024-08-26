import toggleClass from "./toggle-func.js";
import { mobMenu } from "./mob-menu.js";

const [...modals] = document.querySelectorAll(".backdrop"),
  [...modalBtnOpen] = document.querySelectorAll(".modal-btn-open"),
  [...modalBtnClose] = document.querySelectorAll(".modal-btn-close");

//find modal with the same index for open
let findElem = (btn) => {
  return modals.find((el) => +el.dataset.index === +btn.dataset.index);
};

//open modal
modalBtnOpen.forEach((item) => {
  item.addEventListener("click", function () {
    toggleClass(findElem(this), "active");
    //if mob menu is open we close it
    if (mobMenu.classList.contains("is-open")) {
      toggleClass(mobMenu, "is-open");
      toggleClass(document.querySelector("body"), "scroll-disabled");
    }
  });
});

//close modal
modalBtnClose.forEach((item) => {
  item.addEventListener("click", function () {
    toggleClass(document.querySelector(".active"), "active");
  });
});