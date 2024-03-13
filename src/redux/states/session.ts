import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false
}

export const sessionSlice = createSlice({
    name: 'session',
    initialState: initialState,
    reducers: {
        setLoggedIn: (state,action) => {
            state.loggedIn = action.payload;
        }
    }
});

export const {
    setLoggedIn
} = sessionSlice.actions;

export default sessionSlice.reducer;