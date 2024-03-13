import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { persistReducer } from "redux-persist";

interface InitialState {
  user: {
    access: string;
    username: string;
    email: string;
    contact: string;
  };
  registeredUsers: {
    username: string;
    email: string;
    password: string;
    contact: string;
  }[];
}

const initialState: InitialState = {
  user: {
    access: "",
    username: "",
    email: "",
    contact: "",
  },
  registeredUsers: [],
};

import storage from "redux-persist/lib/storage";

const authSlice = createSlice({
  name: "auth-slice",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = { access: "", username: "", email: "", contact: "" };
      toast.success("You have logged out successfully");
    },
    setToken: (state, action) => {
      state.user = { ...state.user, access: action.payload };
    },
    login: (state, action) => {
      const { values } = action.payload;
      const isUserValid = state.registeredUsers?.find(
        (user) =>
          (user?.email === values?.email || user?.username === values?.email) &&
          user?.password === values?.password
      );
      if (isUserValid) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...userDetails } = isUserValid;
        state.user = { ...userDetails, access: crypto.randomUUID() };
        toast.success("Login successful");
      } else {
        toast.error("You have entered incorrect username or password");
      }
    },
    registerUser: (state, action) => {
      const { values, successHandler } = action.payload;
      const isUserRegistered = state.registeredUsers?.find(
        (user) => user?.email === values?.email
      );
      if (isUserRegistered) {
        toast.error("User already registered.");
        return;
      }
      const registeredUsers = JSON.parse(JSON.stringify(state.registeredUsers));
      state.registeredUsers = [...registeredUsers, values];
      successHandler();
    },
  },
});

export const authActions = authSlice.actions;

export default persistReducer(
  {
    key: "auth-reducer",
    storage,
    whitelist: ["user", "registeredUsers"],
  },
  authSlice.reducer
);
