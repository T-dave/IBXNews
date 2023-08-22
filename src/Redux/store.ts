import { configureStore } from '@reduxjs/toolkit';
import newsReducer from "./slice/news";
import headlineReducer from "./slice/headline";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    headline:headlineReducer
  },
})set up redux for proper state management

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch