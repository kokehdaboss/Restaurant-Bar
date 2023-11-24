import createAboutPage from "./aboutPage";
import createhomePage from "./homePage";


const createNavBar = () => {
  const content = document.querySelector('#content');

  // Create Elements
  const home = document.createElement('div');
  const menu = document.createElement('div');
  const about = document.createElement('div');

  // Assign IDs to Elements
  home.setAttribute('id', 'homeTab');
  menu.setAttribute('id', 'menuTab');
  about.setAttribute('id', 'aboutTab');

  // Assign ClassNames
  home.classList.add('homeTab');
  menu.classList.add('menuTab');
  about.classList.add('aboutTab');

  // Assign TextContent
  home.textContent = `Home`;
  menu.textContent = `Menu`;
  about.textContent = `About`;

  // Append to Content
  content.appendChild(home);
  content.appendChild(menu);
  content.appendChild(about);

  // Adding event listeners
  home.addEventListener('click', () => {
    clearContent();
    createhomePage();
  })
  about.addEventListener('click', () => {
    clearContent();
    createAboutPage();
  })
}

function clearContent() {
  const content = document.querySelector('#content');
  const pageContent = document.querySelector('.page-content');
  if (pageContent){
    content.removeChild(pageContent);
  };
};

export default createNavBar;