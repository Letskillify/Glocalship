
function Footer() {
  return (
    <footer id="footer" className="footer"> 
      <div className="container">
        <div className="row ">

          <div className="col-lg-4 col-md-6">
            <h5 className=" mb-3 footer-logo">Glocalship</h5>
            <p>
              Glocalship is your trusted global parcel delivery partner. We provide fast, reliable, and secure shipping solutions worldwide.
            </p>
            <div className="social-links d-flex gap-3">
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3">
            <h6 className="footer-link-head">Quick Links</h6>
            <ul className="ul-menu list-unstyled">
              <li><a href="#" className="list">Home</a></li>
              <li><a href="#" className="list">Track Parcel</a></li>
              <li><a href="#" className="list">Pricing</a></li>
              <li><a href="#" className="list">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3">
            <h6 className="footer-link-head">Services</h6>
            <ul className="ul-menu list-unstyled">
              <li><a href="#" className="list">Local Delivery</a></li>
              <li><a href="#" className="list">International Shipping</a></li>
              <li><a href="#" className="list">Warehouse Solutions</a></li>
              <li><a href="#" className="list">E-commerce Fulfillment</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3">
            <h6 className="footer-link-head">Support</h6>
            <ul className="ul-menu list-unstyled">
              <li><a href="#" className="list">FAQs</a></li>
              <li><a href="#" className="list">Help Center</a></li>
              <li><a href="#" className="list">Privacy Policy</a></li>
              <li><a href="#" className="list">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-3">
            <h6 className="footer-link-head">Address</h6>
            <ul className="ul-menu list-unstyled">
              <li><i className="fas fa-map-marker-alt me-2"></i>A-108, Global Business Park</li>
              <li>New Delhi, India - 110001</li>
              <li className="mt-2"><i className="fas fa-phone me-2"></i>+91 98765 43210</li>
              <li><i className="fas fa-envelope me-2"></i>support@glocalship.com</li>
            </ul>
          </div>
        </div>

        <hr className="text-secondary mt-4" />

        <div className="text-center pb-3">
          <p className="mb-0">&copy; 2025 <strong>Glocalship</strong>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
