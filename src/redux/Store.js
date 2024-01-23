import { configureStore } from "@reduxjs/toolkit";
import { utilitySliceReducers } from "./slice/UtilitySlice";

const store = configureStore({
	reducer: {
		utils: utilitySliceReducers,
	},
});

export default store;
