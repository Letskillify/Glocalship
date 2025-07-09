// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./components/homePage/Home"; // Import the Home component here
import ParcelBooking from './user/ParcelBooking';
import TrackParcel from "./user/TrackParcel";
import MyBookings from "./user/MyBookings";
import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./static/Header";
import Footer from "./static/Footer";
import Preloader from "./components/Preloader";
// import Home from "./pages/Home";


const AppRoutes = ({ user }) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Whether animation should happen only once
    });
  }, []);
  const location = useLocation();

  // Routes where Header and Footer should not be shown
  const noLayoutRoutes = ["/login", "/signup", "/admin/login"];
  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute user={user}>
              <Home />
          
            </PrivateRoute>
          }
        />
        <Route
          path="/parcel"
          element={
            <PrivateRoute user={user}>
              <ParcelBooking />
            </PrivateRoute>
          }
        />
        <Route
          path="/track"
          element={
            <PrivateRoute user={user}>
              <TrackParcel />
            </PrivateRoute>
          }
        />
        <Route
          path="/bookings"
          element={
            <PrivateRoute user={user}>
              <MyBookings />
            </PrivateRoute>
          }
        />
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        {/* <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} /> */}
        {/* Admin routes */}
        {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Firebase auth init

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div><Preloader /></div>;

  return (
    <Router>
      <AppRoutes user={user} />
    </Router>
  );
}

export default App;
