import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("About");
  }

  async getHtml() {
    const about = [
      {
        title: "Education",
        icon: "icon-graduation-cap",
        cards: [
          {
            date: "2020 - present",
            subtitle: "Digital technologies architect",
            subsubtitle: "42 Paris",
            keywords: [
              "Computer Science",
              "System",
              "Embedded",
              "Data-Science",
              "Security",
              "Web",
              "Devops",
              "Algorithmic",
            ],
            prez: "42 teaches code through projects. The student is autonomous and can only rely on documentation and peers to succeed. This process leads us to learn about computer architecture and memory, many programming languages and their paradigms, data structures and algorithms, design patterns, multi-threading, web architecture, etc. The student's course ends with one or more internships or a work-study program.",
          },
          {
            date: "2012 - 2014",
            subtitle: "BTEC in audiovisual - audio specialization",
            subsubtitle: "Lycée Léonard de Vinci, Montaigu",
            keywords: [
              "Physics",
              "Signal study",
              "Electronics",
              "Equipment theory and methodology",
              "Production",
              "Post-production",
            ],
            prez: "Equipment theory and methodology classes teaches how a microphone, a speaker, a magnetic recorder, a tv screen, a hard drive, signal transmission, signal encoding, network norms (…) works. Practice courses are focused to make students practise tools and technologies with some homeworks and projects. Usage of audio device to work on stage or in post-production: sound-device mixers, yamaha 02R96 - protools, digidesign C24 (…).",
          },
        ],
      },
      {
        title: "Career",
        icon: "icon-briefcase",
        cards: [
          {
            date: "2014 - 2022",
            subtitle: "Sound engineer",
            subsubtitle: "Self-employed and Freelance",
            keywords: ["Live mixing", "Live broadcasting"],
            prez: "Productions for small filming companies. Volunteer in documentary filming (Mongolia, Kyrgyzstan) and live music recording and mixing.",
          },
          {
            date: "2014 - 2019",
            subtitle: "Audio technician",
            subsubtitle: "AMP Visual TV",
            keywords: ["Worldwide TV production"],
            prez: "Salaried in this french leader company in tv filming. Microphones, audio equipments, intercom systems and wireless installation. I worked on notable events like: UCI Road World Championships, Africa Cup of Nations, FIFA World Cup, African Games.",
          },
        ],
      },
      {
        title: "Interests",
        icon: "icon-star",
        cards: [
          {
            date: "",
            subtitle: "Associations",
            subsubtitle: "",
            keywords: ["Videobus", "Le fieald"],
            prez: "Videobus is an association helping organizations to teach filmaking to children. Le Fieald is an association which promotes and organizes open stages for stand-up. The shows are punctuated by a music group. I was a volunteer sound engineer.",
          },
          {
            date: "",
            subtitle: "Sport",
            subsubtitle: "",
            keywords: ["Basketball", "Climbing", "Bmx", "Sailing", "Judo"],
            prez: "",
          },
          {
            date: "",
            subtitle: "Music",
            subsubtitle: "",
            keywords: ["Guitar"],
            prez: "",
          },
        ],
      },
    ];

    let displayAbout = about.map((item) => {
      const cards = item.cards;
      let diplayCards = cards.map((item) => {
        let displayKeywords = item.keywords.map((item) => {
          return `<span class="keyword">${item}</span>`;
        });
        displayKeywords = displayKeywords.join("");

        return `
          <div class="about-card">
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
      });
      diplayCards = diplayCards.join("");

      return `
        <div class="about-section">
          <h2><span class=${item.icon}></span>&nbsp;&nbsp;${item.title}</h2>
          <div class="about-list">
            ${diplayCards}
          </div>
        </div>
      `;
    });
    displayAbout = displayAbout.join("");

    return `
    <div class="page-container">
      <div class="page-content">
        <div class="about">
          ${displayAbout}
        </div>
      </div>
    </div>
  `;
  }
}
