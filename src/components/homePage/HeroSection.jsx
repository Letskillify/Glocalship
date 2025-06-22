import React from 'react'

function HeroSection() {
  return (
    <div>
       <section id="hero" class="hero section dark-background">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="hero-content" >
              <div class="hero-tag">
                <i class="bi bi-rocket-takeoff"></i>
                <span>Innovative Solutions</span>
              </div>
              <h1>Achieving <span class="highlight">Outstanding Results</span> for Your Growth</h1>
              <p class="lead">Our dedicated team provides exceptional service to help you reach your business goals effectively.</p>
              <ul class="hero-features">
                <li><i class="bi bi-check-circle"></i> Streamlined operational processes</li>
                <li><i class="bi bi-check-circle"></i> Enhanced customer engagement strategies</li>
                <li><i class="bi bi-check-circle"></i> Data-driven decision support</li>
              </ul>
              <div class="hero-cta">
                <a href="#services" class="btn btn-primary">Explore Our Services</a>
                <a href="tel:+1 (555) 987-6543" class="btn btn-link"><i class="bi bi-telephone"></i> +1 (555) 987-6543</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-image-wrapper">
              <img src="assets/img/about/about-square-13.webp" alt="" class="img-fluid hero-image"/>
              <div class="stat-card top-right">
                <div class="stat-value">18.9K</div>
                <div class="stat-label">Improved market presence</div>
                <div class="stat-icon">
                  <i class="bi bi-graph-up-arrow"></i>
                </div>
              </div>
              <div class="stat-card bottom-left">
                <div class="stat-value">+450%</div>
                <div class="stat-label">Increased lead generation</div>
                <div class="stat-icon">
                  <i class="bi bi-graph-up"></i>
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

export default HeroSection
