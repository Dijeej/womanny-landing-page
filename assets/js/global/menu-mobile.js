function toogleMenu() {
  const menu = document.querySelector(".menu-mobile");
  menu.classList.toggle("display-flex");
  changeSrcIcon(menu);
}

function changeSrcIcon(menu) {
  const iconMenu = document.querySelector(".mobile-icon img");
  if (menu.classList.contains("display-flex")) {
    iconMenu.src = "assets/images/global/icons/close-32-dark.svg";
  } else {
    iconMenu.src = "assets/images/global/icons/menu-32-dark.svg";
  }
}
