function renderPage(...contents) {
  // create and lay out all the components inside container
  const container = document.createElement("div");

  for (const c of contents) {
    content.appendChild(c);
  }

  // append content to proper container in html skeleton
  const element = document.getElementById("content");

  element.appendChild(container);
}

export { renderPage };
