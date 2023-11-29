import createAboutPage from "./aboutPage";
import createhomePage from "./homePage";
import createMenuPage from "./menuPage";


const createNavBar = () => {
  const content = document.querySelector('#content');

  // Create Elements
  const navbarHolder = document.createElement('div');
  const home = document.createElement('div');
  const menu = document.createElement('div');
  const about = document.createElement('div');

  // Assign IDs to Elements
  home.setAttribute('id', 'homeTab');
  menu.setAttribute('id', 'menuTab');
  about.setAttribute('id', 'aboutTab');

  // Assign ClassNames
  navbarHolder.classList.add('navbar-holder');
  home.classList.add('homeTab');
  menu.classList.add('menuTab');
  about.classList.add('aboutTab');

  // Assign TextContent
  home.textContent = `Home`;
  menu.textContent = `Menu`;
  about.textContent = `About`;

  // Append to Content
  navbarHolder.appendChild(home);
  navbarHolder.appendChild(menu);
  navbarHolder.appendChild(about);
  content.appendChild(navbarHolder);

  // Adding event listeners
  home.addEventListener('click', () => {
    clearContent();
    createhomePage();
  })
  menu.addEventListener('click', () => {
    clearContent();
    createMenuPage();
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