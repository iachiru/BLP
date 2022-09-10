// selects every section
const mainSections = document.querySelectorAll("[data-nav]");

// store the ul  in a variable to be able to add the li elements
let navUl = document.getElementById("navigation");

// for each section create an li item with an attribute that
// can be used like link between nav and sections.

// loop over each section
mainSections.forEach((section) => {
  sectionTitle = section.getAttribute("data-nav");

  // create li item with an id with the same name as the data-nav
  // for each section that will serve as link
  let li = document.createElement("li");
  li.setAttribute("id", sectionTitle);
  li.addEventListener("click", function (event) {
    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  });

  //create a title for the li in the nav that serves as anchor
  //append both the title and the li items to the ul
  let title = document.createTextNode(sectionTitle);
  li.append(title);
  navUl.appendChild(li);
});

// hamburger menu functionality

const hamburgerMenu = document.querySelector("#h__menu");
const navigationMenu = document.querySelector("#navigation");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navigationMenu.classList.toggle("active");
});

window.addEventListener("scroll", markSection);

function markSection() {
  let pageScrollY = window.pageYOffset;

  mainSections.forEach((current) => {
    const sectionHeight = current.offsetHeight;

    const topOfSection =
      current.getBoundingClientRect().top + pageScrollY - 150;
    sectionId = current.getAttribute("data-nav");
    if (scrollY > topOfSection && scrollY <= topOfSection + sectionHeight) {
      document.getElementById(sectionId).classList.add("active-navbar");
      current.classList.add("section-active");
    } else {
      document.getElementById(sectionId).classList.remove("active-navbar");
      current.classList.remove("section-active");
    }
  });
}

// Form submision alert

const form = document.querySelector("#user-form");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  alert("Your suggestions have been subbmited succesfully!");
});
