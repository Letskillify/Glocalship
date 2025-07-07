import React from 'react'

function Stats() {
  return (
    <div>
       <section id="stats" className="stats section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

          <div className="col-lg-6 col-md-12">
            <div className="stats-overview text-center text-lg-start" data-aos="fade-right" data-aos-delay="200">
              <h3>Our growth in numbers</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna vel libero tincidunt, in finibus nisi faucibus. Proin vel erat nec orci sagittis ullamcorper vel at urna.</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="stats-grid" data-aos="zoom-in" data-aos-delay="300">
              <div className="stats-card">
                <div className="stats-icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <div className="stats-content">
                  <div className="stats-number">
                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span><span className="plus">+</span>
                  </div>
                  <p>Happy Clients</p>
                </div>
              </div>

              <div className="stats-card">
                <div className="stats-icon">
                  <i className="bi bi-folder2-open"></i>
                </div>
                <div className="stats-content">
                  <div className="stats-number">
                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span><span className="plus">+</span>
                  </div>
                  <p>Completed Projects</p>
                </div>
              </div>

              <div className="stats-card">
                <div className="stats-icon">
                  <i className="bi bi-headset"></i>
                </div>
                <div className="stats-content">
                  <div className="stats-number">
                    <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span><span className="plus">+</span>
                  </div>
                  <p>Support Hours</p>
                </div>
              </div>

              <div className="stats-card">
                <div className="stats-icon">
                  <i className="bi bi-person-workspace"></i>
                </div>
                <div className="stats-content">
                  <div className="stats-number">
                    <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span><span className="plus">+</span>
                  </div>
                  <p>Expert Team Members</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
    </div>
  )
}

export default Stats
