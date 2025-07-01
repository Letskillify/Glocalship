import React, { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
// import { doc, setDoc, serverTimestamp } from "firebase/firestore";

function Signup() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Logged in:", user);
      navigate("/");
    } catch (error) {
      console.log(error);
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
    <section className="signup-page">
      <div className="signup-card">
        <h2>Create Account</h2>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="google-btn"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" />
           Continue with Google
        </button>

        <div className="divider">or</div>

        {!showEmailForm && (
          <button className="email-toggle-btn" onClick={() => setShowEmailForm(true)}>
            Continue  with Email
          </button>
        )}

        {showEmailForm && (
          <form onSubmit={handleEmailSignup} className="email-form">
            <input
              type="email"
              className="form-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="form-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {status && <div className="signup-status">{status}</div>}
            <button type="submit" className="signup-btn">Continue</button>
          </form>
        )}

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
}

export default Signup;
