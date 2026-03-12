// src/components/Signup.jsx
import React, { useState } from "react";
import { signupUser } from "../services/api"; // make sure path is correct

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      const data = await signupUser({ name, email, password });
      console.log("Signup response:", data);
      alert(JSON.stringify(data)); // optional feedback
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed, check console for details.");
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={signup}>Signup</button>
    </div>
  );
};

export default Signup;