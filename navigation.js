//Create navigation ul with li items that you can anchor your sections to.
const myUl = document.querySelector("#navigation");

for (let i = 1; i < 5; i++) {
  const myNavList = document.createElement("li");
  myNavList.classList.add("nav-link");
  const a = document.createElement("a");
  myUl.append(myNavList);
  myNavList.append(a);
}

document.querySelectorAll("#navigation a").forEach((a) => {
  a.addEventListener("click", (event) => {
    event.preventDefault();
    const id = a.getAttribute("href");
    const section = document.querySelector(id);
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
}); // Will need help to refactor this

//I am setting the attribute to each <a> and the text content to be displayed.

const seinenNavLink = document.getElementsByTagName("a")[0];
const shonenNavLink = document.getElementsByTagName("a")[1];
const shojoNavLink = document.getElementsByTagName("a")[2];
const sportsNavLink = document.getElementsByTagName("a")[3];
seinenNavLink.textContent = "Seinen";
seinenNavLink.setAttribute("href", "#seinen");
shonenNavLink.textContent = "Shonen";
shonenNavLink.setAttribute("href", "#shonen");
shojoNavLink.textContent = "Shojo";
shojoNavLink.setAttribute("href", "#shojo");
sportsNavLink.textContent = "Sports";
sportsNavLink.setAttribute("href", "#sports");
// I want to add text for each element in an array
/*const names = [seinen, shonen, shojo, sports];
const getEachLink = function () {
  for (let i = 0; i < 4; i++) {
    const navLinks = document.getElementsByTagName("a")[i];
    navLinks.textContent = "";
  }
};*/
const sections = document.querySelectorAll("[data-nav]");
