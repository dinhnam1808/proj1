const products = [
    {
      name: "Cherry",
      price: 100,
      quantity: 200,
      productId: 1,
      image: "https://github.com/udacity/cd2073-intro-to-js-1-project-starter/blob/main/starter/src/images/cherry.jpg"
    },
    {
      name: "Orange",
      price: 50,
      quantity: 150,
      productId: 2,
      image: "https://github.com/udacity/cd2073-intro-to-js-1-project-starter/blob/main/starter/src/images/orange.jpg"
    },
    {
      name: "Strawberry",
      price: 200,
      quantity: 500,
      productId: 3,
      image: "https://github.com/udacity/cd2073-intro-to-js-1-project-starter/blob/main/starter/src/images/strawberry.jpg"
    }
  ];
  
  const cart = [];
  
  function addProductToCart(productId) {
    // Find the product in the products array
    const product = products.find(p => p.productId === productId);
  
    if (!product) {
      console.error("Product not found");
      return;
    }
    // Check if the product is already in the cart
    const cartItem = cart.find(item => item.productId === productId);
  
    if (cartItem) {
      // If the product is already in the cart, increase the quantity
      cartItem.quantity += 1;
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      cart.push({ ...product, quantity: 1 });
    }

//       // Log the updated cart
//   console.log("Updated Cart:", cart);
  }
  
  // Example usage
  addProductToCart(1); // Add Cherry to the cart
  addProductToCart(2); // Add Orange to the cart
  addProductToCart(1); // Increase the quantity of Cherry in the cart
  
  // Check the updated cart
  console.log("Final Cart:", cart);






  function increaseQuantity(productId) {
    // Find the product in the cart
    const cartItem = cart.find(item => item.productId === productId);
  
    if (!cartItem) {
      console.error("Product not found in the cart");
      return;
    }
  
    // Increase the quantity in the cart
    cartItem.quantity += 1;
  
    // // Log the updated cart
    // console.log("Updated Cart:", cart);
  }
  
  // Example usage
  increaseQuantity(1); // Increase the quantity of the product with productID 1
  increaseQuantity(2); // Increase the quantity of the product with productID 2
  
  // Check the updated cart
  console.log("Final Cart:", cart);
  







  function decreaseQuantity(productId) {
    // Find the index of the product in the cart
    const productIndex = cart.findIndex(item => item.productId === productId);
  
    if (productIndex === -1) {
      console.error("Product not found in the cart");
      return;
    }
  
    // Decrease the quantity in the cart
    cart[productIndex].quantity -= 1;
  
    // If the quantity becomes 0, remove the item from the cart
    if (cart[productIndex].quantity === 0) {
      cart.splice(productIndex, 1);
    }
  
    // // Log the updated cart
    // console.log("Updated Cart:", cart);
  }
  
  // Example usage
  decreaseQuantity(1); // Decrease the quantity of the product with productId 1
  decreaseQuantity(2); // Decrease the quantity of the product with productId 2
  
  // Check the updated cart
  console.log("Final Cart:", cart);
  














  function removeProductFromCart(productId) {
    // Find the index of the product in the cart
    const productIndex = cart.findIndex(item => item.productId === productId);
  
    if (productIndex === -1) {
      console.error("Product not found in the cart");
      return;
    }
  
    // Remove the product from the cart
    cart.splice(productIndex, 1);
  
    // Log the updated cart
    console.log("Updated Cart:", cart);
  }
  
  // Example usage
  removeProductFromCart(1); // Remove the product with productId 1 from the cart
  removeProductFromCart(2); // Remove the product with productId 2 from the cart
  
  // Check the updated cart
  console.log("Final Cart:", cart);

  










  function removeProductFromCart(productId) {
    // Find the index of the product in the cart
    const productIndex = cart.findIndex(item => item.productId === productId);
  
    if (productIndex === -1) {
      console.error("Product not found in the cart");
      return;
    }
  
    // Remove the product from the cart
    cart.splice(productIndex, 1);

  }
  
  // Example usage
  removeProductFromCart(1); // Remove the product with productId 1 from the cart
  removeProductFromCart(2); // Remove the product with productId 2 from the cart
  
  // Check the updated cart
  console.log("Final Cart:", cart);
  