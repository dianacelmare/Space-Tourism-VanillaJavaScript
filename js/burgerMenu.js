// when someone clicks the hamburger button
// if the nav is closed, open it
// if the nav is open, close it
const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded","true"); //tells us the state of the nav for the screen readers
  } else if(visibility==="true"){
    primaryNav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded","false"); 

  }
});
