import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Skills");
  }

  async getHtml() {
    return `
    <div class="page-container">
      <div class="page-content">
        <div class="skillset">
          <h2>Skillset</h2>
          <p>A list of my technical skills.</p>
          <div class="skills-filters">
            <button class="filter-btn">
              <p><span class="icon-code"></span> Programming</p>
            </button>
            <button class="filter-btn">
              <p><span class="icon-music"></span> Audio</p>
            </button>
            <button class="filter-btn">
              <p><span class="icon-music"></span> Pouet</p>
            </button>
          </div>
          <div class="skills-grid">
            <div class="card-style skill-card">
              <div class="skill-icon">
                <span class="devicon-html5-plain"></span>
              </div>
              <div class="skill-prez">
                <p class="skill-title">html</p>
                <p class="skill-subtitle">web development</p>
              </div>
            </div>
            <div class="card-style skill-card">
              <div class="skill-icon">
                <span class="devicon-cplusplus-plain"></span>
              </div>
              <div class="skill-prez">
                <p class="skill-title">C++</p>
                <p class="skill-subtitle">programming</p>
              </div>
            </div>
            <div class="card-style skill-card">
              <div class="skill-icon">
                <span class="devicon-nodejs-plain"></span>
              </div>
              <div class="skill-prez">
                <p class="skill-title">Node.js</p>
                <p class="skill-subtitle">web development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  }
}
