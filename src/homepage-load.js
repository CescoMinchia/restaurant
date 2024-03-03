import "./homepage.css";
import enjoyablePlace from "./images/menu/enjoyable-place-desktop.jpg";
import locallySourced from "./images/menu/locally-sourced-desktop.jpg";
import familyGathering from "./images/menu/family-gathering-desktop.jpg";
import salmonImg from "./images/menu/salmon-desktop-tablet@2x.jpg";
import beefImg from "./images/menu/beef-desktop-tablet@2x.jpg";
import mousseImg from "./images/menu/chocolate-desktop-tablet@2x.jpg";

import { renderPage } from "./helper.js";

function createHeader() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const div = document.createElement("div");
  div.setAttribute("id", "hero-text");

  const h1 = document.createElement("h1");
  h1.setAttribute("id", "title");

  const article = document.createElement("article");

  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const button = document.createElement("button");

  wrapper.appendChild(div);
  div.appendChild(h1);
  div.appendChild(article);
  article.appendChild(h2);
  article.appendChild(p);
  article.appendChild(button);

  h1.textContent = "dine";
  h2.textContent = "Exquisite dining since 1989";
  p.textContent =
    "Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.";
  button.textContent = "Book a table";
  return wrapper;
}

function createUpperSection() {
  const section = document.createElement("section");
  section.setAttribute("id", "upperSection");

  const article1 = createArticle(
    enjoyablePlace,
    "Enjoyable place for all the family",
    "Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.",
  );
  const article2 = createArticle(
    locallySourced,
    "A few highlights from our menu",
    "We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.",
  );

  section.appendChild(article1);
  section.appendChild(article2);

  return section;
}

function createArticle(imgSrc, h3Text, pText) {
  const article = document.createElement("article");
  const img = document.createElement("img");
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  article.appendChild(img);
  article.appendChild(div);
  div.appendChild(h3);
  div.appendChild(p);

  img.src = imgSrc;
  h3.textContent = h3Text;
  p.textContent = pText;
  return article;
}

function createMidSection() {
  const section = document.createElement("section");
  section.setAttribute("id", "midSection");

  const article = document.createElement("article");

  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  const cardsContainer = createCardsContainer();

  section.appendChild(article);
  article.appendChild(div);
  div.appendChild(h3);
  div.appendChild(p);
  article.appendChild(cardsContainer);

  h3.textContent = "A few highlights from our menu";
  p.textContent =
    "We cater for all dietary requirements, but here's a glimpse at some of our diner's favourites. Our menu is revamped every season.";
  return section;
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
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");

  const div = document.createElement("div");

  const h4 = document.createElement("h4");
  const p = document.createElement("p");

  img.src = imgUrl;
  card.appendChild(img);
  card.appendChild(div);
  div.appendChild(h4);
  div.appendChild(p);

  h4.textContent = hText;
  p.textContent = pText;

  return card;
}

function createLowerSection() {
  const section = document.createElement("section");
  section.setAttribute("id", "lowerSection");

  const div = document.createElement("div");
  div.classList.add("lowerSection-container");

  const img = document.createElement("img");

  const article = document.createElement("article");

  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const button = document.createElement("button");

  section.appendChild(div);
  div.appendChild(img);
  div.appendChild(article);
  article.appendChild(h3);
  article.appendChild(p);
  article.appendChild(button);

  img.src = familyGathering;
  h3.textContent = "Family Gathering";
  p.textContent =
    "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.";
  button.textContent = "Book a table";
  return section;
}

function renderHomepage() {
  const mainContainer = document.getElementById("content");
  mainContainer.removeAttribute("class");
  mainContainer.classList.add("header-homepage");

  renderPage(
    createHeader(),
    createUpperSection(),
    createMidSection(),
    createLowerSection(),
  );
}

export { renderHomepage };
