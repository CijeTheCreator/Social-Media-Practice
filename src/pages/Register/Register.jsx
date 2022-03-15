import "./register.css";

function Register() {
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
            <input type="text" placeholder="First Name" required name="name" />
            <input type="text" placeholder="Last Name" required name="name" />
            <input type="email" placeholder="Email" required name="email" />
            <input
              type="password"
              placeholder="Password"
              required
              name="email"
              minLength={6}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              name="email"
              minLength={6}
            />
            <button>Sign Up</button>
          </form>
          <p className="forgot">Already an account?</p>
          <button className="createNew">Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
