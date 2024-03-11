import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
const initialState = {
  user: {
    access: "",
  },
};

import storage from "redux-persist/lib/storage";

const authSlice = createSlice({
  name: "auth-slice",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("auth-token");
      state.user = { ...state.user, access: "" };
    },
    setToken: (state, action) => {
      state.user = { ...state.user, access: action.payload };
    },
  },
});

export const authActions = authSlice.actions;

export default persistReducer(
  {
    key: "auth-reducer",
    storage,
    whitelist: ["user"],
  },
  authSlice.reducer
);
