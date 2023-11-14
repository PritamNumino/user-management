import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const toastStyle = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

const initialState = {
  loading: false,
};

export const addUser = createAsyncThunk("user/addUser", (reqBody) => {
  const ACCESS_TOKEN = sessionStorage.getItem("token");
  return axios
    .post("http://localhost:9000/v1/api/tenants/123/users", reqBody, {
      headers: {
        "correlation-id": "",
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((response) => response.data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addUser.fulfilled, (state) => {
      state.loading = false;
      toast.success("User Added Successfully", toastStyle);
    });
    builder.addCase(addUser.rejected, (state) => {
      state.loading = false;
      toast.error("Failed to add user", toastStyle);
    });
  },
});

export default userSlice.reducer;
