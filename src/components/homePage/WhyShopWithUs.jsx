import React from 'react';
const WhyShopWithUs = () => {
    return (
        <div
            className="whyshop-bg  section-title"
            style={{
                position: 'relative',
                backgroundImage: "url('/assets/img/illustration/whyy.jpg')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',   
                overflow: 'hidden'
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(255, 68, 0, 0.36)', // orange shade with transparency
                    zIndex: 0
                }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="whyshop-title">Why Shop with Us?</h2>
                <div className="whyshop-features">
                    <div className="whyshop-card">
                        <div className="whyshop-icon">
                            <a href=""> <img src="/assets/img/illustration/truck.svg" alt="Free Shipping Everywhere in India" /></a>
                        </div>
                        <h3 className="whyshop-card-title">Free Shipping Everywhere in India</h3>
                        <p className="whyshop-card-desc">
                            Enjoy free delivery to all destinations across India.
                        </p>
                    </div>
                    <div className="whyshop-card">
                        <div className="whyshop-icon">
                            <a href=""> <img src="/assets/img/illustration/bestdeal.svg" alt="Exclusive Offers and Deals" /></a>
                        </div>
                        <h3 className="whyshop-card-title">Exclusive Offers and Deals</h3>
                        <p className="whyshop-card-desc">
                            Enjoy discounts up to 70% on more than 30,000 select merchandise. Shop now!
                        </p>
                    </div>
                    <div className="whyshop-card">
                        <div className="whyshop-icon">
                            <a href=""><img src="/assets/img/illustration/bestprice.svg" alt="The Best Price in the Market" /></a>
                        </div>
                        <h3 className="whyshop-card-title">The Best Price in the Market</h3>
                        <p className="whyshop-card-desc">
                            Unmatched savings on a wide range of products. Shop smart, shop with us!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyShopWithUs;