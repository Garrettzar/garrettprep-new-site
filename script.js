/*
  GarrettPrep Website Script
  File: script.js

  Mobile-first helpers:
  - highlights the current page in the nav
  - opens/closes the mobile hamburger menu
  - closes the menu after a link is clicked
*/

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const allNavLinks = document.querySelectorAll(".nav-links a, .footer-links a");

  allNavLinks.forEach((link) => {
    const href = link.getAttribute("href");

    if (!href) return;

    const linkPage = href.split("#")[0].split("/").pop();

    if (linkPage === currentPage) {
      link.classList.add("active");
    }

    if ((currentPage === "" || currentPage === "/") && linkPage === "index.html") {
      link.classList.add("active");
    }
  });

  const mobileToggle = document.querySelector(".mobile-nav-toggle");
  const primaryNav = document.querySelector("#primary-navigation");

  if (!mobileToggle || !primaryNav) return;

  function closeMenu() {
    primaryNav.classList.remove("is-open");
    mobileToggle.setAttribute("aria-expanded", "false");
    mobileToggle.textContent = "☰";
    document.body.classList.remove("nav-open");
  }

  function openMenu() {
    primaryNav.classList.add("is-open");
    mobileToggle.setAttribute("aria-expanded", "true");
    mobileToggle.textContent = "×";
    document.body.classList.add("nav-open");
  }

  mobileToggle.addEventListener("click", function () {
    const isOpen = primaryNav.classList.contains("is-open");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
});
