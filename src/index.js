import { renderHomepage } from "./homepage-load.js";
import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";

const homeButton = document.getElementById("homeButton");
const menuButton = document.getElementById("menuButton");
const aboutButton = document.getElementById("aboutButton");

const switchTab = function (renderCallback) {
  const mainContainer = document.getElementById("content");
  mainContainer.innerHTML = "";

  renderCallback();
};

homeButton.addEventListener("click", () => {
  switchTab(renderHomepage);
});

menuButton.addEventListener("click", () => {
  switchTab(renderMenu);
});

aboutButton.addEventListener("click", () => {
  switchTab(renderAbout);
});

renderHomepage();
