import { renderHomepage } from "./homepage-load.js";
import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";
import { toggleDropdownMenu, closeDropdownMenu } from "./dropdown.js";

import "./style.css";
import "./dropdown-style.css";

import arrowDown from "./icons/arrow_down.svg";

const homeButton = document.getElementById("homeButton");
const menuButton = document.getElementById("menuButton");
const aboutButton = document.getElementById("aboutButton");
const moreButton = document.getElementById("moreButton");

const switchTab = function (renderCallback) {
  const mainContainer = document.getElementById("content");
  mainContainer.innerHTML = "";

  renderCallback();
};

// event binding
homeButton.addEventListener("click", () => {
  switchTab(renderHomepage);
});

menuButton.addEventListener("click", () => {
  switchTab(renderMenu);
});

aboutButton.addEventListener("click", () => {
  switchTab(renderAbout);
});

// dropdown event binding
moreButton.addEventListener("click", (e) => {
  toggleDropdownMenu();
  e.stopPropagation();
});

//add arrow down icon to dropDown
let arrowDownElement = document.createElement("img");
arrowDownElement.src = arrowDown;
moreButton.appendChild(arrowDownElement);

// close menu if it is not clicked outside dropdown
document.body.addEventListener("click", (event) => {
  closeDropdownMenu();
});

renderMenu();
