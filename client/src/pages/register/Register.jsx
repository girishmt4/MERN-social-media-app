import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="register-form">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
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
