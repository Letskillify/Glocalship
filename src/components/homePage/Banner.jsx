import React, { useState, useEffect } from "react";

const Banner = () => {
    const [activeTab, setActiveTab] = useState("mobile");
    const [inputValue, setInputValue] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "delivery3.jpg.jpg",
        "delivery4.jpg.jpg",
        "delivery6.jpg.jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setInputValue("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Tracking by ${activeTab}:`, inputValue);
    };

    return (
        <div
            className="banner"
            style={{
                backgroundImage: `url(/assets/img/Banner/${images[currentIndex]})`,
            }}
        >
            <div className="bannerArea">
                <div className="track-order-box">
                    <h2>Track your order through</h2>
                    <div className="tabs">
                        <button
                            className={`active ${activeTab === "mobile" ? "active" : ""}`}
                            onClick={() => handleTabChange("mobile")}
                        >
                            Mobile
                        </button>
                        <button
                            className={`active ${activeTab === "awb" ? "active" : ""}`}
                            onClick={() => handleTabChange("awb")}
                        >
                            AWB
                        </button>
                        <button
                            className={`active ${activeTab === "orderId" ? "active" : ""}`}
                            onClick={() => handleTabChange("orderId")}
                        >
                            Order Id
                        </button>
                        <button
                            className={`active ${activeTab === "lrn" ? "active" : ""}`}
                            onClick={() => handleTabChange("lrn")}
                        >
                            LRN
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder={`Enter your ${activeTab}`}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="inputBox"
                        />
                        <button type="submit" className="submit">Get OTP</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;
