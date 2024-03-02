// import restaurant from "./images/hero-restaurant.jpg";
import { renderPage } from "./helper.js";

function homeImg() {
  const heroImg = document.createElement("img");
  // heroImg.src = restaurant;

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
  renderPage(homeImg(), homeText());
}

export { renderHomepage };
