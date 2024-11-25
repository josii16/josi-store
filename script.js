// Initialize an empty cart array
let cart = [];

// Function to update the cart count and total price
function updateCart() {
  // Update the cart count in the cart button
  const cartCount = document.getElementById("cartCount");
  cartCount.textContent = cart.length;

  // Calculate the total price of the items in the cart
  const totalPrice = document.getElementById("totalPrice");
  let total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
  totalPrice.textContent = total.toFixed(2); // Update the total price in the cart modal
}

// Function to add an item to the cart
function addToCart(event) {
  const button = event.target;
  const id = button.getAttribute("data-id");
  const name = button.getAttribute("data-name");
  const price = button.getAttribute("data-price");

  // Add the item to the cart array
  cart.push({ id, name, price });
  
  // Update the cart display and count
  updateCart();
}

// Function to remove an item from the cart
function removeFromCart(id) {
  // Remove the item from the cart array
  cart = cart.filter(item => item.id !== id);

  // Update the cart display and count
  updateCart();
}

// Function to open the cart modal when the cart button is clicked
document.getElementById("cartButton").addEventListener("click", function() {
  const cartModal = document.getElementById("cartModal");
  cartModal.style.display = "flex";  // Show the cart modal
  renderCartItems();  // Render the updated cart items inside the modal
});

// Function to close the cart modal
document.getElementById("closeCart").addEventListener("click", function() {
  const cartModal = document.getElementById("cartModal");
  cartModal.style.display = "none";  // Close the cart modal
});

// Function to render the cart items in the modal
function renderCartItems() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";  // Clear the existing items
  
  // Loop through each item in the cart array
  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart('${item.id}')">Remove</button>`;
    cartItems.appendChild(li);  // Append each item to the cart modal
  });
}

// Add event listeners to the "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", addToCart);
});
