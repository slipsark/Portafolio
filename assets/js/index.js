(function() {
  const menuShow = document.querySelector(".container__head");
  const menuAction = document.querySelector(".menu__hamburguer");
  const up = document.querySelector(".up");
  
  menuAction.addEventListener("click", ()=> {
    menuShow.classList.toggle("show")
  })

  /* document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
      });
    });
  }); */

  up.addEventListener("click", ()=> {
    document.documentElement.scrollTop = 0;
  });

  window.addEventListener("scroll", ()=> {
    document.documentElement.scrollTop === 0 
      ? 
      up.style.display = "none"
      :
      up.style.display = "flex"
  })

})()