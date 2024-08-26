import toggleClass from "./toggle-func.js";

const headerForm = document.querySelector(".header-search"),
  searchBtnOpen = document.querySelector(".search-form-open"),
  searchBtnClose = document.querySelector(".search-form-close");

for (let btn of [searchBtnOpen, searchBtnClose]) {
  btn.addEventListener("click", () => {
    toggleClass(headerForm, "is-active");

    if (btn === searchBtnOpen)
      document.querySelector(".header-input").value = "";
  });
}

export { headerForm };