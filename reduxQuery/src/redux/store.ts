
import { configureStore } from "@reduxjs/toolkit";
import { posts } from "./api";
import  myposts  from "./reducer";

export const store = configureStore({
  reducer: {
    [posts.reducerPath]: posts.reducer,
    myposts: myposts,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(posts.middleware),
});
