window.addEventListener("DOMContentLoaded", () => {
  const formContainer = document.querySelector("#form-container");
  const inputAvatar = document.querySelector("#input-avatar");

  formContainer.addEventListener("click", () => {
    inputAvatar.click();
  });

  inputAvatar.addEventListener("change", () => {
    formContainer.submit()
  });
});

