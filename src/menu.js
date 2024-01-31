import "./style.css";
import piazzaGalimbertiImg from "./images/piazza galimberti.jpeg";
import { renderPage } from "./helper.js";

// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => {
//     images[item.replace("./", "")] = r(item);
//   });
//   return images;
// }

//<img src={images["doggy.png"]} />;

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

function carousel() {
  // import all images from carousel folder
  // const images = importAll(
  //   require.context("./images/carousel", false, /\.(png|jpe?g|svg)$/),
  // );
  const container = document.createElement("div");
  container.classList.add("carousel");

  const img = document.createElement("img");
  img.src = piazzaGalimbertiImg;

  container.appendChild(img);
  // img.setAttribute("height", "50px");
  // img.setAttribute("width", "auto");
  return container;
}

function menuText() {
  const text = document.createElement("p");
  text.textContent = `
  This new restaurant has a lot of bagna cauda
  `;
  return text;
}

function renderMenu() {
  renderPage(carousel(), menuText());
}

export { renderMenu };
