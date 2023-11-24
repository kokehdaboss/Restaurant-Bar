
const createhomePage = () => {
  const DOMcontent = document.querySelector('#content');

  // Create Elements
  const pageContent = document.createElement('div');
  const h1 = document.createElement('h1');
  const img = document.createElement('img');
  const p = document.createElement('p');

  // Assign ClassList, Text Content & Image Src
  pageContent.classList.add('page-content');
  h1.textContent = `Welcome to Our Restaurant`;
  img.src = `/5211696_2725037--45.jpg`;
  p.textContent = `Order Anything you want`;

  // Append All
  pageContent.appendChild(h1);
  pageContent.appendChild(img);
  pageContent.appendChild(p);
  DOMcontent.appendChild(pageContent);
}

export default createhomePage;
