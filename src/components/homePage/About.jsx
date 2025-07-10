function About() {
  return(
    <>
      <section className="our-info" data-aos="fade-up">
        <div className="img-container" >
          <img
            src="/assets/img/about/about-home-1.png"
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
           <div className="btn-wrapper">
          <a href="#more-about" className="view-more-button">View More</a>
        </div>
        </div>
      </section>

    </>
  )
}


export default About;
