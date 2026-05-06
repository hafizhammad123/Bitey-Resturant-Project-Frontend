import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ordertype: "",

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