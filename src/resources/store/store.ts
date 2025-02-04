import { configureStore } from "@reduxjs/toolkit";
import dropdownReducer from "./slice/dropDownSlice";

const store = configureStore({
    reducer: {
        dropdown: dropdownReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
