import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/user/useSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
