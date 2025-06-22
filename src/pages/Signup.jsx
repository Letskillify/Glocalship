// src/pages/Signup.jsx
import React, { useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setStatus("Creating account...");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        fullName,
        email,
        createdAt: serverTimestamp(),
      });

     
      navigate("/");
    } catch (error) {
      setStatus("Signup failed: " + error.message);
    }
  };

  return (
    <section id="signup" className="signup section py-5"  style={{
        background: "linear-gradient(to bottom,rgb(204, 243, 253),rgb(72, 174, 197))", // Blue gradient
        minHeight: "100vh"
      }}>
      <div className="container section-title text-center mb-5">
        <h2>Signup</h2>
        <p>Create your account to start booking and tracking parcels</p>
      </div>

      <div className="container shadow p-4 rounded bg-white" style={{ maxWidth: "900px" }}>
        <div className="row align-items-center">
          {/* Image Side */}
          <div className="col-md-6 d-none d-md-block">
            <img
              src='https://calflavins.ie/wp-content/uploads/2022/12/New-delivery-services-pop-up-amid-social-distancing-era.jpg'
              alt="Signup visual"
              className="img-fluid rounded-start"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Form Side */}
          <div className="col-md-6 bg-white p-4 rounded-end">
            <h3 className="mb-3">Join Us</h3>
            <p className="text-muted">Fill in the details to create your account</p>

            <form onSubmit={handleSignup}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {status && <div className="alert alert-info py-1">{status}</div>}

              <button type="submit" className="btn btn-primary w-100 mb-3">Signup</button>

              <div className="text-center">
                <p>Already have an account? <Link to="/login">Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
