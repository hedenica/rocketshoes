export function AddToCart(product) {
  return {
    type: '@cart/ADD_TO_CART',
    product,
  };
}

export function RemoveFromCart(id) {
  return {
    type: '@cart/REMOVE_FROM_CART',
    id,
  };
}
