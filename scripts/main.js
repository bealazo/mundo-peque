const menu = document.querySelector(".menu");
var date = new Date();
var year = date.getFullYear();
var actual_year = document.querySelector(".copyright-text");
actual_year.innerHTML += year;

menu.addEventListener("click", () => {
  menu.classList.toggle("change");
  document.querySelector(".navbar").classList.toggle("change");
});

document.querySelectorAll(".card-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("change");
  });
});
