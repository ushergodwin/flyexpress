import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendMessage = createAsyncThunk(
  "contact/sendMessage",
  async (message) => {
    const response = await axios.post(
      "http://localhost/phpmail/index.php",
      message
    );
    return response.data;
  }
);
const initialState = {
  message: "",
  status: null,
  success: false,
  error: false,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.success = action.payload.success;
        state.error = action.payload.error;
        state.status = "idle";
      });
  },
});

export default contactSlice.reducer;
