import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./Reducer";

const Store = configureStore({
    reducer: reducer,
}) 

export default Store;
