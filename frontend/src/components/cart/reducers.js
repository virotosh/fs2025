import {
    CLEAR_CART,
    UPDATE_CART_ITEM,
 } from './actions';
 
 
 const initialState = {
    items: JSON.parse(localStorage.getItem("cart")).items ?? [],
 };
 
 
 export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_CART:
            localStorage.setItem("cart", JSON.stringify({ items: [] }));
            return { items: [] };
        case UPDATE_CART_ITEM:
            const item = action.item;
            const index = state.items.findIndex(it => it.cartitem._id === item.cartitem._id);
            const newItems = [...state.items];
            if (index !== -1) {
                newItems[index] = { ...item };
            } else {
                newItems.push({ ...item });
            }
            localStorage.setItem("cart", JSON.stringify(state));
            return { ...state, items: newItems };
        default:
            return state;
    }
 };
 