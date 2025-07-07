import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const [activeTab, setActiveTab] = useState("mobile");
    const [inputValue, setInputValue] = useState("");

    const images = [
        "delivery3.jpg.jpg",
        "delivery4.jpg.jpg",
        "delivery6.jpg.jpg"
    ];

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setInputValue("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Tracking by ${activeTab}:`, inputValue);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        pauseOnHover: false
    };

    return (
        <>
            <div className="tf-slideshow">
                <Slider {...settings}>
                    {images.map((img, index) => (
                        <div className="slider_wrap" key={index}>
                            <div
                                className="banner"
                                style={{
                                    backgroundImage: `linear-gradient(to bottom, rgba(67, 66, 66, 0.5), rgba(43, 36, 36, 0.3)), url(/assets/img/Banner/${img})`,
                                }}
                            >
                                <div className="taglineArea">
                                    <h1>Your Trusted Delivery & Shopping Partner.</h1>
                                    <p>Speedy shipping. Best deals. Seamless experience.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                <div className="track-bar-wrapper">
                    <div className="track-bar">
                        <div className="track-title">
                            <i className="fa-solid fa-location-dot"></i>
                            <span> Track Your Shipment</span>
                        </div>

                        <div className="track-tabs">
                            <button
                                className={`track-tab ${activeTab === "mobile" ? "active-tab" : ""}`}
                                onClick={() => handleTabChange("mobile")}
                            >
                                Mobile No.
                            </button>
                            <button
                                className={`track-tab ${activeTab === "awb" ? "active-tab" : ""}`}
                                onClick={() => handleTabChange("awb")}
                            >
                                AWB No.
                            </button>
                            <button
                                className={`track-tab ${activeTab === "orderId" ? "active-tab" : ""}`}
                                onClick={() => handleTabChange("orderId")}
                            >
                             Order ID
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="track-form">
                            <input
                                type="text"
                                placeholder={`Enter ${activeTab === 'mobile' ? 'Mobile No.' : activeTab === 'awb' ? 'AWB No.' : 'Order ID'}`}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="track-input"
                            />
                            <button type="submit" className="track-submit">
                                <i className="fa-solid fa-angle-right"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
