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

    //if the right key is pushed, move to the next tab on the right
    if (e.keyCode === keydownRight) {
      tabFocus++;
      console.log(tabFocus);
      if (tabFocus >= tabs.length) {
        tabFocus = 0;
      }
    }else if (e.keyCode === keydownLeft) {
      tabFocus--;
      console.log(tabFocus);
      if (tabFocus < 0) {
        tabFocus = tabs.length - 1;
      }
    }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
  }
}

async function changeTabPanel(e) {
  const targetTab = e.target;
  // console.log(targetTab);
  const targetPanel = targetTab.getAttribute("aria-controls");
  const targetImage = targetTab.getAttribute("data-image");

  const tabContainer = targetTab.parentNode;
  const mainContainer = tabContainer.parentNode;

  //change the underline indicator in active
  tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false);

  targetTab.setAttribute("aria-selected", true);

  //console.log(mainContainer.querySelector('[id="mars-tab"]'));
  //console.log( mainContainer.querySelector([`#${targetPanel}`]))
  //content changing
  // mainContainer
  //   .querySelectorAll("article")
  //   .forEach((article) => article.setAttribute("hidden", true));

  hideContent(mainContainer, "article");
  // mainContainer.querySelector([`#${targetPanel}`]).removeAttribute("hidden");
  showContent(mainContainer, [`#${targetPanel}`]);

  //img changing
  // mainContainer
  //   .querySelectorAll("picture")
  //   .forEach((pic) => pic.setAttribute("hidden", true));

  hideContent(mainContainer, "picture");
  // mainContainer.querySelector([`#${targetImage}`]).removeAttribute("hidden");
  showContent(mainContainer, [`#${targetImage}`]);

  //console.log(mainContainer);
}
//Refactoring
function hideContent(parent, content) {
  //content changing
  parent
    .querySelectorAll(content)
    .forEach((item) => item.setAttribute("hidden", true));
}

function showContent(parent, content) {
  parent.querySelector(content).removeAttribute("hidden");
}
