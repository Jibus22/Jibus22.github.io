import AbstractView from "./AbstractView.js";
import { skills, filterButtons } from "./data/skillset.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Skills");
  }

  async getHtml() {
    let displaySkills = skills.map((item) => {
      return `
        <div class="card-style skill-card">
          <div class="skill-icon">
            <span class=${item.icon}></span>
          </div>
          <div class="skill-prez">
            <p class="skill-title">${item.title}</p>
            <p class="skill-subtitle">${item.subtitle}</p>
          </div>
        </div>
      `;
    });
    displaySkills = displaySkills.join("");

    let displayButtons = filterButtons.map((item) => {
      return `
        <button class="filter-btn">
          <p><span class=${item.icon}></span> ${item.text}</p>
        </button>
      `;
    });
    displayButtons = displayButtons.join("");

    return `
    <div class="page-container">
      <div class="page-content">
        <div class="skillset">
          <h2>Skillset</h2>
          <p>A list of my technical skills.</p>
          <div class="skills-filters">
            ${displayButtons}
          </div>
          <div class="skills-grid">
            ${displaySkills}
          </div>
        </div>
      </div>
    </div>
  `;
  }
}
