import "./style.css";
// import piazzaGalimbertiImg from "./images/piazza galimberti.jpeg";
import { renderPage } from "./helper.js";

function aboutImg() {
  const heroImg = document.createElement("img");
  // heroImg.src = piazzaGalimbertiImg;

  return heroImg;
}

function aboutHeadline() {
  const headline = document.createElement("h1");
  headline.textContent = "About";
  return headline;
}

function aboutText() {
  const text = document.createElement("p");
  text.textContent = `
  This new restaurant has a lot of bagna cauda
  `;
  return text;
}

function renderAbout() {
  renderPage(aboutHeadline(), aboutImg(), aboutText());
}

export { renderAbout };
