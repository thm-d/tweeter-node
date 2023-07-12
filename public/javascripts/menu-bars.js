let menuModalContainer;

// au clic sur window, on supprime menuModal
window.addEventListener("click", () => {
  menuModalContainer.classList.add("invisible");
});

// au relâchement du doigt mode mobile sur window, on supprime menuModal
window.addEventListener("touchend", () => {
  menuModalContainer.classList.add("invisible");
});

window.addEventListener("DOMContentLoaded", () => {
  menuModalContainer = document.querySelector("#menu-modal-container");
  menuBars = document.querySelector("#menu-bars");
  const eventManager = {
    handleEvent(e) {
      switch (e.type) {
        case "click":
          menuModalContainer.classList.toggle("invisible");
          e.stopPropagation();
          menuModalContainer.addEventListener("click", (e) => {
            e.stopPropagation();
          });
          break;
        case "touchend":
          menuModalContainer.classList.toggle("invisible");
          e.stopPropagation();
          menuModalContainer.addEventListener("touchend", (e) => {
            e.stopPropagation();
          });
          break;
      }
    },
  };

  menuBars.addEventListener("click", eventManager);
  menuBars.addEventListener("touchend", eventManager);
});
