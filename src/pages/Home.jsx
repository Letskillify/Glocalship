// src/pages/Home.js
import React from "react";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
function Homee() {
    const user = auth.currentUser;
    const handleLogout = () => {
        signOut(auth);
    };
    return (
        <div className="main">

            <div style={{ padding: 30 }}>
                <h2>Welcome to Delivery App!</h2>
                {user ? (
                    <p>Logged in as: <strong>{user.email}</strong></p>
                ) : (
                    <p>You are not logged in.</p>
                )}
                <button onClick={handleLogout}>Logout</button>

            </div>
            <div className="d-flex">
                <div className="px-3"> <Link to="/parcel"> Book Parcel</Link></div>
                <div className="px-3"><Link to="/track"> Track a Parcel</Link></div>
                <div className="px-3">  <Link to="/bookings"> My Bookings</Link></div>
               
                
               
            </div>
        </div>
    );
}

export default Homee;
