import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./Login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  const loginHandler = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="register-promo">
          <h1>Hello there.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ea
            iusto. Accusamus, quae, omnis aspernatur consectetur ipsam est
          </p>
          <span>Come. Join. Create an account.</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="login-form">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={loginHandler}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
