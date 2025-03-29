const searchConEl = document.getElementById("searchCon");
searchConEl.classList.add("searchCon");

const MgnIcon = document.getElementById("mgnIcon");
MgnIcon.classList.add("mgnIcon");

const InpEl = document.getElementById("input");

MgnIcon.addEventListener("click", () => {
  searchConEl.classList.toggle("width");

  InpEl.classList.toggle("hide");
});
