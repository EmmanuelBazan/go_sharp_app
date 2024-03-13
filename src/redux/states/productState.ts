import { createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../domain/models/productModel";

const initialState = {
    products: <ProductModel[]> [
        {
            id: "1",
            name: "producto 1",
            description: "descripcion"
        },
        {
            id: "2",
            name: "producto 2",
            description: "descripcion"
        },
        {
            id: "3",
            name: "producto 3",
            description: "descripcion"
        },
    ],
}

export const productSlice = createSlice({
    name: 'productList',
    initialState: initialState,
    reducers: {
        setProduct: (state,action) => {
            state.products = action.payload;
        },
    }
});

export const {
    setProduct
} = productSlice.actions;

export default productSlice.reducer;