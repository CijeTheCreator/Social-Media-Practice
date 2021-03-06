import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "62230f829f9913e065dfe42e",
    username: "CijeTheBAdMan",
    password: "$2b$10$L4CQE3ejnTnaXKI3lGpgmOU4I16wBMgU4MIzA0NkiJCvs7SN5ZR7.",
    profilePicture: "/person/3.jpeg",
    coverPicture: "",
    description: "",
    name: "Mmesoma Osadebe Chinenye",
    email: "mmesomaosadebe@gmail.com",
    followers: [],
    following: [],
    relationship: 1,
    isAdmin: false,
    createdAt: "2022-03-05T07:21:38.408Z",
    updatedAt: "2022-03-06T05:37:28.987Z",
    __v: 0,
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
