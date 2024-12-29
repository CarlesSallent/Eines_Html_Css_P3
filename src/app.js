// MOSTRAR MENU PRINCIPAL Y SUBMENU MUSEOS Y ATRACCIONES
const burgerMenu = document.querySelector('#burger-menu');
const nav2 = document.querySelector('#nav2');
const museosbutton = document.querySelector('#museos'); 
const nav3 = document.querySelector('#nav3');

burgerMenu.addEventListener('click', () => {

  if (nav2.style.display === 'flex') {
    nav2.style.display = 'none'; 
  } else {
    nav2.style.display = 'flex'; 
    nav3.style.display = 'none';
  }
});

museosbutton.addEventListener('mouseover', () => {
  nav3.style.display = 'flex'; 
});

museosbutton.addEventListener('mouseleave', () => {
  nav3.style.display = 'none';
});

nav3.addEventListener('mouseleave', () => {
  nav3.style.display = 'none';
});

// FUNCIONES SUBMENUS PARA PANTALLAS TACTILES
const masButton = document.querySelector('#mas');

function submenuPantallaTactil () {
  if (window.innerWidth <= 1000) {
    masButton.innerHTML = ' +';
  } else {
    masButton.innerHTML = '';
  } 
}

window.onload = submenuPantallaTactil ();
window.addEventListener('resize', submenuPantallaTactil);

masButton.addEventListener('click', () => {
  if (nav3.style.display ==='flex') {
    nav3.style.display = 'none';
    masButton.innerHTML = ' +';
  } else {
    nav3.style.display = 'flex';
    masButton.innerHTML = '-'
  }
});

// PONER ID=ACTIVA A LA PÁGINA ACTUAL
const currentPage = window.location.pathname.split("/").pop() || "index.html";

function setActiveLink(selector) {
  const links = document.querySelectorAll(`${selector} a`);
  
  links.forEach(link => {
    const href = link.getAttribute("href");
    
    if (href.endsWith(currentPage)) {
      link.setAttribute("id", "active");
    } else {
      link.removeAttribute("id");
    }
  });
}

setActiveLink(".footer-links");
setActiveLink(".nav-links");
setActiveLink("#nav3");

// TITULO PÀGINA
document.addEventListener("DOMContentLoaded", () => {
  const pageTitle = document.title;

  const titleDiv = document.getElementById("Title");

  const h1 = document.createElement("h1");
  h1.textContent = pageTitle; 

  titleDiv.appendChild(h1);
});
