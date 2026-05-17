import { createSlice } from "@reduxjs/toolkit";
import booksData from "../data/booksData";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: booksData,
  },
  reducers: {
    addBook: (state, action) => {
      state.books.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;