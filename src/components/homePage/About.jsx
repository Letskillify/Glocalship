import { FaLightbulb, FaChartLine, FaShieldAlt, FaUsers } from "react-icons/fa";

import { useEffect } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Georgio Wilou",
    role: "Manager",
    image: "/assets/img/about/about-slider-1.png", // corrected
    gradient: "linear-gradient(90deg, rgba(0,0,0,0.8), rgba(0,0,0,0.2))",
  },
  {
    id: 2,
    name: "Elizabeth Sherr",
    role: "Pr director",
    image: "/assets/img/about/about-slider-2.png",
    gradient: "linear-gradient(90deg, rgba(0,0,0,0.85), rgba(0,0,0,0.1))",
  },
  {
    id: 3,
    name: "Julia String",
    role: "Coordinator",
    image: "/assets/img/about/about-slider-3.png",
    gradient: "linear-gradient(90deg, rgba(0,0,0,0.85), rgba(0,0,0,0.1))",
  },
  {
    id: 4,
    name: "Julia String",
    role: "Coordinator",
    image: "/assets/img/about/about-slider-4.png",
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
    <div className=" container about-body">
      {/* Hero Section */}
      <section className="hero-about-us-section">
        <div className="hero-about-inside">
          <h1 className="hero-about-head">ABOUT US</h1>
        </div>
      </section>

      <section className="our-info" data-aos="fade-up">
        <div className="img-container">
          <img
            src=" assets/img/about/about-1.png"
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

      {/* our team */}
      <section className="team-section" aria-label="Meet Our Team">
        <h1 className="head-about team-head " data-aos="fade-down">
          Meet Our Team
        </h1>
        <div className="cards-container">

          {teamMembers.map(({ name, role, image }) => (
            <div className="meet-team-card">
              <div className="image-wrapper">
                <img src={image} alt={role} />
                <div className="info-bar">
                  <span className="name">{name}</span>
                  <br/>
                  <span className="role">{role}</span>
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
