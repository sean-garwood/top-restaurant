export const clearContent = () => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
};
