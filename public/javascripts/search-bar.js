let menuContainer;

// au clic sur window, on supprime menuContainer
window.addEventListener("click", () => {
  if (menuContainer) {
    menuContainer.innerHTML = "";
  }
});

window.addEventListener("DOMContentLoaded", () => {
  menuContainer = document.querySelector("#search-menu-container");

  // Stoppe la propagation au clic pour éviter event sur window plus haut
  if (menuContainer) {
    menuContainer.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  let searchInput = document.querySelector("#search-input");
  let ref;

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const value = e.target.value;
      // évite d'avoir après 2s toutes les valeurs tapées dans l'input
      if (ref) {
        clearTimeout(ref);
      }

      if (value.length === 0) {
        menuContainer.innerHTML = "";
      } else {
        ref = setTimeout(() => {
          axios
            .get("/users?search=" + value)
            .then((response) => {
              menuContainer.innerHTML = response.data;
            })
            .catch((err) => console.log(err));
        }, 800);
      }
    });
  }
});
