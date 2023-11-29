import aboutImg from './top-view-cocktail-essentials-with-mint-shaker-copy-space.jpg';

const createAboutPage = () => {
  const content = document.querySelector('#content');

  // Create Elements
  const pageContent = document.createElement('div');
  const h1 = document.createElement('h1');
  const img = document.createElement('img');
  const p = document.createElement('p');
  const contactDiv = document.createElement('div');
  const contactParagraph = document.createElement('p');

  // Add Attributes
  pageContent.classList.add('page-content');
  h1.textContent = `About Us`;
  img.src = aboutImg;
  p.textContent = `lorem ipsum`;
  contactDiv.classList.add('contact-div');
  contactParagraph.textContent = `Contact Us: `;

  // Appending All
  pageContent.appendChild(h1);
  pageContent.appendChild(img);
  pageContent.appendChild(p);
  pageContent.appendChild(contactDiv);
  pageContent.appendChild(contactParagraph);
  content.appendChild(pageContent);
}

export default createAboutPage;