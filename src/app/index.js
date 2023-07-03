import { displayNavbar } from "./navbar";
import { displayFooter } from "./footer";
import { displayContent } from "./content";

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#app").innerHTML = `
    <div id="navbar"></div>
    <div id="content"></div>
    <div id="footer"></div>
`;

  displayNavbar();
  displayContent();
  displayFooter();
});
