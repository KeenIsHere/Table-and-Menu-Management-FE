"use client"

import "./about-page.css"

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About CafeBook</h1>
          <p>Where great coffee meets comfortable spaces</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2018, CafeBook began as a simple dream: to create a space where people could enjoy
                exceptional coffee while finding their perfect spot to work, study, or simply relax. What started as a
                small neighborhood cafe has grown into a beloved community hub.
              </p>
              <p>
                We believe that great coffee is more than just a beverage—it's a catalyst for connection, creativity,
                and community. Every cup we serve is carefully crafted using ethically sourced beans from sustainable
                farms around the world.
              </p>
            </div>
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&h=400&fit=crop"
                alt="Cafe interior"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="our-mission">
        <div className="container">
          <h2>Our Mission</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">☕</div>
              <h3>Quality Coffee</h3>
              <p>We source the finest beans and craft each cup with precision and care</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>Committed to environmental responsibility and supporting sustainable farming</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🤝</div>
              <h3>Community</h3>
              <p>Creating a welcoming space where everyone feels at home</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">💡</div>
              <h3>Innovation</h3>
              <p>Continuously improving our service and embracing new technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="our-team">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="Sarah Johnson"
              />
              <h3>Sarah Johnson</h3>
              <p>Founder & Head Barista</p>
              <p>"Coffee is my passion, and creating the perfect cup is my art."</p>
            </div>
            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616c6d4e6e8?w=200&h=200&fit=crop&crop=face"
                alt="Maria Garcia"
              />
              <h3>Maria Garcia</h3>
              <p>Operations Manager</p>
              <p>"I ensure every guest has an exceptional experience from start to finish."</p>
            </div>
            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                alt="David Chen"
              />
              <h3>David Chen</h3>
              <p>Head Chef</p>
              <p>"Fresh ingredients and creative recipes make every meal memorable."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="our-values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-content">
            <div className="value-item">
              <h3>Excellence</h3>
              <p>We strive for perfection in every cup and every interaction</p>
            </div>
            <div className="value-item">
              <h3>Authenticity</h3>
              <p>We stay true to our roots while embracing innovation</p>
            </div>
            <div className="value-item">
              <h3>Inclusivity</h3>
              <p>Everyone is welcome in our space, regardless of background</p>
            </div>
            <div className="value-item">
              <h3>Sustainability</h3>
              <p>We care for our planet and support ethical practices</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
