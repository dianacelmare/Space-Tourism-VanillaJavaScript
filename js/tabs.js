const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener("keydown", changeTabFocus);

tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabPanel);
});

let tabFocus = 0;
async function changeTabFocus(e) {
  //console.log(e.keyCode)
  const keydownLeft = 37;
  const keydownRight = 39;

  //change the tabindex of the current tab to -1
  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    //console.log(test);
    console.log(tabs[tabFocus]);
    tabs[tabFocus].setAttribute("tabindex", -1);
  }
  //if the right key is pushed, move to the next tab on the right
  if (e.keyCode === keydownRight) {
    tabFocus++;
    console.log(tabFocus);
    if (tabFocus >= tabs.length) {
      tabFocus = 0;
    }
  }
  //if the left key is pushed, move to the next tab on the left
  if (e.keyCode === keydownLeft) {
    tabFocus--;
    console.log(tabFocus);
    if (tabFocus < 0) {
      tabFocus = tabs.length - 1;
    }
  }

  tabs[tabFocus].setAttribute("tabindex", 0);
  tabs[tabFocus].focus();
}

async function changeTabPanel(e) {
  const targetTab = e.target;
  // console.log(targetTab);
  const targetPanel = targetTab.getAttribute("aria-controls");
  const targetImage = targetTab.getAttribute("data-image")


  const tabContainer = targetTab.parentNode;
  const mainContainer = tabContainer.parentNode;

  // console.log(mainContainer.querySelector('[id="mars-tab"]'));
  //console.log( mainContainer.querySelector([`#${targetPanel}`]))
  //content changing
  mainContainer
    .querySelectorAll("article")
    .forEach((article) => article.setAttribute("hidden", true));
  mainContainer.querySelector([`#${targetPanel}`]).removeAttribute("hidden");


  //img changing
  mainContainer
    .querySelectorAll("picture")
    .forEach((pic) => pic.setAttribute("hidden", true));
  mainContainer.querySelector([`#${targetImage}`]).removeAttribute("hidden");

  //console.log(mainContainer);
}
