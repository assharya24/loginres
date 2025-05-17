import { useState } from "react";
import { Api } from "../api";
import { Link } from "react-router-dom";
import "./Signup.css";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
// console.log(`${Api}/api/auth/signup`)
    try {
      console.log(name, email, password);
      
     const res =  await axios.post(`${Api}/api/auth/signup`, { name, email, password });
     console.log(res);
      alert("Signup successful");
    } catch {
      alert("Signup failed");
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
