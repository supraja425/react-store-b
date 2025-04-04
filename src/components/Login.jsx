import React, { useState } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const Navigate = useNavigate();
  const { user, setUser, users, setUsers,cart } = useContext(appContext);
  const [msg, setMsg] = useState();
  const handleSubmit = () => {
    const found = users.find(
      (value) => value.email === user.email && value.password === user.password
    );
    if (found) {
      Object.keys(cart).length > 0 ? Navigate("/cart") : Navigate("/");
    } else {
      setMsg("Invalid Credentials");
    }
  };
  return (
    <div>
      <h2>Login Form</h2>
      {msg}
      <p>
        <input
          type="text"
          placeholder="Email address"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></input>
      </p>
      <p>
        <button onClick={handleSubmit}>Log In</button>
      </p>
      <p>
        <Link to="../register">New User Register Here!</Link>
      </p>
    </div>
  );
}