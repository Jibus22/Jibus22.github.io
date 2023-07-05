import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Projects");
  }

  async render(id) {
    const view = `
    <div class="page-container">
      <div class="page-content" id="home">
        <p>Project page in progress</p>
      </div>
    </div>
  `;
    document.querySelector(id).innerHTML = view;
  }
}
