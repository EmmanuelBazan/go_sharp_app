import { createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../domain/models/productModel";

const initialState = {
    products: <ProductModel[]> [
        {
            id: "1",
            name: "producto 1",
            description: "descripcion"
        }
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