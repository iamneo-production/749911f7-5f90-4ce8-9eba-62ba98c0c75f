import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        "https://8080-ffccfffadcaefbecfbaffffddddabcdbfbebdb.premiumproject.examly.io/users",
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
