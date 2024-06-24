import toggleFunc from "./toggle-func.js";

const headerForm = document.querySelector(".header-search"),
  searchFormOpen = document.querySelector(".search-form-open"),
  searchFormClose = document.querySelector(".search-form-close");

for (let btn of [searchFormOpen, searchFormClose]) {
  btn.addEventListener("click", () => {
    toggleFunc(headerForm, "is-active");

    if (btn === searchFormOpen)
      document.querySelector(".header-input").value = "";
  });
}

export { headerForm };