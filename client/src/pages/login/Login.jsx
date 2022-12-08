import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./Login.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const changeHandler = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
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
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={changeHandler}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={changeHandler}
            />
            {error && error}
            <button onClick={loginHandler}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
