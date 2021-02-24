const btn = document.querySelector(".btn--menu");
const btnIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".navigation__list");
const navItems = document.querySelectorAll(".navigation__list-item");
const backdrop = document.querySelector(".backdrop");

// Preload images to prevent animation bugs
document.body.classList.add("js-loading");

window.addEventListener("load", showPage, false);

function showPage() {
  document.body.classList.remove("js-loading");
}

// Toggle Mobile Menu
function toggleMenu() {
  // Mobile navigation toggle
  nav.classList.toggle("navigation__list--hidden");
  backdrop.classList.toggle("backdrop--hidden");
  document.body.classList.toggle("disable-scroll");

  // Switch menu button icon and aria-expanded on toggle
  if (nav.classList.contains("navigation__list--hidden")) {
    btnIcon.src = "./images/icon-hamburger.svg";
    btn.setAttribute("aria-expanded", "false");
  } else {
    btnIcon.src = "./images/icon-close.svg";
    btn.setAttribute("aria-expanded", "true");
  }

  // Add nav items staggered, with animation
  navItems.forEach((item, index) => {
    if (item.style.animation) {
      item.style.animation = "";
    } else {
      item.style.animation = `fadeInLeftNav .4s ease backwards ${
        index / 7 + 0.2
      }s`;
    }
  });
}

// Toggle mobile menu on button click
btn.addEventListener("click", toggleMenu);
// Close mobile menu when clicking outside it
backdrop.addEventListener("click", toggleMenu);
