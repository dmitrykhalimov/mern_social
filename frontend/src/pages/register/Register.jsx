import "./register.css";

const Register = () => {
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
            <input placeholder="username" className="loginInput" />
            <input placeholder="email" className="loginInput" />
            <input placeholder="password" className="loginInput" />
            <input placeholder="password again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <span className="loginForgot">Forgott Password?</span>
            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
