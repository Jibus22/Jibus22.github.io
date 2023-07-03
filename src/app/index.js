import { displayNavbar } from "./navbar";
import { displayFooter } from "./footer";
import { router } from "./router";

window.addEventListener("popstate", router);

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#app").innerHTML = `
    <div id="navbar"></div>
    <div id="content"></div>
    <div id="footer"></div>
    `;

  displayNavbar();
  displayFooter();
  router();
});
