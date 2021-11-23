let navMain = document.querySelector('#navMain');
let body = document.querySelector('body');
function navMainMenuOpen() {
  let hamburger = document.querySelector('#hamburger');
  let navMeinLinks = document.querySelector('#navMainLinks');
  hamburger.onclick = function() {
    hamburger.classList.toggle('hamburger_active');
    navMeinLinks.classList.toggle('nav-main__links_active');
    body.classList.toggle('scroll_none');
  }
};
navMainMenuOpen();

// Появление кнопки при скроле ввех и исчезновение при скроле вниз
function navMainShow() {
  let screen = window.pageYOffset;
  navMain.style.top = "0px";
  window.onscroll = function() {
    let screenScrool = window.pageYOffset;
    if (screenScrool == 0) {
      navMain.style.top = "0px";
      navMain.style.background = "transparent";
    }
    else{
      if (screen < screenScrool) {
        navMain.style.top = "-100px";
      } else {
        navMain.style.top = "0px";
        navMain.style.background = "#000000b5";
      }
    } 
    screen = screenScrool;
  }
};
navMainShow();