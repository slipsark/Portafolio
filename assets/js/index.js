(function() {
  const menuShow = document.querySelector(".container__head");
  const menuAction = document.querySelector(".menu__hamburguer");
  
  menuAction.addEventListener("click", ()=> {
    menuShow.classList.toggle("show")
  })

  document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
      });
    });
  });


})()