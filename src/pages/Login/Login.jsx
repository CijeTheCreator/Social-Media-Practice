import { useRef } from "react";
import "./login.css";
import { loginCall } from "./../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const email = useRef().current.value;
  const password = useRef().current.value;
  const { isFetching, dispatch, error, user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall({ email, password }, dispatch);
    console.log(user);
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
              {isFetching ? "loading..." : `Log in`}
            </button>
          </form>
          <p className="forgot">Forgot Password?</p>
          <button className="createNew loadingButton" disabled={isFetching}>
            {isFetching ? "loading..." : `Create a New Account`}t
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
