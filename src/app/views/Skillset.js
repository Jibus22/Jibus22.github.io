import AbstractView from "./AbstractView.js";
import { skills, filterButtons } from "./data/skillset.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Skills");
  }

  async getSkills(data) {
    let displaySkills = data.map((item) => {
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
    return displaySkills.join("");
  }

  async addEvents() {
    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const category = e.currentTarget.dataset.id;
        let skillCategory;

        if (category === "all") {
          skillCategory = skills;
        } else {
          skillCategory = skills.filter((item) => {
            if (item.category.includes(category)) {
              return item;
            }
          });
        }
        document.querySelector(".skills-grid").innerHTML = await this.getSkills(
          skillCategory
        );
      });
    });
  }

  async render(id) {
    let displayButtons = filterButtons.map((item) => {
      return `
        <button class="filter-btn" data-id=${item.category}>
          <p><span class=${item.icon}></span> ${item.text}</p>
        </button>
      `;
    });
    displayButtons = displayButtons.join("");

    let displaySkills = await this.getSkills(skills);

    const view = `
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
    document.querySelector(id).innerHTML = view;

    this.addEvents();
  }
}
