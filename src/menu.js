import "./style.css";
import piazzaGalimbertiImg from "./images/piazza galimberti.jpeg";
import { renderPage } from "./helper.js";

function menuImg() {
  const heroImg = document.createElement("img");
  heroImg.src = piazzaGalimbertiImg;

  return heroImg;
}

function menuHeadline() {
  const headline = document.createElement("h1");
  headline.textContent = "Menu";
  return headline;
}

function menuText() {
  const text = document.createElement("p");
  text.textContent = `
  This new restaurant has a lot of bagna cauda
  `;
  return text;
}

function renderMenu() {
  renderPage(menuHeadline(), menuImg(), menuText());
}

export { renderMenu };
