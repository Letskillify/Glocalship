import React, { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { auth } from "../firebase/firebaseConfig";
import { Link } from "react-router-dom";
function ParcelBooking({ onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    pickupAddress: "",
    dropAddress: "",
    description: "",
    weight: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const parcelId =
    "ORD-" +
    Math.random().toString(36).substr(2, 5).toUpperCase() +
    Date.now().toString().slice(-4);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");

    try {
      const user = auth.currentUser;
      if (!user) {
        alert("You must be logged in to book a parcel.");
        return;
      }

      const orderId = uuidv4();

      await addDoc(collection(db, "parcels"), {
        ...formData,
        parcelId,
        orderId,
        userId: user.uid,
        imageUrl: "",
        status: "Order Placed",
        createdAt: serverTimestamp(),
      });

      setSuccessMsg(`✅ Order placed! Your Parcel ID is: ${parcelId}`);

      setFormData({
        fullName: "",
        phone: "",
        pickupAddress: "",
        dropAddress: "",
        description: "",
        weight: "",
      });

      // Optionally auto-close the modal after success
      // setTimeout(() => onClose(), 3000);
    } catch (err) {
      console.error("❌ Error placing order:", err);
      alert("Failed to book parcel.");
    }

    setLoading(false);
  };

  return (
    <div>
      <section id="hero" className="hero section dark-background">
        <div className="container" >
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content" data-aos-delay="100">
                <div className="hero-tag">
                  <i className="bi bi-rocket-takeoff"></i>
                  <span>Innovative Solutions</span>
                </div>
                <h1>
                  Achieving <span className="highlight">Outstanding Results</span> for Your Growth
                </h1>
                <p className="lead">
                  Our dedicated team provides exceptional service to help you reach your business goals effectively.
                </p>
                <ul className="hero-features">
                  <li><i className="bi bi-check-circle"></i> Streamlined operational processes</li>
                  <li><i className="bi bi-check-circle"></i> Enhanced customer engagement strategies</li>
                  <li><i className="bi bi-check-circle"></i> Data-driven decision support</li>
                </ul>
                <div className="hero-cta">
                  <a href="#services" className="btn btn-primary">Explore Our Services</a>
                  <a href="tel:+15559876543" className="btn btn-link">
                    <i className="bi bi-telephone"></i> +1 (555) 987-6543
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-image-wrapper" data-aos-delay="300">
                <img
                  src="assets/img/about/about-square-13.webp"
                  alt="Hero Visual"
                  className="img-fluid hero-image"
                />
                <div className="stat-card top-right">
                  <div className="stat-value">18.9K</div>
                  <div className="stat-label">Improved market presence</div>
                  <div className="stat-icon">
                    <i className="bi bi-graph-up-arrow"></i>
                  </div>
                </div>
                <div className="stat-card bottom-left">
                  <div className="stat-value">+450%</div>
                  <div className="stat-label">Increased lead generation</div>
                  <div className="stat-icon">
                    <i className="bi bi-graph-up"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content p-3">
            <div className="modal-header justify-content-between">
              <div><h5 className="modal-title">📦 Book a Parcel</h5></div>
              <div><Link to="/"><button type="button" className="btn-close" onClick={onClose}> </button></Link></div>

            </div>
            <div className="modal-body">
              {successMsg && <div className="alert alert-success">{successMsg}</div>}
              <form onSubmit={handleSubmit}>
                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className=" col-md-6  mb-3">
                    <label className="form-label">Mobile Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Pickup Address</label>
                  <textarea
                    className="form-control"
                    name="pickupAddress"
                    required
                    value={formData.pickupAddress}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Drop Address</label>
                  <textarea
                    className="form-control"
                    name="dropAddress"
                    required
                    value={formData.dropAddress}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Parcel Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Weight (kg)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="weight"
                    required
                    value={formData.weight}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Booking..." : "Book Parcel"}
                  </button>
                  <Link to="/"><button type="button" className="btn btn-secondary" >Cancel</button></Link>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParcelBooking;
