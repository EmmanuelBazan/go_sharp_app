import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    description: ""
}

export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        setName: (state,action) => {
            state.name = action.payload;
        },
        setDescription: (state,action) => {
            state.description = action.payload;
        },
    }
});

export const {
    setName,
    setDescription
} = productSlice.actions;

export default productSlice.reducer;