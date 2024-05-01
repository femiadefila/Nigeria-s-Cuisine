const header = document.querySelector("header");

window.addEventListener("scroll", function(){
  header.classList.toggle("sticky", window.scrollY > 0);
});


let menu = document.querySelector("#menu-icon");
let navmenu = document.querySelector(".navmenu");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
} 



// Fetch the JSON file containing the menu data
fetch("../menu.json")
.then(response => response.json())
  .then(data => renderMenu(data))
  .catch(error => console.error('Error fetching menu data:', error));

function renderMenu(menuData) {
  const menuContainer = document.querySelector('.menu-container');

  menuData.forEach(item => {
    const menuItemDiv = document.createElement('div');
    menuItemDiv.className = 'menu-item';

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.name;

    const name = document.createElement('h2');
    name.textContent = item.name;

    const description = document.createElement('p');
    description.textContent = item.description;

    const price = document.createElement('p');
    price.textContent = `${item.price}`;
    price.classList.add('price');

    const orderButton = document.createElement('button');
    orderButton.textContent = 'Order Now';
    orderButton.classList.add('order-button');

    const rating = document.createElement('p');
    rating.textContent = `${item.rating}`;
    rating.classList.add('rating');

    menuItemDiv.append(image, name, description, price, rating, orderButton);
    menuContainer.appendChild(menuItemDiv);
  });
}
