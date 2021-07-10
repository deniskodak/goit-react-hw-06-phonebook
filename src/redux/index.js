import { configureStore } from "@reduxjs/toolkit";
import phoneBookReducer from "./reducers/phoneBookReducer";

const store = configureStore({
  reducer: {
    contacts: phoneBookReducer,
  },
});

export default store;
