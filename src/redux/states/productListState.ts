import { createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../domain/models/productModel";

const initialState = {
    products: <ProductModel[]> [
        {
            name: "producto 1",
            description: "descripcion"
        },
        {
            name: "producto 2",
            description: "descripcion"
        },
        {
            name: "producto 3",
            description: "descripcion"
        },
    ],
}

export const productListSlice = createSlice({
    name: 'productList',
    initialState: initialState,
    reducers: {
        setNewProduct: (state,action) => {
            state.products.push(action.payload)
        },
    }
});

export const {
    setNewProduct
} = productListSlice.actions;

export default productListSlice.reducer;