import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Skills");
  }

  async getHtml() {
    return `
    <div class="page-container">
      <div class="page-content" id="home">
        <p>Skillset page in progress</p>
      </div>
    </div>
  `;
  }
}
