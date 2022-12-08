import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState(null);

  const changeHandler = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    await fetch("http://localhost:8800/api/auth/register", {
      method: "POST",
      body: JSON.stringify(inputs),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((errorMessage) => {
          throw new Error(errorMessage);
        });
      })
      .then((data) => console.log(data))
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="register">
      <div className="card">
        <div className="register-form">
          <h1>Register</h1>
          <form action="">
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={changeHandler}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={changeHandler}
            />
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
            <button onClick={submitHandler}>Register</button>
          </form>
        </div>
        <div className="login-promo">
          <h1>Me. Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ea
            iusto. Accusamus, quae, omnis aspernatur consectetur ipsam est
          </p>
          <span>Already have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
