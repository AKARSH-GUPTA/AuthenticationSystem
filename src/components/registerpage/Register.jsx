import React from "react";
import { useState } from "react";
import Authentication from "./../authentication.js"
import { Navigate } from "react-router-dom";
import Input from "../Login/Input";
import Action from "../Login/Action";

function Register() {
  const [alert, setAlert] = useState({
    message: "Please enter your details to sign up.",
    isAlert: false,
  });
  const [redirect, setRedirect] = useState(false);
  const [details, setDetails] = useState({
    name:"",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    eError: "",
    pError: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

    if (redirect) {
      return <Navigate to="/" />;
    }
    
  async function Submission(event) {
    event.preventDefault();
    let valid = true;

    // Reset errors
    setErrors({ eError: "", pError: "" });

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!details.email.match(emailPattern)) {
      setErrors((prev) => ({
        ...prev,
        eError: "Enter a valid email (example@gmail.com)",
      }));
      valid = false;
    }

    // Password validation
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!details.password.match(passwordPattern)) {
      setErrors((prev) => ({
        ...prev,
        pError:
          "Password must contain uppercase, lowercase, number, and special character",
      }));
      valid = false;
    }

    if (valid) {
      try {
        const data = await Authentication.register(details);
        if (data.registered === true) {
          setRedirect(true);
        } else {
          setAlert({ message: data.message, isAlert: true });
        }
      } catch (err) {
        console.log(err.message);
        setAlert({
          message: "Something Went Wrong Please Try Again",
          isAlert: true,
        });
      }
    }
  }

  return (
    <form method="POST" id="loginForm" onSubmit={Submission}>
      <div className="card">
        <h2>Register page</h2>
        <p
          className="subtitle"
          style={{ color: alert.isAlert ? "red" : "inherit" }}
        >
          {alert.message}
        </p>
        <div className="social-buttons">
          <button type="button">
            <a href="https://authsystem-backend-c6q1.onrender.com/auth/google">Google</a>
          </button>
          <button type="button">
            <p>GitHub</p>
          </button>
        </div>
        <div className="divider">OR</div>

        <div className="input-group">
          <label>Uer Name</label>
          <Input
            type="text"
            name="name"
            placeholder="e.g. xyz532"
            onChange={handleChange}
            value={details.name}
          />
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <Input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            onChange={handleChange}
            value={details.email}
            error={errors.eError}
          />
        </div>

        <div className="input-group">
          <label>
            Password
          </label>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            value={details.password}
            error={errors.pError}
          />
        </div>
        <Action action="Login" href="/login" content="Already have an account"/>
      </div>
    </form>
  );
}

export default Register;
