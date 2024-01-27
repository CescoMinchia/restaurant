import "./style.css";
import piazzaGalimbertiImg from "./piazza galimberti.jpeg";
import { renderPage } from "./helper.js";

function homeImg() {
  const heroImg = document.createElement("img");
  heroImg.src = piazzaGalimbertiImg;

  return heroImg;
}

function homeHeadline() {
  const headline = document.createElement("h1");
  headline.textContent = "Beautiful Restaurant in Cuneo";
  return headline;
}

function homeText() {
  const text = document.createElement("p");
  text.textContent = `
  This new restaurant has a lot of bagna cauda
  `;
  return text;
}

function renderHomepage() {
  renderPage(homeHeadline(), homeImg(), homeText());
}

export { renderHomepage };
