//Start with empty ul and build navigation dynamically by ussing append, appendChild and innerHTML.

// Create an array that can hold your 4 sections.

const mainDivisions = ["seinen", "shonen", "shojo", "sports"]; // I have to find out how this can be actually the sections.

// hamburger menu functionality

function onClickMenu() {
  let hamburgerMenu = document.getElementsById("h__menu");
  hamburgerMenu.classList.toggle("change");
}
