import { FaLightbulb, FaChartLine, FaShieldAlt, FaUsers } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Georgio Wilou",
    role: "Manager",
    image: "/public/images/about-slider-1.jpg",
    gradient: "linear-gradient(90deg, rgba(0,0,0,0.8), rgba(0,0,0,0.2))",
  },
  {
    id: 2,
    name: "Elizabeth Sherr",
    role: "Pr director",
    image: "/public/images/about-slider-2.jpg",
    gradient: "linear-gradient(90deg, rgba(0,0,0,0.85), rgba(0,0,0,0.1))",
  },
  {
    id: 3,
    name: "Julia String",
    role: "Coordinator",
    image: "/public/images/about-slider-3.jpg",
    gradient: "linear-gradient(90deg, rgba(0,0,0,0.85), rgba(0,0,0,0.1))",
  },
  {
    id: 4,
    name: "Julia String",
    role: "Coordinator",
    image: "/public/images/about-slider-4.jpg",
    gradient: "linear-gradient(90deg, rgba(0,0,0,0.85), rgba(0,0,0,0.1))",
  },
];

const values = [
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    desc: "Delivering forward-thinking solutions that challenge norms and unlock new opportunities.",
  },
  {
    icon: <FaChartLine />,
    title: "Growth",
    desc: "Driving smart, scalable expansion through data-driven logistics and planning.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Integrity",
    desc: "Committed to transparency, accountability, and ethical service in every shipment.",
  },
  {
    icon: <FaUsers />,
    title: "Collaboration",
    desc: "Building strong partnerships with clients to create long-term, shared success.",
  },
];
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animation only once
    });
  }, []);


  return (
    <div className="about-body">
      {/* Hero Section */}
      <section className="hero-about-us-section">
        <div className="hero-about-inside">
          <h1 className="hero-about-head">ABOUT US</h1>
        </div>
      </section>

      <section className="our-info" data-aos="fade-up">
        <div className="img-container position-relative">
          <img
            src="/images/about-1.jpg"
            alt="Vibrant city harbor showing a large ship docked with colorful buildings in the background during daylight"
            className="img-our-info"
          />
        </div>
        <div style={{ flex: "1 1 350px", maxWidth: "600px" }}>
          <h2 className="our-corpo-head">ABOUT OUR CORPORATION</h2>
          <p className="our-info-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor nostrud
            exercitation ullamco.
          </p>
          <p className="our-info-para">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </section>

      {/* service sec */}
      <section className="vision-mission-section py-5">
        <div className="container text-center">
          <h1 className="section-title head-about">Our Vision & Mission</h1>
          <p className="section-subtitle mb-5">
            We're focused on reshaping delivery experiences through smart
            logistics, ethical values, and strong partnerships.
          </p>

          {/* First Row */}
          <div className="row justify-content-center">
            {values.slice(0, 2).map((item, index) => (
              <div className="col-md-6 mb-4" key={index} data-aos="fade-up">
                <div className="vision-mission-card">
                  <div className="icon-circle mx-auto mb-3">{item.icon}</div>
                  <h5 className="fw-bold vision-card-title">{item.title}</h5>
                  <p className="vision-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="row justify-content-center">
            {values.slice(2, 4).map((item, index) => (
              <div className="col-md-6 mb-4" key={index + 2}>
                <div className="vision-mission-card">
                  <div className="icon-circle mx-auto mb-3">{item.icon}</div>
                  <h5 className="fw-bold vision-card-title">{item.title}</h5>
                  <p className="vision-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<section className="cta-section text-center py-5" data-aos="fade-up">
  <div className="container">
    <div className="cta-content-wrapper">
      <h1 className="cta-heading">Let’s Deliver Smarter Together</h1>
      <p className="cta-subtext">
        Join us in transforming the future of parcel delivery. We’re ready when you are.
      </p>
      <a href="/contact" className="button">
        Contact Us
      </a>
    </div>
  </div>
</section>



      {/* our team */}
      <section className="team-section" aria-label="Meet Our Team">
        <h1 className="head-about team-head " data-aos="fade-down">
          Meet Our Team
        </h1>
        <div className="cards-container">
          
            {teamMembers.map(({ id, name, role, image }) => (
              <div key={id} className="meet-team-card">
                <div key={id} className="parent-card">
                  <div className="image-wrapper">
                    <img src={image} alt={role} />
                    <div className="info-bar overlay">
                      <span className="name">{name}</span>
                      <span className="role overlay-title">{role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          
        </div>
      </section>




    </div>
  );
};

export default About;
