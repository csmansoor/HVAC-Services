import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../utils/images'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Heat Pump Services', path: '/services/heat-pump' },
    { name: 'Water Heating Services', path: '/services/water-heater' },
    { name: 'Heating Services', path: '/services/heating' },
    { name: 'Cooling Services', path: '/services/cooling' },
    { name: 'Boiler Services', path: '/services/boiler' },
    { name: 'Fireplace Services', path: '/services/fireplace' },
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Care Plans', path: '/care-plans' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <footer style={styles.footer}>
      <style>{`
        .footer-link {
          color: #B3B3B3;
          text-decoration: none;
          font-family: 'Open Sans', sans-serif;
          font-size: 14px;
          transition: color 0.3s ease;
          display: block;
          margin-bottom: 10px;
        }
        .footer-link:hover {
          color: #FFFFFF;
          padding-left: 5px;
        }
        .social-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(179,179,179,0.15);
          border: 1px solid rgba(179,179,179,0.3);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #B3B3B3;
          text-decoration: none;
          font-size: 16px;
          transition: all 0.3s ease;
          margin-right: 8px;
        }
        .social-icon:hover {
          background: #E61E32;
          border-color: #E61E32;
          color: #FFFFFF;
          transform: translateY(-3px);
        }
        .footer-heading {
          color: #FFFFFF;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 16px;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #E61E32;
          display: inline-block;
        }
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 15px;
          color: #B3B3B3;
          font-family: 'Open Sans', sans-serif;
          font-size: 14px;
        }
        .contact-item a {
          color: #B3B3B3;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .contact-item a:hover {
          color: #FFFFFF;
        }
        .contact-icon {
          color: #E61E32;
          font-size: 16px;
          margin-top: 2px;
          flex-shrink: 0;
        }
        .footer-divider {
          border: none;
          border-top: 1px solid rgba(179,179,179,0.15);
          margin: 40px 0 20px;
        }
        .newsletter-input {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(179,179,179,0.3);
          border-radius: 4px 0 0 4px;
          padding: 10px 15px;
          color: #FFFFFF;
          font-family: 'Open Sans', sans-serif;
          font-size: 14px;
          outline: none;
          width: 100%;
          transition: border-color 0.3s ease;
        }
        .newsletter-input::placeholder {
          color: #B3B3B3;
        }
        .newsletter-input:focus {
          border-color: #E61E32;
        }
        .newsletter-btn {
          background: #E61E32;
          color: #FFFFFF;
          border: none;
          padding: 10px 20px;
          border-radius: 0 4px 4px 0;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.3s ease;
          white-space: nowrap;
        }
        .newsletter-btn:hover {
          background: #B81828;
        }
      `}</style>

      {/* MAIN FOOTER */}
      <div className="container" style={{ padding: '60px 15px 40px' }}>
        <div className="row">

          {/* COLUMN 1 - Company Info */}
          <div className="col-lg-3 col-md-6 mb-5">
            <img src={images.logo} alt="HVAC Pro Logo" height="50" style={{ marginBottom: '20px' }} />
            <p style={styles.tagline}>Your Comfort, Our Priority</p>
            <p style={styles.description}>
              Professional HVAC services for residential and commercial properties
              across Canada. Available 24/7 for all your heating and cooling needs.
            </p>
            <div style={{ marginTop: '20px' }}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">f</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">in</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon">tw</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">li</a>
            </div>
          </div>

          {/* COLUMN 2 - Quick Links */}
          <div className="col-lg-2 col-md-6 mb-5" style={{ paddingLeft: '30px' }}>
            <h4 className="footer-heading">Quick Links</h4>
            {quickLinks.map((link, index) => (
              <Link key={index} to={link.path} className="footer-link">
                › {link.name}
              </Link>
            ))}
            <Link to="/privacy-policy" className="footer-link">› Privacy Policy</Link>
            <Link to="/terms" className="footer-link">› Terms of Service</Link>
          </div>

          {/* COLUMN 3 - Services */}
          <div className="col-lg-3 col-md-6 mb-5" style={{ paddingLeft: '30px' }}>
            <h4 className="footer-heading">Our Services</h4>
            {services.map((service, index) => (
              <Link key={index} to={service.path} className="footer-link">
                › {service.name}
              </Link>
            ))}
            <Link to="/services" className="footer-link" style={{ color: '#E61E32', marginTop: '5px' }}>
              › View All Services
            </Link>
          </div>

          {/* COLUMN 4 - Contact & Newsletter */}
          <div className="col-lg-4 col-md-6 mb-5">
            <h4 className="footer-heading">Get In Touch</h4>

            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <a href="tel:+11234567890">(123) 456-7890</a>
                <br />
                <span style={{ fontSize: '12px' }}>24/7 Emergency Line</span>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">✉</span>
              <a href="mailto:info@hvacpro.ca">info@hvacpro.ca</a>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>123 Main Street, Toronto, ON M1M 1M1, Canada</span>
            </div>

            <div className="contact-item">
              <span className="contact-icon">🕐</span>
              <div>
                <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
                <div>Saturday: 9:00 AM - 4:00 PM</div>
                <div>Sunday: Closed</div>
                <div style={{ color: '#E61E32', fontWeight: '700' }}>Emergency: 24/7</div>
              </div>
            </div>

            {/* NEWSLETTER */}
            <div style={{ marginTop: '20px' }}>
              <p style={{ color: '#FFFFFF', fontFamily: 'Montserrat', fontWeight: '600', fontSize: '14px', marginBottom: '10px' }}>
                Stay Updated
              </p>
              <div style={{ display: 'flex' }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>

          </div>
        </div>

        {/* DIVIDER */}
        <hr className="footer-divider" />

        {/* BOTTOM BAR */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px',
        }}>
          <p style={styles.copyright}>
            © {currentYear} HVAC Pro. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/privacy-policy" className="footer-link" style={{ margin: 0 }}>Privacy Policy</Link>
            <Link to="/terms" className="footer-link" style={{ margin: 0 }}>Terms of Service</Link>
          </div>
        </div>

      </div>

      {/* EMERGENCY BANNER ABOVE FOOTER */}
      <div style={styles.emergencyBanner}>
        <div className="container">
          <div style={styles.emergencyInner}>
            <div style={styles.emergencyLeft}>
              <span style={styles.emergencyIcon}>🚨</span>
              <div>
                <p style={styles.emergencyTitle}>24/7 Emergency HVAC Service</p>
                <p style={styles.emergencySubtitle}>We're always here when you need us most</p>
              </div>
            </div>
            <a href="tel:+11234567890" style={styles.emergencyCallBtn}>
              📞 Call Now: (123) 456-7890
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}

const styles = {
  footer: {
    background: '#000000',
    color: '#B3B3B3',
  },
  tagline: {
    color: '#E61E32',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '700',
    fontSize: '14px',
    marginBottom: '15px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  description: {
    color: '#B3B3B3',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '14px',
    lineHeight: '1.7',
  },
  copyright: {
    color: '#B3B3B3',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '13px',
    margin: 0,
  },
  emergencyBanner: {
    background: 'linear-gradient(135deg, #E61E32, #B81828)',
    padding: '20px 0',
    boxShadow: '0 0 30px rgba(230, 30, 50, 0.4)',
  },
  emergencyInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '15px',
  },
  emergencyLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  emergencyIcon: {
    fontSize: '32px',
  },
  emergencyTitle: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '700',
    fontSize: '18px',
    margin: 0,
  },
  emergencySubtitle: {
    color: 'rgba(255,255,255,0.8)',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '13px',
    margin: 0,
  },
  emergencyCallBtn: {
    background: '#000000',
    color: '#FFFFFF',
    padding: '12px 25px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '700',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
  },
}

export default Footer