import "./Login.scss";

const Login = () => {
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
          <button>Register</button>
        </div>
        <div className="login-form">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
