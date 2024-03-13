import { configureStore } from "@reduxjs/toolkit";
import productList from "./states/productListState"
import product from "./states/productState"

const store = configureStore({
    reducer: {
        productList,
        product
    }
});

export type AppDispatch = typeof store.dispatch; // Here we export the store's dispatch type
export type RootState = ReturnType<typeof store.getState>; // Here we export the store's state

export default store;