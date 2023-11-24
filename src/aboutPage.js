

const createAboutPage = () => {
  const content = document.querySelector('#content');

  // Create Elements
  const pageContent = document.createElement('div');
  const h1 = document.createElement('h1');
  pageContent.classList.add('page-content');
  h1.textContent = `Kozoo!!`;
  

  // Appending All
  pageContent.appendChild(h1);
  content.appendChild(pageContent);
}

export default createAboutPage;