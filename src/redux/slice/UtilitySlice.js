import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isThemeDark: false,
};

const utilitySlice = createSlice({
	name: "utility",
	initialState,
	reducers: {
		makeThemeDark: (state) => {
			state.isThemeDark = true;
		},
		makeThemeLight: (state) => {
			state.isThemeDark = false;
		},
	},
});

export const utilitySliceReducers = utilitySlice.reducer;
export const utilitySliceActions = utilitySlice.actions;
