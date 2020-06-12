export function addToCart(product) {
  return {
    type: '@cart/ADD_TO_CART',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE_FROM_CART',
    id,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
