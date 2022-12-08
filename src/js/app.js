import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebP();

// const menuBtn = document.querySelector('.navigation-toggle');
// let menuOpen = false;
// menuBtn.addEventListener('click', () => {
//     if(!menuOpen) {
//         menuBtn.classList.add('open');
//         menuOpen = true;
//     } else {
//         menuBtn.classList.remove('open');
//         menuOpen = false;
//     }
// });

const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});
