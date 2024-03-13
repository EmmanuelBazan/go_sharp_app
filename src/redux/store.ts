import { configureStore } from "@reduxjs/toolkit";
import productList from "./states/productState"

const store = configureStore({
    reducer: {
        productList
    }
});

export type AppDispatch = typeof store.dispatch; // Here we export the store's dispatch type
export type RootState = ReturnType<typeof store.getState>; // Here we export the store's state

export default store;