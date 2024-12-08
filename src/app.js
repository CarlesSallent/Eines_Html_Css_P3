// CAROUSEL DE IMAGENES
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay, EffectCube } from 'swiper/modules';

Swiper.use([Navigation, Pagination, Autoplay, EffectCube]);

const swiper = new Swiper('.swiper-container', {
  slidePerView: 1,
  spaceBetween: 10000,
  effect: 'cube',
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },

  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
});

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
  } else {
    nav3.style.display = 'flex';
  }
});

// QUITAR DESCRIPCIÓN DE CATEGORY EN PANTALLAS PEQUEÑAS
function ocultarTexto() {
  if (window.innerWidth <= 500) {
    const textElements = document.querySelectorAll('p.text-atraction');
    
    textElements.forEach(element => {
      element.style.display = 'none';
    });
  } else {
    const textElements = document.querySelectorAll('p.text-atraction');
    textElements.forEach(element => {
      element.style.display = ''; 
    });
  }
}

window.onload = ocultarTexto ();
window.addEventListener('resize', ocultarTexto);

// PONER ID=ACTIVA A LA PÁGINA ACTUAL
const currentPage = window.location.pathname.split("/").pop();

const links = document.querySelectorAll(".footer-links a");

links.forEach(link => {
  const href = link.getAttribute("href");

  if (href.endsWith(currentPage)) {
    link.parentElement.setAttribute("id", "active");
  } else {
    link.parentElement.removeAttribute("id");
  }
});