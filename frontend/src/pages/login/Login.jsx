import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">React social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on React Social
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="email" className="loginInput" />
            <input placeholder="password" className="loginInput" />
            <button className="loginButton">Log in</button>
            <span className="loginForgot">Forgott Password?</span>
            <button className="loginRegisterButton">
              Create a new Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
