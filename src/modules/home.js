export const home = () => {
  const homeHeader = document.createElement('h1');
  homeHeader.textContent = 'Calabasas Restaurant';
  content.appendChild(homeHeader);

  const div = document.createElement('div');
  div.id = 'home';
  content.appendChild(div);

  const h2 = document.createElement('h2');
  h2.textContent = 'Welcome to Calabasas Restaurant';
  div.appendChild(h2);

  const p = document.createElement('p');
  p.textContent = 'Calabasas Restaurant is a family-owned restaurant that has been serving the community since 2001. We specialize in chilaquiles, a traditional Mexican dish that consists of fried tortillas, salsa, and cheese. Our chilaquiles are made fresh daily and are served with your choice of meat, beans, and rice. We also offer a variety of other Mexican dishes, including tacos, burritos, and enchiladas. Come visit us today and experience the authentic flavors of Mexico!';
  div.appendChild(p);
}
