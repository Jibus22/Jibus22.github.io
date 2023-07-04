import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }

  async getHtml() {
    const name = "Jean-Baptiste&#32;Le&nbsp;Corre";
    const prez = [
      {
        content:
          "I am a <strong>software developer, sound operator</strong>, studying computer science at 42 school.",
      },
      {
        content:
          "Passionate and curious about tech. Exploring and digging several fields of computer science (system, cybersecurity, devops, data science, web).",
      },
    ];
    const social = [
      {
        class: "tooltip",
        dataTooltip: "github",
        href: "https://github.com/Jibus22",
        target: "_blank",
        icon: "devicon-github-original",
      },
      {
        class: "tooltip",
        dataTooltip: "linkedin",
        href: "https://www.linkedin.com/in/jle-corr/",
        target: "_blank",
        icon: "icon-linkedin-with-circle",
      },
      {
        class: "tooltip",
        dataTooltip: "mail",
        href: "mailto:jeanbaptistelc@outlook.fr",
        target: "_blank",
        icon: "icon-envelope-o",
      },
      {
        class: "tooltip",
        dataTooltip: "Download resume",
        href: "public/JBLC_EN_RESUME.pdf",
        target: "_blank",
        icon: "icon-file-text2",
      },
    ];

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

    return `
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
  }
}
