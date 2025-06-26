import React from 'react'
import plane from '//Glocalship/public/assets/img/illustration/paper-plane.png';
import illustration from '//Glocalship/public/assets/img/illustration/illustrationcontact.avif';
import { FaUser, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
function Contact() {
  return (
    <div>
      <section id="contact" class="contact section">

        <div class="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="contact-main-wrapper">
            <div class="map-wrapper">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" width="100%" height="100%" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact-card responsive-card">
              <div className="contact-left">
                <h2>Get in touch</h2>
                <p>a queue or waiting list that users may encounter when trying to access a popular food or grocery delivery service </p>
                <img src={illustration} alt="illustration" className="illustration" />
              </div>
              <div className="contact-right">
                {/* Paper plane image absolutely positioned behind the form */}
                <img
                  src={plane}
                  alt="plane"
                  className="plane-img-bg"
                  aria-hidden="true"
                />
                <form>
                  <div className="input-group">
                    <FaUser />
                    <input type="text" placeholder="Your name" autoComplete='' required />
                    <FaPhone />
                    <input type="text" placeholder="Your phone no." required />
                  </div>
                  <div className="input-group">
                    <FaEnvelope />
                    <input type="email" placeholder="Your email" required />
                  </div>
                  <textarea placeholder="Message..."></textarea>
                  <button type="submit">Submit</button>
                </form>
                <div className="social-icons">
                  <FaFacebook className="icon" />
                  <FaInstagram className="icon" />
                  <FaLinkedin className="icon" />
                </div>
              </div>
            </div>

            <div className="map-container">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.749168366532!2d-6.267493484228063!3d53.34410437997937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9d00ab05f7%3A0x3a729b2f76f6e741!2sDublin%2C%20Ireland!5e0!3m2!1sen!2sin!4v1689394012345!5m2!1sen!2sin"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
