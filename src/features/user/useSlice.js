import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authUserService from "./userService";

const userFromLocalStorage = localStorage.getItem("LMS_token") || null;

const initialState = {
  user: userFromLocalStorage,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const loginUser = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await authUserService.loginUser(data);

      // Assuming your backend sends an object with `status` and `message` fields
      if (response.status === false) {
        return rejectWithValue(response.message);
      }

      return response; // If the response is successful
    } catch (error) {
      // Handle network or unexpected errors
      return rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await authUserService.registerUser(data);

      // Assuming your backend sends an object with `status` and `message` fields
      if (response.status === false) {
        return rejectWithValue(response.message);
      }

      return response; // If the response is successful
    } catch (error) {
      // Handle network or unexpected errors
      return rejectWithValue(error.message);
    }
  }
);

export const resetState = createAction("reset_all");

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = "Something went wrong!"; // Use action.payload to get the rejected message
      })
      //
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = "Something went wrong!"; // Use action.payload to get the rejected message
      })
      .addCase(resetState, (state) => {
        state.user = initialState;
      });
  },
});

export default userSlice.reducer;

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// export default userSlice.reducer;
