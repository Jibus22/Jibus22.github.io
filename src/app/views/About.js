import AbstractView from "./AbstractView.js";
import { about as data_about } from "./data/about.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("About");
  }

  async render(id) {
    let delay = 50;
    let displayAbout = data_about
      .map((item) => {
        const cards = item.cards;
        let diplayCards = cards
          .map((item) => {
            delay += 80;
            let displayKeywords = item.keywords
              .map((item) => {
                return `<span class="keyword">${item}</span>`;
              })
              .join("");
            return `
          <div class="card-style about-card" style="animation-delay:${delay}ms">
            <div class="about-card-prez">
              <h4>${item.subtitle}</h4>
              <h5>${item.subsubtitle}</h5>
              <div class="keywords">${displayKeywords}</div>
              <p>${item.prez}</p>
            </div>
            <div class="about-card-date">
              ${item.date}
            </div>
          </div>
        `;
          })
          .join("");

        return `
        <div class="about-section">
          <h2><span class=${item.icon}></span>&nbsp;&nbsp;${item.title}</h2>
          <div class="about-list">
            ${diplayCards}
          </div>
        </div>
      `;
      })
      .join("");

    const view = `
    <div class="page-container">
      <div class="page-content">
        <div class="about">
          ${displayAbout}
        </div>
      </div>
    </div>
  `;
    document.querySelector(id).innerHTML = view;
  }
}
