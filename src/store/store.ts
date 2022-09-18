import { combineReducers, configureStore } from "@reduxjs/toolkit";

import UserSlice, { userSlice } from "./reducers/UserSlice";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
