import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    total: 0,
    dilvery: 100
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        // ➤ ADD ITEM
        addItem: (state, action) => {


            const item = action.payload;


            const existing = state.items.find(i => i._id === item._id);

            if (existing) {
                existing.qty += 1;
            } else {
                state.items.push({ ...item });
            }
            state.total = state.items.reduce((sum, item) => {
                return sum + item.price * item.qty
            }, 0)

            console.log(item);


        },

        // ➤ INCREASE QTY
        itemQtyInc: (state, action) => {
            let id = action.payload

            let item = state.items.find(item => item._id === id)

            if (item) {
                item.qty += 1
            }
            state.total = state.items.reduce((sum, item) => {
                return sum + item.price * item.qty
            }, 0)

        },

        // ➤ DECREASE QTY
        itemQtyDc: (state, action) => {
            let id = action.payload

            let item = state.items.find(item => item._id === id)

            if (item) {
                if (item.qty > 1) {
                    item.qty -= 1
                } else {
                    state.items = state.items.filter((i) => i._id !== id)
                }
            }
            state.total = state.items.reduce((sum, item) => {
                return sum + item.price * item.qty
            }, 0)
        },
        removeItem: (state, action) => {
            let id = action.payload
            state.items = state.items.filter((i) => i._id !== id)
            state.total = state.items.reduce((sum, item) => {
                return sum + item.price * item.qty
            }, 0)
        },

        ClearCart: (state) => {
            state.items = []
            state.total = state.items.reduce((sum, item) => {
                return sum + item.price * item.qty
            }, 0)
        }


    }
});

export const action = cartSlice.actions;
export const cartReducer = cartSlice.reducer;