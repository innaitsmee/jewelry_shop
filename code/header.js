import isMobile from "./touchscreen-check-func.js";
import toggleFunc from "./toggle-func.js";

const [...dropdowns] = document.querySelectorAll(".dropdown");

if (isMobile.any()) {
  dropdowns.forEach((item) => {
    //create arrows and add class 'touch' to header__item
    if (!item.classList.contains("location-dropdown")) {
      item.parentElement.classList.add("touch");
      item.insertAdjacentHTML("beforebegin", "<span class=arrow></span>");
    }
  });

  //click on arrow and open dropdown
  [...document.querySelectorAll(".arrow")].forEach((item) => {
    item.addEventListener("click", function () {
      toggleFunc(this.nextElementSibling, "active-dropdown");
      //close all dropdowns were opened defore
      dropdowns.forEach((item) => {
        if (item !== this.nextElementSibling) {
          item.classList.remove("active-dropdown");
        }
      });
    });
  });
}
