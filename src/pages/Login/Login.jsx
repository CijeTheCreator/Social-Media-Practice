import { useRef } from "react";
import "./login.css";
import { loginCall } from "./../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { CircularProgress } from "@mui/material";

function Login() {
  const email = useRef();
  const password = useRef();

  const { isFetching, dispatch, error, user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginEmail = email.current.value;
    const loginPassword = password.current.value;

    loginCall({ email: loginEmail, password: loginPassword }, dispatch).then();
  };
  return (
    <div className="loginWrapper">
      <div className="loginInner">
        <div className="titles">
          <h1 className="mainTitle">Lamasocial</h1>
          <p className="desc">
            Connect with friends and the world around you on Lamasocial
          </p>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              ref={email}
            />
            <input
              type="password"
              placeholder="Password"
              required
              name="email"
              minLength={6}
              ref={password}
            />
            <button className="loadingButton" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress className="progress"></CircularProgress>
              ) : (
                `Log in`
              )}
            </button>
          </form>
          <p className="forgot">Forgot Password?</p>
          <button className="createNew loadingButton" disabled={isFetching}>
            {isFetching ? (
              <CircularProgress color="primary"></CircularProgress>
            ) : (
              `Create a New Account`
            )}
            t
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
