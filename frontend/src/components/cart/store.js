import { configureStore } from '@reduxjs/toolkit'


import { cartReducer } from './reducers';


const initialState = {
   cart: {
           items:JSON.parse(localStorage.getItem("cart")).items ?? []
       },
};


const store = configureStore({
   reducer: {
       cart: cartReducer,
   },
   preloadedState: initialState,
});


export default store;