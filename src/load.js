// page load module
const content = document.getElementById('content');
import "./home.js";
export const load = (() => {
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const about = document.getElementById('about');
  const buttons = [home, menu, about];

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      content.innerHTML = '';
    });
  }

  home.addEventListener('click', () => {
    import('./home.js');
  });

  menu.addEventListener('click', () => {
    import('./menu.js');
  });

  about.addEventListener('click', () => {
    import('./about.js');
  });
})();
