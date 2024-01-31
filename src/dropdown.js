function toggleDropdownMenu() {
  let element = document.getElementById("dropdown");
  element.classList.toggle("show");
}

function closeDropdownMenu() {
  let element = document.getElementById("dropdown");
  element.classList.remove("show");
}

export { toggleDropdownMenu, closeDropdownMenu };
