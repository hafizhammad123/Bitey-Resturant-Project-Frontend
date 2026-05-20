import { createSlice } from "@reduxjs/toolkit";

const storedOrder = localStorage.getItem("orderInfo");

const initialState = {
    ordertype: storedOrder
        ? JSON.parse(storedOrder).type
        : "",
};

const orderSlice = createSlice({
    name: "orderTypeCheck",
    initialState,
    reducers: {
        checkType: (state, action) => {
            console.log("Slice ++++++++++  RUN  +++++++<>>");


            let type = action.payload
            console.log("Slice ++++++++++  RUN  +++++++<>>");


            state.ordertype = type
            console.log("Slice +++++++++++++++++<>>" + state.ordertype);
        }
    }
});

export const action = orderSlice.actions;
export const orderReducer = orderSlice.reducer;