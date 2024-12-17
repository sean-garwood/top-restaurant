export const contact = () => {
  const contactHeader = document.createElement('h2');
  contactHeader.textContent = 'Contact Us';
  content.appendChild(contactHeader);

  const contactDiv = document.createElement('div');
  contactDiv.id = 'contact';
  content.appendChild(contactDiv);

  const contactP = document.createElement('p');
  contactP.textContent = 'Calabasas Restaurant is located at 123 Main Street, Calabasas, CA 90210. Our hours of operation are Monday through Friday from 11:00 am to 9:00 pm and Saturday and Sunday from 10:00 am to 10:00 pm. For reservations, please call (818) 123-4567.';
  contactDiv.appendChild(contactP);
  import('./load.js')
}
