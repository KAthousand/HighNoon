import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <div className="login-reg-container">
        <div className="logo"></div>
        <h1>Login</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.handleLogin(formData);
          }}
        >
          <label>
            Username:
            <br />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
            <br />
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <p>
            Need to create an account? <Link to="/register">Register</Link>
          </p>
          <button className="scoreboard-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
