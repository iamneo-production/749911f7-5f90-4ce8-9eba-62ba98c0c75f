import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const DB_URL = process.env.REACT_APP_DB_URL

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        `${DB_URL}/users`
      );
      console.log(response);
      // TODO - write logic for checking if logged in user details are available in the incoming response
    } catch (error) {
      alert("An error occurred while logging in ", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
