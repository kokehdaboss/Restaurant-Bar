

const createMenuPage = () => {
  const content = document.querySelector('#content');

  // Create Elements
  const pageContent = document.createElement('div');
  const menuBackground = document.createElement('div');
  const h1 = document.createElement('h1');
  const seaFoodMenu = document.createElement('div');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const p4 = document.createElement('p');
  const p5 = document.createElement('p');
  const p6 = document.createElement('p');
  const p7 = document.createElement('p');
  const p8 = document.createElement('p');
  const drinksMenu = document.createElement('div');
  const p9 = document.createElement('p');
  const p10 = document.createElement('p');
  const p11 = document.createElement('p');
  const p12 = document.createElement('p');
  const p13 = document.createElement('p');
  const p14 = document.createElement('p');
  const p15 = document.createElement('p');
  const p16 = document.createElement('p');

  // Assign Attributes
  pageContent.classList.add('page-content');
  menuBackground.classList.add('menu-background');
  menuBackground.style.backgroundRepeat = "no-repeat";
  menuBackground.style.backgroundPosition = "center";
  menuBackground.style.backgroundSize = "cover";
  seaFoodMenu.classList.add('seafood-menu');
  h1.textContent = `Our Menu`;
  p1.textContent = `Grilled Fish  --  ₦1,500`;
  p2.textContent = `Prawn Linguine    ₦2,000`;
  p3.textContent = `Fisherman's Stew  ₦2,500`;
  p4.textContent = `Crispy Calamari   ₦1,800`;
  p5.textContent = `Lobster Bisque    ₦3,000`;
  p6.textContent = `Garlic Butter Shrimp  ₦2,200`;
  p7.textContent = `Tuna Steak        ₦2,400`;
  p8.textContent = `Seafood Platter (Assorted)  ₦3,500`;
  drinksMenu.classList.add('drinks-menu');
  p9.textContent = `Fresh Fruit Juice  ---  ₦500`;
  p10.textContent = `Lemon Iced Tea  ---  ₦400`;
  p11.textContent = `Coconut Water  ---  ₦600`;
  p12.textContent = `Pineapple Mojito  ---  ₦800`;
  p13.textContent = `Sparkling Water  ---  ₦300`;
  p14.textContent = `Mango Smoothie  ---  ₦700`;
  p15.textContent = `Cranberry Spritzer  ---  ₦750`;
  p16.textContent = `Bottled Beer  ---  ₦1,000`;


  // Append All
  pageContent.appendChild(h1);
  pageContent.appendChild(menuBackground);
  menuBackground.appendChild(seaFoodMenu);
  seaFoodMenu.appendChild(p1);
  seaFoodMenu.appendChild(p2);
  seaFoodMenu.appendChild(p3);
  seaFoodMenu.appendChild(p4);
  seaFoodMenu.appendChild(p5);
  seaFoodMenu.appendChild(p6);
  seaFoodMenu.appendChild(p7);
  seaFoodMenu.appendChild(p8);
  menuBackground.appendChild(drinksMenu);
  drinksMenu.appendChild(p9);
  drinksMenu.appendChild(p10);
  drinksMenu.appendChild(p11);
  drinksMenu.appendChild(p12);
  drinksMenu.appendChild(p13);
  drinksMenu.appendChild(p14);
  drinksMenu.appendChild(p15);
  drinksMenu.appendChild(p16);
  content.appendChild(pageContent);
}

export default createMenuPage;