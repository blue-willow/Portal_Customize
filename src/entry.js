import css from "./css/index.css";
import html from "./html/index.html";
import js from "./js/index.js";
(() => {
  const renderingModel = {
    name: "advanced-3tabs",
    html: html,
    css: css,
    js: js,
    headerColor: "",
    toolbarColor: "",
    hiddenPortalHeader: false,
    portalHeaderColor: "",
    customize_version: 1,
  };

  const KINTONE_PORTAL_DESIGNER_HTML = "kintone-portal-designer-html";
  const KINTONE_PORTAL_DESIGNER_CSS = "kintone-portal-designer-css";
  const KINTONE_PORTAL_DESIGNER_JS = "kintone-portal-designer-js";

  const addCustomizedContentTo = (model, entryPointEl) => {
    const styleEl = document.createElement("style");
    styleEl.innerHTML = model.css;
    styleEl.classList.add(KINTONE_PORTAL_DESIGNER_CSS);
    entryPointEl.appendChild(styleEl);

    const innerEl = document.createElement("div");
    innerEl.innerHTML = model.html;
    innerEl.classList.add(KINTONE_PORTAL_DESIGNER_HTML);
    entryPointEl.appendChild(innerEl);

    const scriptEl = document.createElement("script");
    scriptEl.innerHTML = model.js;
    scriptEl.classList.add(KINTONE_PORTAL_DESIGNER_JS);

    entryPointEl.appendChild(scriptEl);
  };

  const removeCustomizedContent = () => {
    const customizedEls = [
      document.getElementsByClassName(KINTONE_PORTAL_DESIGNER_JS)[0],
      document.getElementsByClassName(KINTONE_PORTAL_DESIGNER_HTML)[0],
      document.getElementsByClassName(KINTONE_PORTAL_DESIGNER_CSS)[0],
    ];
    customizedEls
      .filter((el) => {
        return !!el;
      })
      .forEach((el) => {
        el.parentNode.removeChild(el);
      });
  };

  kintone.events.on("portal.show", () => {
    removeCustomizedContent();
    addCustomizedContentTo(renderingModel, kintone.portal.getContentSpaceElement());
  });
})();
