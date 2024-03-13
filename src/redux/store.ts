import { configureStore } from "@reduxjs/toolkit";
import storage from "@react-native-async-storage/async-storage"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    } from "redux-persist"
import productList from "./states/productListState"
import product from "./states/productState"
import session from "./states/session"

const persistConfig = {
    key: "root",
    storage,
    version: 1
}

const productListPersisted = persistReducer(persistConfig,productList)
const sessionPersisted = persistReducer(persistConfig,session)

const store = configureStore({
    reducer: {
        product,
        session: sessionPersisted,
        productList: productListPersisted,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch; // Here we export the store's dispatch type
export type RootState = ReturnType<typeof store.getState>; // Here we export the store's state

export default store;