import "./form.css";
// import piazzaGalimbertiImg from "./images/piazza galimberti.jpeg";
import { renderPage } from "./helper.js";

function createArticle() {
  const article = document.createElement("article");
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  article.appendChild(div);
  div.appendChild(h2);
  div.appendChild(p);
  h2.textContent = "Reservations";
  p.textContent =
    "We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.";
  return article;
}

function createForm() {
  const form = document.createElement("form");
  form.setAttribute("method", "GET");
  form.setAttribute("novalidate", true);

  const error = document.createElement("span");
  error.classList.add("error");
  error.setAttribute("aria-live", "polite");

  const email = createInput("email", "email", "email", "Email");
  const country = createInput("text", "country", "country", "Country");
  country.setAttribute("minlength", 2);

  const zipCode = createInput(
    "text",
    "zipCode",
    "zipCode",
    "Zip Code",
    "([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))s?[0-9][A-Za-z]{2})",
  );

  const password = createInput(
    "password",
    "password",
    "password",
    "Password",
    "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$",
  );

  const passwordConfirm = createInput(
    "password",
    "passwordConfirm",
    "passwordConfirm",
    "Confirm Password",
  );

  const submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Register");
  submitButton.setAttribute("disabled", "true");

  form.appendChild(error);
  form.appendChild(email);
  form.appendChild(country);
  form.appendChild(zipCode);
  form.appendChild(password);
  form.appendChild(passwordConfirm);
  form.appendChild(submitButton);

  // event binding
  //   const errorList = { email: [], country: [], zipCode: [], password: [] };

  //   email.addEventListener("input", (event) => {
  //     if (email.validity.valid) {
  //       error.textContent = ""; // Reset the content of the message
  //       error.className = "error"; // Reset the visual state of the message
  //       errorList["email"] = [];
  //     }
  //     if (email.validity.valueMissing) {
  //       item = "You need to enter an email address.";
  //       if (!errorList["email"].includes(item)) errorList["email"].push(item);
  //     } else if (email.validity.typeMismatch) {
  //       item = "Entered value needs to be an email address.";
  //       if (!errorList["email"].includes(item)) errorList["email"].push(item);
  //     }
  //   });

  //   country.addEventListener("input", (event) => {
  //     if (country.validity.valid) {
  //       error.textContent = ""; // Reset the content of the message
  //       error.className = "error"; // Reset the visual state of the message
  //       errorList["country"] = [];
  //     }
  //     if (country.validity.valueMissing) {
  //       item = "You need to enter a country.";
  //       if (!errorList["country"].includes(item)) errorList["country"].push(item);
  //     } else if (country.validity.tooShort) {
  //       item = "Country too short.";
  //       if (!errorList["country"].includes(item)) errorList["country"].push(item);
  //     }
  //   });

  //   zipCode.addEventListener("input", (event) => {
  //     if (zipCode.validity.valid) {
  //       error.textContent = ""; // Reset the content of the message
  //       error.className = "error"; // Reset the visual state of the message
  //       errorList["zipCode"] = [];
  //     }
  //     if (zipCode.validity.valueMissing) {
  //       item = "You need to enter a zipcode.";
  //       if (!errorList["zipCode"].includes(item)) errorList["zipCode"].push(item);
  //     } else if (zipCode.validity.patternMismatch) {
  //       item = "Not a proper zip code.";
  //       if (!errorList["zipCode"].includes(item)) errorList["zipCode"].push(item);
  //     }
  //   });

  //   password.addEventListener("input", (event) => {
  //     if (password.validity.valid) {
  //       error.textContent = ""; // Reset the content of the message
  //       error.className = "error"; // Reset the visual state of the message
  //       errorList["password"] = [];
  //     }
  //     if (password.validity.valueMissing) {
  //       item = "You need to enter a password.";
  //       if (!errorList["password"].includes(item))
  //         errorList["password"].push(item);
  //     } else if (password.validity.patternMismatch) {
  //       item =
  //         "Password must contain at least a letter, a number, and must have length at least 8.";
  //       if (!errorList["password"].includes(item))
  //         errorList["password"].push(item);
  //     }
  //     if (password.value !== passwordConfirm.value) {
  //       item = "Please confirm password.";
  //       if (!errorList["password"].includes(item))
  //         errorList["password"].push(item);
  //     }
  //   });

  //   const fields = [email, country, zipCode, password];

  //   form.addEventListener("submit", (event) => {
  //     for (let f of fields) {
  //       let event = new Event("input", {
  //         bubbles: true,
  //       });
  //       f.dispatchEvent(event);
  //     }

  //     error.textContent = "";
  //     let highFive = true;
  //     for (const [key, value] of Object.entries(errorList)) {
  //       if (errorList[key].length > 0) {
  //         showError(key);
  //         highFive = false;
  //         // event.preventDefault();
  //       }
  //     }
  //     if (highFive) {
  //       alert("High Five!");
  //     }
  //     event.preventDefault();
  //   });

  //   function showError(key) {
  //     errorList[key].forEach((errMessage) => {
  //       error.textContent += errMessage + " ";
  //     });
  //     // Set the styling appropriately
  //     error.className = "error active";
  //   }

  return form;
}

function createInput(type, id, name, placeholder, pattern = "") {
  const input = document.createElement("input");
  input.setAttribute("required", true);
  input.classList.add("text-line");
  input.setAttribute("type", type);
  input.setAttribute("id", id);
  input.setAttribute("name", name);
  input.setAttribute("placeholder", placeholder);
  input.setAttribute("pattern", pattern);
  return input;
}

function renderContact() {
  renderPage(createArticle(), createForm());
}

export { renderContact };
