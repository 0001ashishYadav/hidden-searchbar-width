const searchConEl = document.getElementById("searchCon");
searchConEl.classList.add("searchCon");

const searchBtnEl = document.getElementById("searchBtn");
searchBtnEl.classList.add("searchBtn");

let isInputPresent = false;

searchBtnEl.addEventListener("click", () => {
  searchConEl.classList.toggle("width");
});
