import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const flameIcon = '&#x1F525;'
  document.querySelectorAll('.hot').forEach(element => {
    element.innerHTML += flameIcon;
  });
});
