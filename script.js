let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector("header nav");
  navBar.classList.toggle("active");
};
