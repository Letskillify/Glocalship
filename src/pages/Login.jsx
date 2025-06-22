// src/pages/Login.js
import React, { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

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
    <section
      id="login"
      className="login section py-5"
      style={{
        background: "linear-gradient(to bottom,rgb(204, 243, 253),rgb(72, 174, 197))", // Blue gradient
        minHeight: "100vh"
      }}
    >

      <div className="container section-title text-center mb-5">
        <h2>Login</h2>
        <p>Access your parcel delivery dashboard</p>
      </div>

      <div className="container shadow p-4 rounded  bg-white " style={{ maxWidth: "900px" }}>
        <div className="row align-items-center">
          {/* Image Side */}
          <div className="col-md-6 d-none d-md-block">
            <img
              src='https://www.dropoff.com/wp-content/webp-express/webp-images/uploads/2023/02/Delivery-as-a-service-3-1536x900.jpeg.webp'
              alt="Login visual"
              className="img-fluid rounded-start w-100"
            />
          </div>

          {/* Form Side */}
          <div className="col-md-6 bg-white p-4 rounded-end">
            <h3 className="mb-3">Welcome Back</h3>
            <p className="text-muted">Login to manage your deliveries and track parcels</p>

            <form onSubmit={handleLogin}>
              <div className="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Your Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {status && <div className="alert alert-info py-1">{status}</div>}

              <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>

              <div className="text-center">
                <p>New user? <Link to="/signup">Signup</Link></p>
                <p>Login as Admin? <Link to="/admin/login">Click here</Link></p>
              </div>

              <div className="text-center mt-3">
                <a href="#"><i className="bi bi-twitter mx-2"></i></a>
                <a href="#"><i className="bi bi-facebook mx-2"></i></a>
                <a href="#"><i className="bi bi-instagram mx-2"></i></a>
                <a href="#"><i className="bi bi-linkedin mx-2"></i></a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
