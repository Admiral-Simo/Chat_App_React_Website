import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  credentials: {
    name: "",
    profilePic: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.credentials = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions;

export const selectCredentials = (state) => state.auth.credentials;

export default authSlice.reducer;
