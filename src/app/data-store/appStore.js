import { configureStore } from "@reduxjs/toolkit";
import savedUsersSliceReducer from "./savedUsersSlice";

const appStore = configureStore({
    reducer: {
        savedUsers: savedUsersSliceReducer,
    }
});

export default appStore;