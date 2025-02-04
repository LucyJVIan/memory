import { createSlice } from "@reduxjs/toolkit";

interface DropdownState {
    isOpenDropdown: boolean;
}

const initialState: DropdownState = {
    isOpenDropdown: false,
};

const dropdownSlice = createSlice({
    name: "dropdown",
    initialState,
    reducers: {
        toggleDropdown(state) {
            state.isOpenDropdown = !state.isOpenDropdown;
        },
        openDropdown(state) {
            state.isOpenDropdown = true;
        },
        closeDropdown(state) {
            state.isOpenDropdown = false;
        },
    },
});

export const { toggleDropdown, openDropdown, closeDropdown } = dropdownSlice.actions;

export default dropdownSlice.reducer;
