import AbstractView from "./AbstractView.js";
import { name, prez, social } from "./data/home.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }

  async render(id) {
    let displayPrez = prez.map((item) => {
      return `
        <div class="prez">
          ${item.content}
        </div>
    `;
    });
    displayPrez = displayPrez.join("");

    let displaySocial = social.map((item) => {
      return `
      <li>
        <a
          class=${item.class}
          data-tooltip=${item.dataTooltip}
          href=${item.href}
          target=${item.target}
        >
          <span class=${item.icon}></span>
        </a>
      </li>
    `;
    });
    displaySocial = displaySocial.join("");

    const view = `
    <div class="page-container">
      <div class="page-content">
        <div class="home">
          <h1>${name}</h1>
          ${displayPrez}
          <ul class="social">
            ${displaySocial}
          </ul>
        </div>
      </div>
    </div>
  `;
    document.querySelector(id).innerHTML = view;
  }
}
