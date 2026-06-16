import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

const appStore = configureStore({
    reducer:{
        cart: cartReducer,
       // user : userReaducer, //  when we create userSlice...
    },
});
export default appStore; 