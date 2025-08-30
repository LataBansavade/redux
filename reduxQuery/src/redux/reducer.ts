import {createSlice} from "@reduxjs/toolkit";

 export const postsSlice = createSlice({
  name: "myposts",
  initialState: [],
  reducers: {
    setPosts: (state, action) => {
      return action.payload;
    },
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setPosts, addPost } = postsSlice.actions;
export default postsSlice.reducer;
