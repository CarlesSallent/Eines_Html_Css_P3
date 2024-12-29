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
