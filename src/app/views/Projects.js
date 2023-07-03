import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Projects");
  }

  async getHtml() {
    return `
    <div class="page-container">
      <div class="page-content" id="home">
        <p>Project page in progress</p>
      </div>
    </div>
  `;
  }
}
