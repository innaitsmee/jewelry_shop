import toggleFunc from "./toggle-func.js";

const headerForm = document.querySelector(".header-search");
const searchFormOpen = document.querySelector(".search-form-open");
const searchFormClose = document.querySelector(".search-form-close");

//open form
searchFormOpen.addEventListener("click", () => {
    toggleFunc(headerForm, "is-active");
    document.querySelector(".header-input").value = "";
})

//close form
searchFormClose.addEventListener("click", () => {
    toggleFunc(headerForm, "is-active");
})