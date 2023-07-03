const themeToggleBtn = document.querySelector(".theme-toggle");
const iconTheme = themeToggleBtn.querySelector(".icon-theme");
const dropDownMenu = document.querySelector(".drop-down-menu");
const menuToggle = document.querySelector(".menu-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

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
