import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  posts: [],
  loading: false,
  error: "",
};
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/posts");
  return response.json();
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.loading = true;
        state.posts = [];
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.posts = [];
        state.error = action.error.message;
      });
  },
});
export default postSlice.reducer;
