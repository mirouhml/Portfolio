function openCloseMenu() {
    var x = document.querySelector(".mobile-menu");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }