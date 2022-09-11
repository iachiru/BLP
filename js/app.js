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

// Determine the current viewport and highlight section and navbar

window.addEventListener("scroll", markSection);

function markSection() {
  let pagescrollY = window.pageYOffset;

  mainSections.forEach((current) => {
    // get the current position
    const sectionHeight = current.offsetHeight;

    //confirm you are at the top of the section you want by checking data-nav
    const topOfSection =
      current.getBoundingClientRect().top + pagescrollY - 150;
    sectionId = current.getAttribute("data-nav");

    // if the scroll has taken you a bit over the top of your required section but not out of it on either side,  add a active status to your navbar and the section you are on
    if (
      pagescrollY > topOfSection &&
      pagescrollY <= topOfSection + sectionHeight
    ) {
      document.getElementById(sectionId).classList.add("active-navbar");
      current.classList.add("section-active");
    }
    // if you are out of the section remove the active class and return to default behaviour
    else {
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
