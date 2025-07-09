import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google User:", result.user);
      navigate("/");
    } catch (error) {
      setStatus(error.message);
    }
  };

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    setStatus("Creating account...");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setStatus("Signup failed: " + error.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Create Account</h2>
        <button onClick={handleGoogleLogin} className="google-btn">
          <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" />
          Sign up with Google
        </button>

        <div className="divider"><span>or</span></div>

        <form onSubmit={handleEmailSignup} className="auth-form">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {status && <p className="status-text">{status}</p>}
          <button type="submit" className="submit-btn">Create Account</button>
        </form>

        <p className="link-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
