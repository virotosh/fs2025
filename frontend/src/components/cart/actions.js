export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
export const CLEAR_CART = 'CLEAR_CART';

export const updateCartItem = item => ({
   type: UPDATE_CART_ITEM,
   item
})

export const clearCart = () => ({
   type: CLEAR_CART,
})
