import { useRef } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const username = useRef();
  const history = useNavigate(); //import from react-router-dom
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.current.value !== confirmPassword.current.value) {
      confirmPassword.current.setCustomValidity("Password's do not match");
    } else {
      const usableFirstName = firstName.current.value;
      const usableLastName = lastName.current.value;
      const usableName = `${usableFirstName} ${usableLastName}`;
      const usableConfirmPassword = confirmPassword.current.value;
      const usablePassword = password.current.value;
      const usableEmail = email.current.value;
      const usableusername = username.current.value;
      // const response = axios("post", ); //Todo I did not put the api side on github, so complete is based on this
      const response = axios({
        method: "POST",
        url: "https://127.0.0.1:8080/v1/api/register",
        data: {
          name: usableName,
          email: usableEmail,
          password: usablePassword,
          username: usableusername,
        },
      });
      history.push("/");
    }
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
              type="text"
              placeholder="First Name"
              required
              name="first-name"
              ref={firstName}
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              name="last-name"
              ref={lastName}
            />
            <input
              type="text"
              placeholder="Username"
              required
              name="user-name"
              ref={username}
            />
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
              name="password"
              minLength={6}
              ref={password}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              name="confirm-password"
              minLength={6}
              ref={confirmPassword}
            />
            <button type="submit">Sign Up</button>
          </form>
          <p className="forgot">Already an account?</p>
          <button className="createNew">Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
