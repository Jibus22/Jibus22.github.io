export const displayFooter = () => {
  const footer = `
    <footer class="footer">
      <p><span>&#169;</span> 2023 Jean-Baptiste Le Corre</p>
    </footer>
  `;

  document.querySelector("#footer").innerHTML = footer;
};
