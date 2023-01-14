import React, { useReducer, useContext } from "react";

import reducer from "./reducer";
import axios from "axios";

import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  showAlert: true,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 2000);
  };

  const addUserToLocalSt = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const registerUser = async (currentUser) => {
    dispatch({
      type: REGISTER_USER_BEGIN,
    });

    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      console.log(response);

      const { user, token } = response.data;
      dispatch({ type: REGISTER_USER_SUCCESS, payload: { user, token } });

      addUserToLocalSt({ user, token });
    } catch (error) {
      console.log(error.response);

      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }

    clearAlert();
  };

  const loginUser = async (currentUser) => {
    dispatch({
      type: LOGIN_USER_BEGIN,
    });

    try {
      const { data } = await axios.post("/api/v1/auth/login", currentUser);

      const { user, token } = data;

      dispatch({ type: LOGIN_USER_SUCCESS, payload: { user, token } });

      addUserToLocalSt({ user, token });
    } catch (error) {
      console.log(error.response);

      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  return (
    <AppContext.Provider
      value={{ ...state, displayAlert, registerUser, loginUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
