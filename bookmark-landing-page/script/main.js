const hamburgerButton = document.querySelector(".hamburger");
const crossButton = document.querySelector(".cross");
const mobileNav = document.querySelector(".nav--mobile");

[hamburgerButton, crossButton].forEach((button) =>
  button.addEventListener("click", toggleMobileNav)
);

function toggleMobileNav() {
  mobileNav.classList.toggle("js-set-top0");
}
