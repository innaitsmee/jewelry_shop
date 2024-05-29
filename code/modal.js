import toggle from "./toggle-func.js";

const [...modal] = document.querySelectorAll(".backdrop");
const [...modalOpen] = document.querySelectorAll(".modal-btn-open");
const [...modalClose] = document.querySelectorAll(".modal-btn-close");

//find modal with the same index for open
let findElem = (btn) => {
  return modal.find((el) => +el.dataset.index === +btn.dataset.index);
};

//open modal
modalOpen.forEach((item) => {
  item.addEventListener("click", function () {
    toggle(findElem(this), "active-modal");
  });
});

//close modal
modalClose.forEach((item) => {
  item.addEventListener("click", function () {
    toggle(document.querySelector(".active-modal"), "active-modal");
  });
});

