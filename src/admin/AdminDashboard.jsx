// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is logged in
    if (sessionStorage.getItem("isAdminLoggedIn") !== "true") {
      navigate("/admin/login");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const q = query(collection(db, "parcels"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        let allOrders = [];
        querySnapshot.forEach((doc) => {
          allOrders.push({ id: doc.id, ...doc.data() });
        });
        setOrders(allOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("isAdminLoggedIn");
    navigate("/admin/login");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Dashboard</h2>
      <button onClick={handleLogout} style={{ marginBottom: 20 }}>
        Logout
      </button>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Full Name</th>
              <th>Phone</th>
              <th>Pickup Address</th>
              <th>Drop Address</th>
              <th>Description</th>
              <th>Weight (kg)</th>
              <th>Status</th>
              <th>Parcel ID</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.parcelId || "N/A"}</td>
                <td>{order.fullName}</td>
                <td>{order.phone}</td>
                <td>{order.pickupAddress}</td>
                <td>{order.dropAddress}</td>
                <td>{order.description}</td>
                <td>{order.weight}</td>
                <td>{order.status}</td>
                <td>{order.parcelId}</td>
                <td>{order.createdAt?.toDate ? order.createdAt.toDate().toLocaleString() : "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
