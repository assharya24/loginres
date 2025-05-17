import { useState } from "react";
import { Api } from "../api";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${Api}/api/auth/login`, {
        email,
        password,
      });
      console.log(res.data);
      alert("Logged in: " + res.data.user.name);
    } catch {
      alert("Invalid login");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}
