export const displayContent = () => {
  const content = `
    <div class="page-container">
      <div class="page-content" id="home">
        <h1>Jean-Baptiste&#32;Le&nbsp;Corre</h1>
        <div class="prez">
          I am a <strong>software developer, sound operator</strong>, studying
          computer science at 42 school.
        </div>
        <div class="prez">
          Passionate and curious about tech. Exploring and digging several
          fields of computer science (system, cybersecurity, devops, data
          science, web).
        </div>
        <ul class="social">
          <li>
            <a
              class="tooltip"
              data-tooltip="github"
              href="https://github.com/Jibus22"
              target="_blank"
            >
              <span class="devicon-github-original"></span>
            </a>
          </li>
          <li>
            <a
              class="tooltip"
              data-tooltip="linkedin"
              href="https://www.linkedin.com/in/jle-corr/"
              target="_blank"
            >
              <span class="icon-linkedin-with-circle"></span>
            </a>
          </li>
          <li>
            <a
              class="tooltip"
              data-tooltip="mail"
              href="mailto:jeanbaptistelc@outlook.fr"
            >
              <span class="icon-envelope-o"></span>
            </a>
          </li>
          <li>
            <a
              class="tooltip"
              data-tooltip="Download resume"
              href="public/JBLC_EN_RESUME.pdf"
              target="_blank"
            >
              <span class="icon-file-text2"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  `;

  document.querySelector("#content").innerHTML = content;
};
