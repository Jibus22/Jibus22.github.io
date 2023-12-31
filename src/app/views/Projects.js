import AbstractView from "./AbstractView.js";
import { filterButtons, projects } from "./data/projects.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Projects");
  }

  async getProjects(data) {
    let displayProjects = data.map((item) => {
      let displayKeywords = "";
      if (item.keywords.length > 0) {
        displayKeywords = item.keywords.map((item) => {
          return `<span class="keyword">${item}</span>`;
        });
        displayKeywords = displayKeywords.join("");
      }

      return `
        <div class="project-card">
          <a href=${item.href} target="blank">
            <div class="project-thumbnail">
              <img src=${item.img}>
            </div>
            <div class="project-prez">
              <h3>${item.title}</h3>
              <p>${item.prez}</p>
            </div>
            <div class="project-keywords keywords">
              ${displayKeywords}
            </div>
          </a>
        </div>
      `;
    });
    return displayProjects.join("");
  }

  async addEvents() {
    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const category = e.currentTarget.dataset.id;
        let projectCategory;

        if (category === "all") {
          projectCategory = projects;
        } else {
          projectCategory = projects.filter((item) => {
            if (item.category.includes(category)) {
              return item;
            }
          });
        }
        document.querySelector(".projects-grid").innerHTML =
          await this.getProjects(projectCategory);
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

    let displayProjects = await this.getProjects(projects);

    const view = `
    <div class="page-container">
      <div class="page-content">
        <div class="projects">
          <h2>Projects</h2>
          <p>A selection of projects I've worked on throughout my engineering journey.</p>
          <div class="project-filters">
            ${displayButtons}
          </div>
          <div class="grid-style projects-grid">
            ${displayProjects}
          </div>
        </div>
      </div>
    </div>
  `;
    document.querySelector(id).innerHTML = view;

    this.addEvents();
  }
}
