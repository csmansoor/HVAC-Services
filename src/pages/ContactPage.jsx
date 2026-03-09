import React, { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const contactInfo = [
    { icon: '📞', title: 'Call Us', detail: '(123) 456-7890', sub: '24/7 Emergency Line', link: 'tel:+11234567890' },
    { icon: '✉️', title: 'Email Us', detail: 'info@hvacpro.ca', sub: 'We reply within 2 hours', link: 'mailto:info@hvacpro.ca' },
    { icon: '📍', title: 'Visit Us', detail: '123 Main Street', sub: 'Toronto, ON M1M 1M1', link: null },
    { icon: '🕐', title: 'Business Hours', detail: 'Mon-Fri: 8AM-6PM', sub: 'Emergency: 24/7', link: null },
  ]

  return (
    <div>
      <style>{`
        .contact-hero {
          background: linear-gradient(135deg, #000000 0%, #1A1A1A 100%);
          padding: 120px 0 80px;
          text-align: center;
        }
        .contact-badge {
          display: inline-block;
          background: rgba(230, 30, 50, 0.15);
          border: 1px solid #E61E32;
          color: #E61E32;
          padding: 6px 20px;
          border-radius: 50px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .contact-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: clamp(2rem, 5vw, 3.5rem);
          color: #FFFFFF;
          margin-bottom: 15px;
          text-shadow: 2px 2px 0 #E61E32, 4px 4px 10px rgba(0,0,0,0.5);
        }
        .info-card {
          background: #FFFFFF;
          border: 1px solid #E5E5E5;
          border-radius: 12px;
          padding: 30px 25px;
          text-align: center;
          transition: all 0.4s ease;
          height: 100%;
        }
        .info-card:hover {
          transform: translateY(-5px);
          border-color: #E61E32;
          box-shadow: 0 10px 25px rgba(230,30,50,0.15);
        }
        .info-icon { font-size: 2.5rem; margin-bottom: 15px; display: block; }
        .info-title { font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 17px; color: #000; margin-bottom: 8px; }
        .info-detail { font-family: 'Open Sans', sans-serif; font-size: 16px; color: #333; margin-bottom: 4px; }
        .info-sub { font-family: 'Open Sans', sans-serif; font-size: 13px; color: #8A8A8A; margin: 0; }
        .info-detail a { color: #E61E32; text-decoration: none; font-weight: 600; }
        .info-detail a:hover { text-decoration: underline; }
        .form-section { padding: 80px 0; background: #F5F5F5; }
        .form-input {
          width: 100%;
          padding: 14px 18px;
          border: 1px solid #E5E5E5;
          border-radius: 6px;
          font-family: 'Open Sans', sans-serif;
          font-size: 15px;
          outline: none;
          transition: border-color 0.3s;
          background: #FFFFFF;
          margin-bottom: 20px;
        }
        .form-input:focus { border-color: #E61E32; box-shadow: 0 0 0 3px rgba(230,30,50,0.1); }
        .form-textarea { min-height: 150px; resize: vertical; }
        .form-select { appearance: auto; cursor: pointer; }
        .form-submit {
          background: linear-gradient(to bottom, #E61E32, #B81828);
          color: #FFFFFF;
          padding: 16px 40px;
          border: none;
          border-radius: 4px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 6px 0 #B81828, 0 10px 20px rgba(0,0,0,0.3);
          transition: all 0.1s ease;
          width: 100%;
        }
        .form-submit:hover { transform: translateY(-2px); box-shadow: 0 8px 0 #B81828, 0 15px 25px rgba(0,0,0,0.4); }
        .form-submit:active { transform: translateY(4px); box-shadow: 0 2px 0 #B81828; }
        .success-msg {
          background: #D4EDDA;
          color: #155724;
          padding: 15px 20px;
          border-radius: 6px;
          font-family: 'Open Sans', sans-serif;
          font-size: 15px;
          margin-bottom: 20px;
          text-align: center;
        }
        .map-container {
          width: 100%;
          height: 350px;
          border-radius: 12px;
          overflow: hidden;
          border: 2px solid #E5E5E5;
          background: #F0F0F0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Open Sans', sans-serif;
          color: #8A8A8A;
          font-size: 16px;
        }
      `}</style>

      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <span className="contact-badge">Contact Us</span>
          <h1 className="contact-title">Get In Touch</h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '18px', color: '#B3B3B3', maxWidth: '500px', margin: '0 auto' }}>
            Have a question or need service? We're here to help 24/7.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="row g-4">
            {contactInfo.map((info, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="info-card">
                  <span className="info-icon">{info.icon}</span>
                  <h4 className="info-title">{info.title}</h4>
                  <p className="info-detail">
                    {info.link ? <a href={info.link}>{info.detail}</a> : info.detail}
                  </p>
                  <p className="info-sub">{info.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="form-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <span style={{ color: '#E61E32', fontFamily: 'Montserrat', fontWeight: 600, fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase' }}>Send a Message</span>
              <h2 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#000', margin: '10px 0 30px' }}>
                Request a Free Estimate
              </h2>

              {submitted && <div className="success-msg">✅ Thank you! We'll get back to you within 2 hours.</div>}

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" name="name" placeholder="Your Full Name *" className="form-input" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" name="email" placeholder="Email Address *" className="form-input" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <input type="tel" name="phone" placeholder="Phone Number" className="form-input" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="col-md-6">
                    <select name="service" className="form-input form-select" value={formData.service} onChange={handleChange}>
                      <option value="">Select a Service</option>
                      <option value="heat-pump">Heat Pump Services</option>
                      <option value="water-heater">Water Heating</option>
                      <option value="heating">Heating Services</option>
                      <option value="cooling">Cooling Services</option>
                      <option value="boiler">Boiler Services</option>
                      <option value="fireplace">Fireplace Services</option>
                      <option value="air-quality">Air Quality & Ventilation</option>
                      <option value="water-filtration">Water Filtration</option>
                      <option value="gas-line">Gas Line Services</option>
                      <option value="ductwork">Ductwork Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <textarea name="message" placeholder="Tell us about your needs... *" className="form-input form-textarea" value={formData.message} onChange={handleChange} required />
                <button type="submit" className="form-submit">Submit Request →</button>
              </form>
            </div>
            <div className="col-lg-5">
              <span style={{ color: '#E61E32', fontFamily: 'Montserrat', fontWeight: 600, fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase' }}>Our Location</span>
              <h2 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#000', margin: '10px 0 30px' }}>
                Find Us
              </h2>
              <div className="map-container">
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '3rem', display: 'block', marginBottom: '10px' }}>📍</span>
                  <p style={{ margin: '0 0 5px', fontWeight: 600, color: '#333' }}>123 Main Street</p>
                  <p style={{ margin: 0 }}>Toronto, ON M1M 1M1, Canada</p>
                </div>
              </div>

              <div style={{ marginTop: '30px', padding: '25px', background: '#FFF', borderRadius: '12px', border: '1px solid #E5E5E5' }}>
                <h4 style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '17px', color: '#000', marginBottom: '15px' }}>
                  🕐 Business Hours
                </h4>
                <div style={{ fontFamily: 'Open Sans', fontSize: '14px', color: '#555', lineHeight: 2 }}>
                  <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                  <div>Saturday: 9:00 AM - 4:00 PM</div>
                  <div>Sunday: Closed</div>
                  <div style={{ color: '#E61E32', fontWeight: 700, marginTop: '5px' }}>🚨 Emergency Service: 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
