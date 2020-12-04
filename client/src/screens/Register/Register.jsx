import { useState } from "react";
import { Link } from "react-router-dom";

function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
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
        <h1>Register</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.handleRegister(formData);
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
            Email:
            <br />
            <input
              type="text"
              name="email"
              value={formData.email}
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
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <button className="scoreboard-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
