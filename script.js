document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menuOpenIcon = document.getElementById("menu-open-icon");
    const menuCloseIcon = document.getElementById("menu-close-icon");
    const mobileMenu = document.getElementById("mobile-menu");
  
    menuToggle.addEventListener("click", () => {
      const isHidden = !mobileMenu.classList.contains("hidden");
      
      // Toggle the menu
      mobileMenu.classList.toggle("hidden");
  
      // Toggle icons
      menuOpenIcon.classList.toggle("hidden", !isHidden);
      menuCloseIcon.classList.toggle("hidden", isHidden);
    });
  });
  
