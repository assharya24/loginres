import { useState } from "react";
import { api } from "../api";

export default function Login() {
  const [email, setEmail] = useState(""), [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });
      alert("Logged in: " + res.data.user.name);
    } catch {
      alert("Invalid login");
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
