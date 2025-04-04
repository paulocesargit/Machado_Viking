document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");

    if (mobileMenu.classList.contains("active")) {
      mobileMenu.style.display = "flex";
    } else {
      mobileMenu.style.display = "none";
    }
  });
});
