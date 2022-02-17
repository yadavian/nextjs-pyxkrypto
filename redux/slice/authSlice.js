import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
  },
  reducers: {
    addUser: (state, action) => {
      console.log("action: ", action.payload);
      state.user = action.payload;
    },
    addUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addUser, addUserData } = authSlice.actions;

export default authSlice.reducer;
