document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  const dropdownMenus = document.querySelectorAll(".dropdown-menu");

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const dropdownMenu = toggle.nextElementSibling;
      const isOpen = !dropdownMenu.classList.contains("hidden");

      dropdownMenus.forEach((menu) => {
        menu.classList.add("hidden");
      });

      if (!isOpen) {
        dropdownMenu.classList.remove("hidden");
      }
    });
  });

  document.querySelectorAll(".dropdown-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      dropdownMenus.forEach((menu) => {
        menu.classList.add("hidden");
      });
      mobileMenu.classList.add("hidden");
    });
  });
});
