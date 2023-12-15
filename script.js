function addToCart(itemId) {
    // Get the item based on itemId
    const item = document.querySelector(.item[data-id="${itemId}"]);

    // Clone the item and append it to the cart
    const clonedItem = item.cloneNode(true);
    document.getElementById('cart').appendChild(clonedItem);
  }

  function deleteFromCart(itemId) {
    // Get the item in the cart based on itemId
    const cartItem = document.querySelector(#cart .item[data-id="${itemId}"]);

    // Remove the item from the cart
    if (cartItem) {
      cartItem.remove();
    }