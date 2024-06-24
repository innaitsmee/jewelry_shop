import toggleFunc from "./toggle-func.js";
import { mobMenu } from "./mob-menu.js";

const [...modal] = document.querySelectorAll(".backdrop"),
  [...modalOpen] = document.querySelectorAll(".modal-btn-open"),
  [...modalClose] = document.querySelectorAll(".modal-btn-close");

//find modal with the same index for open
let findElem = (btn) => {
  return modal.find((el) => +el.dataset.index === +btn.dataset.index);
};

//open modal
modalOpen.forEach((item) => {
  item.addEventListener("click", function () {
    toggleFunc(findElem(this), "active");
    //if mob menu is open we close it
    if (mobMenu.classList.contains("is-open")) {
      toggleFunc(mobMenu, "is-open");
      toggleFunc(document.querySelector("body"), "scroll-disabled");
    }
  });
});

//close modal
modalClose.forEach((item) => {
  item.addEventListener("click", function () {
    toggleFunc(document.querySelector(".active"), "active");
  });
});