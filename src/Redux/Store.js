import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './Slice/cart';
import { orderReducer } from './Slice/OrdertypeSlice';


const store = configureStore({
    reducer: {
        cart : cartReducer,
        order: orderReducer,
    },
})

export default store;