import "./menu.css";
import salmonImg from "./images/menu/salmon-desktop-tablet@2x.jpg";
import beefImg from "./images/menu/beef-desktop-tablet@2x.jpg";
import mousseImg from "./images/menu/chocolate-desktop-tablet@2x.jpg";
import { renderPage } from "./helper.js";

function createArticle() {
  const article = document.createElement("article");
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  article.appendChild(div);
  div.appendChild(h3);
  div.appendChild(p);

  h3.textContent = "A few highlights from our menu";
  p.textContent =
    "We cater for all dietary requirements, but here's a glimpse at some of our diner's favourites. Our menu is revamped every season.";

  return article;
}

function createCardsContainer() {
  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cardsContainer");

  const card1 = createCard(
    salmonImg,
    "Seared Salmon Fillet",
    "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
  );

  const card2 = createCard(
    beefImg,
    "Rosemary Filet Mignon",
    "Our prime beef served to your taste with a delicious choice of seasonal sides.",
  );

  const card3 = createCard(
    mousseImg,
    "Summer Fruit Chocolate Mousse",
    "Creamy mousse combined with summer fruits and dark chocolate shavings.",
  );

  cardsContainer.appendChild(card1);
  cardsContainer.appendChild(card2);
  cardsContainer.appendChild(card3);

  return cardsContainer;
}

function createCard(imgUrl, hText, pText) {
  const div = document.createElement("div");
  div.classList.add("card");

  const img = document.createElement("img");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");

  img.src = imgUrl;
  div.appendChild(img);
  div.appendChild(h4);
  div.appendChild(p);

  h4.textContent = hText;
  p.textContent = pText;

  return div;
}

function renderMenu() {
  renderPage(createArticle(), createCardsContainer());
}

export { renderMenu };
