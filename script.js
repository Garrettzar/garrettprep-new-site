/*
  GarrettPrep Website Script
  File: script.js

  Keeping this intentionally simple:
  - no animations
  - no frameworks
  - only small usability helpers
*/

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
      link.classList.add("active");
    }

    if (currentPage === "" && href === "index.html") {
      link.classList.add("active");
    }
  });
});
