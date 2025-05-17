import { useState } from "react";
import { api } from "../api";

export default function Signup() {
  const [name, setName] = useState(""), [email, setEmail] = useState(""), [password, setPassword] = useState("");
  const handleSignup = async () => {
    try {
      await api.post("/auth/signup", { name, email, password });
      alert("Signup successful");
    } catch {
      alert("Signup failed");
    }
  };
  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}
