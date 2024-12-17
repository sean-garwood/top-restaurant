export const menu = () => {
  const menuHeader = document.createElement('h2');
  menuHeader.textContent = 'Menu';
  content.appendChild(menuHeader);

  const div = document.createElement('div');
  div.id = 'menu';
  content.appendChild(div);

  const p = document.createElement('p');
  p.textContent = "If you don't know, chilaquiles is a crummy Mexican dish of crumbled tortilla chips stirred in with scrambled eggs and salsa. It is crass and shitty. It is no good and not a nice dish.";
  div.appendChild(p);
}
