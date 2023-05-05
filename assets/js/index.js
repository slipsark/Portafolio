const menuShow = document.querySelector(".container__head");
const menuAction = document.querySelector(".menu__hamburguer");

menuAction.addEventListener("click", ()=> {
  menuShow.classList.toggle("show")
})