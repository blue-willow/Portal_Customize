const buttonEls = Array.prototype.slice.call(document.querySelectorAll(".advanced-tab"));
const tabPanelEls = Array.prototype.slice.call(
  document.querySelectorAll(".advanced-panel-contents")
);

const removeAllButtonActive = () => {
  buttonEls.forEach((buttonEl) => {
    buttonEl.classList.remove("advanced-tab--active");
  });
};

const removeAllButtonExpanded = () => {
  buttonEls.forEach((buttonEl) => {
    buttonEl.setAttribute("aria-expanded", "false");
  });
};

const removeAllTabPanelActive = () => {
  tabPanelEls.forEach((tabPanelEl) => {
    tabPanelEl.classList.remove("advanced-panel-contents--active");
  });
};

const getTabNumber = (buttonEl) => {
  let number = 0;
  for (; number < buttonEls.length; number++) {
    if (buttonEls[number] === buttonEl) {
      break;
    }
  }
  return number;
};

const handleClick = (evt) => {
  removeAllButtonActive();
  evt.target.classList.add("advanced-tab--active");

  removeAllButtonExpanded();
  evt.target.setAttribute("aria-expanded", "true");

  const tabNumber = getTabNumber(evt.target);

  removeAllTabPanelActive();
  tabPanelEls[tabNumber].classList.add("advanced-panel-contents--active");
};

buttonEls.forEach((buttonEl) => {
  buttonEl.addEventListener("click", handleClick);
});
