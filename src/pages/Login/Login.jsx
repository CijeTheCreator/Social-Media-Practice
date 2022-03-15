import "./login.css";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
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
            <input type="email" placeholder="Email" required name="email" />
            <input
              type="password"
              placeholder="Password"
              required
              name="email"
              minLength={6}
            />
            <button>Log in</button>
          </form>
          <p className="forgot">Forgot Password?</p>
          <button className="createNew">Create a New Account</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
