import axios from "axios";
import React, { useState } from "react";
import "../styles/style.css";

const DB_URL = process.env.REACT_APP_DB_URL;

const Registration = () => {
  const [userName, setUserName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [errorMessage, setErrorMessage] = useState(""),
    handleRegistration = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(`${DB_URL}/users`, {
          id: Math.floor(Math.random() * 10001),
          userName,
          email,
          password,
        });

        console.log("User registered:", response.data);
        // TODO: Redirect the user to the login page or another route here
      } catch (error) {
        if (error?.response?.status === 409) {
          setErrorMessage("User with this email already exists.");
        } else {
          setErrorMessage("An error occurred. Please try again later.");
        }
      }
    },
    validateForm = () => {
      return userName !== "" && email !== "" && password !== "";
    };

  return (
    <form className="register" onSubmit={handleRegistration}>
      <h2>User Registration</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <input
        type="text"
        placeholder="User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" disabled={!validateForm()}>
        Register
      </button>
    </form>
  );
};

export default Registration;
