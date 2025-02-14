// script.js

// Product Data
const products = [
    { id: 1, name: 'Chicken Fry', price: 200 },
    { id: 2, name: 'Fish Tikka', price: 400 }, 
    { id: 3, name: 'kashmiri Kabab', price: 50 },
    { id: 4, name: 'Butter Chicken', price: 150 },
    { id: 5, name: 'Aslam Kheer', price: 90 }, 
    { id: 6, name: 'Romali Roti', price: 15 }  
  ];
  
  let cart = [];
  
  // Function to Update Cart Count in Header
  function updateCartCount() {
    const cartButton = document.getElementById('counter');
    cartButton.textContent = `${cart.length}`;
  }
  
  // Function to Render Cart Items
  function renderCartItems() {
    const cartList = document.getElementById('cart-items-list');
    const cartTotal = document.getElementById('cart-total');
    
    cartList.innerHTML = ''; // Clear current cart content
    
    // Render cart items
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - Rs.${item.price.toFixed(2)}`;
      cartList.appendChild(li);
    });
    
    // Display Total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = `Total: Rs.${total.toFixed(2)}`;
  }
  
  // Open Cart Modal
  document.getElementById('click-cart').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'flex';
    renderCartItems();
  });
  
  // Close Cart Modal
  document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
  });
  
  // Add Product to Cart
  document.querySelectorAll('#add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = e.target.closest('.container').dataset.id;
      const product = products.find(p => p.id === parseInt(productId));
      cart.push(product);
      updateCartCount();
    });
  });
  
  //smooth scrolling
  document.getElementById('view-menu').addEventListener('click', function() {
    // Navigate to the section with id="section1"
    document.getElementById('imgsection').scrollIntoView({
      behavior: 'smooth'
    });
  });


  //2nd

  document.getElementById('menu-tab').addEventListener('click', function() {
    // Navigate to the section with id="section1"
    document.getElementById('imgsection').scrollIntoView({
      behavior: 'smooth'
    });
  });

  document.getElementById('home-tab').addEventListener('click', function() {
    // Navigate to the section with id="section1"
    document.getElementById('header').scrollIntoView({
      behavior: 'smooth'
    });
  });

  document.getElementById('cnt-tab').addEventListener('click', function() {
    // Navigate to the section with id="section1"
    document.getElementById('footer-box').scrollIntoView({
      behavior: 'smooth'
    });
  });


  function toggleMenu() {
    const navLinks = document.getElementById("navtwo");
    const hamburger = document.getElementById("hamburger");
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
}
