import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/contactSlice";
import userReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    contact: contactReducer,
  },
});
