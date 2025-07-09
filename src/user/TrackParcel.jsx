import { useState } from "react";

const TrackParcel = () => {
  const [activeTab, setActiveTab] = useState("mobile");
  const [inputValue, setInputValue] = useState("");
  const [showProgress, setShowProgress] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setInputValue("");
    setShowProgress(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Tracking by ${activeTab}:`, inputValue);
    setShowProgress(true);

    setTimeout(() => {
      document
        .getElementById("progressSection")
        .scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
   
     <div className="track-section">
  <div className="container">
    <div className="row align-items-center g-4">
      {/* Left Content */}
      <div className="col-lg-6">
        <div className="track-info-box">
          <h1>📦 Fast, Reliable Parcel Tracking</h1>
          <p>Get instant updates about your package location and status.</p>
          <ul>
            <li>✅ Real-time status updates</li>
            <li>✅ Track by Mobile, AWB or Order ID</li>
            <li>✅ 24x7 support available</li>
            <li>✅ Safe & quick delivery assurance</li>
          </ul>
          <div className="support-info">
            <p>📞 +91 98765 43210</p>
            <p>📧 support@yourcourier.com</p>
          </div>
        </div>
      </div>

      {/* Right Track Form */}
      <div className="col-lg-6">
        <div className="track-card">
          <h2 className="track-title">Track Your Parcel</h2>

          <div className="track-tabs">
            <button className={`track-tab ${activeTab === "mobile" ? "active" : ""}`} onClick={() => handleTabChange("mobile")}>Mobile No.</button>
            <button className={`track-tab ${activeTab === "awb" ? "active" : ""}`} onClick={() => handleTabChange("awb")}>AWB No.</button>
            <button className={`track-tab ${activeTab === "orderId" ? "active" : ""}`} onClick={() => handleTabChange("orderId")}>Order ID</button>
          </div>

          <form onSubmit={handleSubmit} className="track-form">
            <input
              type="text"
              placeholder={`Enter ${activeTab === "mobile" ? "Mobile Number" : activeTab === "awb" ? "AWB Number" : "Order ID"}`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="track-input"
              required
            />
            <button type="submit" className="track-button">Track</button>
          </form>

          <div id="progressSection" className={`track-progress ${showProgress ? "show" : ""}`}>
            <div className="track-step completed">📦 Order Placed</div>
            <div className="track-step completed">🛒 Packed</div>
            <div className="track-step inprogress">🚚 Out for Delivery</div>
            <div className="track-step">✅ Delivered</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

  );
};

export default TrackParcel;
