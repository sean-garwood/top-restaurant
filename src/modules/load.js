// page load module
import { clearContent } from '../utils';
import { contact, home, menu } from '../modules';

export const load = (() => {
  const buttons = document.querySelectorAll('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      const callback = getFunctionName(buttons[i]);
      clearContent();
      callback();
    });
  }
})();

function getFunctionName(button) {
  const functions = {
    contact,
    home,
    menu
  };
  return functions[button.textContent.toLowerCase()];
}
