import { renderHomepage } from "./homepage-load.js";
import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";
import { renderContact } from "./form.js";
import { toggleDropdownMenu, closeDropdownMenu } from "./dropdown.js";

import "./style.css";
import "./dropdown-style.css";

import arrowDown from "./icons/arrow_down.svg";

const homeButton = document.getElementById("homeButton");
const menuButton = document.getElementById("menuButton");
const aboutButton = document.getElementById("aboutButton");
const contactButton = document.getElementById("contactButton");
const moreButton = document.getElementById("moreButton");

const switchTab = function (renderCallback, newClass = null) {
  const mainContainer = document.getElementById("content");
  mainContainer.innerHTML = "";

  if (newClass !== null) {
    mainContainer.removeAttribute("class");
    mainContainer.classList.add(newClass);
  }

  renderCallback();
};

// event binding
homeButton.addEventListener("click", () => {
  switchTab(renderHomepage);
});

menuButton.addEventListener("click", () => {
  switchTab(renderMenu, "midSection");
});

aboutButton.addEventListener("click", () => {
  // disable about, as it is empty
  // switchTab(renderAbout);
});

contactButton.addEventListener("click", () => {
  switchTab(renderContact, "formPage");
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

renderHomepage();
