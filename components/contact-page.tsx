"use client"

import { useState } from "react"
import CustomButton from "./custom-button"
import "./contact-page.css"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Visit Us</h2>

              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-details">
                  <h3>Address</h3>
                  <p>
                    123 Coffee Street
                    <br />
                    Downtown District
                    <br />
                    City, State 12345
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-details">
                  <h3>Phone</h3>
                  <p>(555) 123-4567</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-details">
                  <h3>Email</h3>
                  <p>hello@cafebook.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div className="info-details">
                  <h3>Hours</h3>
                  <div className="hours-list">
                    <div className="hours-row">
                      <span>Monday - Friday</span>
                      <span>6:00 AM - 9:00 PM</span>
                    </div>
                    <div className="hours-row">
                      <span>Saturday</span>
                      <span>7:00 AM - 10:00 PM</span>
                    </div>
                    <div className="hours-row">
                      <span>Sunday</span>
                      <span>7:00 AM - 8:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-media">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link">
                    📘 Facebook
                  </a>
                  <a href="#" className="social-link">
                    📷 Instagram
                  </a>
                  <a href="#" className="social-link">
                    🐦 Twitter
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="form-textarea"
                  />
                </div>

                <CustomButton name="Send Message" onPress={() => {}} />
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <h3>📍 CafeBook Location</h3>
              <p>123 Coffee Street, Downtown District</p>
              <p>Easy parking available • Public transit accessible</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Do you take reservations?</h3>
              <p>
                Yes! You can book tables through our online reservation system. Walk-ins are also welcome based on
                availability.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you offer WiFi?</h3>
              <p>We provide free high-speed WiFi for all our customers. Perfect for remote work or studying.</p>
            </div>
            <div className="faq-item">
              <h3>Are you pet-friendly?</h3>
              <p>
                We welcome well-behaved pets in our outdoor seating area. Please keep them leashed and clean up after
                them.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you cater events?</h3>
              <p>
                Yes, we offer catering services for corporate events, meetings, and special occasions. Contact us for
                details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
