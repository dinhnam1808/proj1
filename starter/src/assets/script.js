const products = [
  {
    name: "Cherry",
    price: 100,
    quantity: 1,
    productId: 1,
    image: "https://github.com/udacity/cd2073-intro-to-js-1-project-starter/blob/main/starter/src/images/cherry.jpg"
  },
  {
    name: "Orange",
    price: 50,
    quantity: 1,
    productId: 2,
    image: "https://github.com/udacity/cd2073-intro-to-js-1-project-starter/blob/main/starter/src/images/orange.jpg"
  },
  {
    name: "Strawberry",
    price: 200,
    quantity: 1,
    productId: 3,
    image: "https://github.com/udacity/cd2073-intro-to-js-1-project-starter/blob/main/starter/src/images/strawberry.jpg"
  }
];

const cart = [];

function findProductIndexInCart(productId) {
  return cart.findIndex(item => item.productId === productId);
}

function addProductToCart(productId) {
  const product = products.find(p => p.productId === productId);

  if (!product) {
    console.error("Product not found");
    return;
  }

  const cartItemIndex = findProductIndexInCart(productId);

  if (cartItemIndex !== -1) {
    // Product is already in the cart, increment the quantity
    cart[cartItemIndex].quantity += 1;
  } else {
    // Product is not in the cart, add a new item
    cart.push({ ...product, quantity: 1 });
  }
}



function increaseQuantity(productId) {
  const cartItem = cart.find(item => item.productId === productId);

  if (!cartItem) {
    console.error("Product not found in the cart");
    return;
  }
  cartItem.quantity += 1;

}

function decreaseQuantity(productId) {
  const productIndex = cart.findIndex(item => item.productId === productId);

  if (productIndex === -1) {
    console.error("Product not found in the cart");
    return;
  }
  cart[productIndex].quantity -= 1;

  if (cart[productIndex].quantity === 0) {
    cart.splice(productIndex, 1);
  }
}

function removeProductFromCart(productId) {
  const productIndex = cart.findIndex(item => item.productId === productId);

  if (productIndex === -1) {
    console.error("Product not found in the cart");
    return;
  }
  cart.splice(productIndex, 1);

}

function cartTotal() {
  const grandTotal = cart.reduce((total, item) => total + item.quantity * item.price, 0);

  return grandTotal;
}

function emptyCart() {
  cart = [];
  return "Cart is now empty";
}

function pay(amountPaid) {
  const grandTotal = cartTotal();
  const remainingBalance = grandTotal - amountPaid;

  if (remainingBalance > 0) {
    // Customer paid less than the total, return the remaining balance (negative)
    return remainingBalance;
  } else if (remainingBalance < 0) {
    // Customer paid more than the total, return the amount to be returned (positive)
    return -remainingBalance;
  } else {
    // Customer paid exactly the total, return 0
    return 0;
  }
}

module.exports = {
  products,
  cart,
  findProductIndexInCart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}
