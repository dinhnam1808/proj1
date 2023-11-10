const products = [
  {
    name: "Cherry",
    price: 100,
    quantity: 0,
    productId: 1,
    image: "images/cherry.jpg"
  },
  {
    name: "Orange",
    price: 50,
    quantity: 0,
    productId: 2,
    image: "images/orange.jpg"
  },
  {
    name: "Strawberry",
    price: 200,
    quantity: 0,
    productId: 3,
    image: "images/strawberry.jpg"
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
    cart[cartItemIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  product.quantity +=1;
}


function increaseQuantity(productId) {
  const product = products.find(item => item.productId === productId);

  if (!product) {
    console.error("Product not found in the cart");
    return;
  }
  product.quantity += 1;
}


function decreaseQuantity(productId) {
  const product = products.find(p => p.productId === productId);

  if (!product) {
    console.error("Product not found in the cart");
    return;
  }
  product.quantity -= 1;

  const productIndex = cart.findIndex(item => item.productId === productId);
  if (!product.quantity) {
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

  const product = products.find(p => p.productId === productId);
  product.quantity = 0;
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
    return remainingBalance;
  } else if (remainingBalance < 0) {
    return -remainingBalance;
  } else {
    return 0;
  }
}


const exchangeRates = {
  USD: 1,      
  EUR: 0.85,   
  YEN: 113.28 
};

function currency(amount, fromCurrency, toCurrency) {
  if (exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
      const result = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
      return result.toFixed(2); 
  } else {
      return "Exchange rates for selected currencies were not found.";
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
  currency
}
