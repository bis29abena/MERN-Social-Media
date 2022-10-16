import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "634218e07a820e67125b7c58",
    username: "Prince",
    email: "prince@gmail.com",
    password: "$2b$10$9TpjGlmM9On7b.soJjQyGO2eIsGjIN/MmOs0.7DXcfojHM.niW7qm",
    profilePicture: "",
    coverPicture: "",
    followers: [],
    followings: [],
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
