import { navigateTo } from "./router";

const addEvents = () => {
  const themeToggleBtn = document.querySelector(".theme-toggle");
  const iconTheme = themeToggleBtn.querySelector(".icon-theme");
  const dropDownMenu = document.querySelector(".drop-down-menu");
  const menuToggle = document.querySelector(".menu-toggle");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const currentTheme = localStorage.getItem("theme");
  const navigate = document.querySelectorAll(".navigate");

  navigate.forEach((navlink) => {
    navlink.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(navlink.pathname);
    });
  });

  menuToggle.addEventListener("click", () => {
    const icon = menuToggle.getElementsByTagName("i")[0];
    icon.classList.toggle("icon-menu1");
    icon.classList.toggle("icon-clear");
    dropDownMenu.classList.toggle("show-drop-down-menu");
  });

  if (currentTheme == "dark") {
    document.documentElement.classList.add("dark-theme");
    iconTheme.classList.add("dark-theme");
  } else if (currentTheme == "light") {
    document.documentElement.classList.add("light-theme");
    iconTheme.classList.add("light-theme");
  }

  themeToggleBtn.addEventListener("click", () => {
    const root = document.documentElement;
    let theme;

    if (prefersDarkScheme.matches) {
      theme = root.classList.toggle("light-theme") ? "light" : "dark";
      iconTheme.classList.toggle("light-theme");
    } else {
      theme = root.classList.toggle("dark-theme") ? "dark" : "light";
      iconTheme.classList.toggle("dark-theme");
    }
    localStorage.setItem("theme", theme);
  });
};

export const displayNavbar = () => {
  const links = [
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Skillset",
      href: "/skillset",
    },
    {
      title: "About",
      href: "/about",
    },
  ];
  let displayNavLinks = links.map((item) => {
    return `<li><a class="navigate" href=${item.href}>${item.title}</a></li>`;
  });
  displayNavLinks = displayNavLinks.join("");
  let displayDropDownLinks = links.map((item) => {
    return `<a class="navigate" href=${item.href}>${item.title}</a>`;
  });
  displayDropDownLinks = displayDropDownLinks.join("");

  const navBar = `
    <div class="nav-bar">
      <div class="nav-header">
        <button class="menu-toggle">
          <i class="icon-menu1"></i>
        </button>
        <a class="home-logo-container navigate" href="/">
          <img src="/favicon.svg" alt="home logo" class="home-logo" />
        </a>
        <nav class="links">
          <ul class="nav-links">
            ${displayNavLinks}
          </ul>
        </nav>
        <button class="theme-toggle">
          <i class="icon-theme"></i>
        </button>
      </div>
      <nav class="drop-down-menu">
        ${displayDropDownLinks}
      </nav>
    </div>
  `;
  document.querySelector("#navbar").innerHTML = navBar;

  addEvents();
};

export const displayFooter = () => {
  const date = new Date().getFullYear();
  const footer = `
    <footer class="footer">
      <p><span>&#169;</span> ${date} Jean-Baptiste Le Corre</p>
    </footer>
  `;

  document.querySelector("#footer").innerHTML = footer;
};
