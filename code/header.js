import isMobile from "./touchscreen-check-func.js";
import toggleClass from "./toggle-func.js";

const [...dropdowns] = document.querySelectorAll(".dropdown");

if (isMobile.any()) {
  dropdowns.forEach((item) => {
    //add class 'touch' to header__item and create arrows
    if (!item.classList.contains("location-dropdown")) {
      item.parentElement.classList.add("touch");
      item.insertAdjacentHTML(
        "beforebegin",
        "<button class='button touch__btn touch-btn' type=button><span class='arrow'></span></button>"
      );
      //add class 'touch-btn' to location svg
    } else item.previousElementSibling.classList.add("touch-btn");
  });

  //open dropdown
  document.querySelector(".header__block").addEventListener("click", (e) => {
    if (e.target.classList.contains("touch-btn")) {
      //open dropdown and rotate arrow at header items
      toggleClass(e.target.nextElementSibling, "active-dropdown");
      if (e.target.parentElement.classList.contains("touch")) {
        toggleClass(e.target, "rotate");
      }

      //close all dropdowns were opened before
      //rotate all arrows to start position (if item has arrow)
      dropdowns.forEach((item) => {
        if (item !== e.target.nextElementSibling) {
          item.classList.remove("active-dropdown");
          item.previousElementSibling.classList.remove("rotate");
        }
      });
    }
  });
}
