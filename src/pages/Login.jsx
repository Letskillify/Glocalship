import React, { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus("Logging in...");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setStatus(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <p>Access your delivery dashboard</p>

      <form onSubmit={handleLogin}>
        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="Your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {status && <div className="status-msg">{status}</div>}

        <button type="submit" className="login-btn">Login</button>

        <div className="link-text">
          <p>New user? <Link to="/signup">Signup</Link></p>
          <p>Admin? <Link to="/admin/login">Login here</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Login;
