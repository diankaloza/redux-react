import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { postAPI } from "../services/PostService";

import { userSlice } from "./reducers/UserSlice";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [postAPI.reducerPath]: postAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
