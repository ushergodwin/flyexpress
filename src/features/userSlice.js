import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login: (state, action) => {},
  },
});

export const {login } = userSlice.actions

export default userSlice.reducer;
