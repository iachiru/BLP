//Start with empty ul and build navigation dynamically by ussing append, appendChild and innerHTML.

// Create an array that can hold your 4 sections.

//declared every section

const seinen = document.querySelector("#seinen");
const shonen = document.querySelector("#shonen");
const shojo = document.querySelector("#shojo");
const sports = document.querySelector("#sports");

//contained the variables in an array
const mainDivisions = [seinen, shonen, shojo, sports];

// hamburger menu functionality

const hamburgerMenu = document.querySelector("#h__menu");
const navigationMenu = document.querySelector("#navigation");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navigationMenu.classList.toggle("active");
});

// Remove the navigation menu when clicking on one of the links.
// Might not want this, but it's an option

/*document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navigationMenu.classList.remove("active");
  })
);*/

//Helper function to check if a section is in the viewport
// this function returns a boolean: true or false

function inViewport(element) {
  const position = element.getBoundingClientRect();
  return (
    position.top >= 0 &&
    position.left >= 0 &&
    position.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    position.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

//This function adds an Event Listener, that will do something if the object is in the viewport.

/*const message = document.querySelector(".message");*/

/*document.addEventListener(
  "scroll",
  function () {
    if(inViewport() === true) {
      document.querySelector().classList.add(".active");}
      else { 
        document.querySelector().classList.remove(".active");
      };

});*/ //Need to decide what I want the function to do when section is in viewport. But it works
