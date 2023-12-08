const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

let tabFocus = 0;

//Scrolling through the tablist with the keyboard
tabList.addEventListener("keydown", (e) => {
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
  }
  //if the left key is pushed, move to the next tab on the left
  if (e.keyCode === keydownLeft) {
    tabFocus--;
    console.log(tabFocus);
  }

  if (e.keyCode === keydownRight && tabFocus === 4) {
    tabFocus = 0;
  }

  tabs[tabFocus].setAttribute("tabindex", 0);
  tabs[tabFocus].focus();
});
