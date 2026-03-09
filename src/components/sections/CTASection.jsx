import React from 'react'
import { Link } from 'react-router-dom'

const CTASection = () => {
  return (
    <section style={sectionStyle}>
      <style>{`
        .cta-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: clamp(2rem, 5vw, 3.5rem);
          color: #FFFFFF;
          margin-bottom: 15px;
          text-shadow:
            1px 1px 0 rgba(0,0,0,0.3),
            2px 2px 0 rgba(0,0,0,0.2),
            3px 3px 10px rgba(0,0,0,0.4);
        }
        .cta-subtitle {
          font-family: 'Open Sans', sans-serif;
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: rgba(255,255,255,0.9);
          margin-bottom: 10px;
          line-height: 1.8;
        }
        .cta-phone {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          color: #FFFFFF;
          text-decoration: none;
          display: inline-block;
          margin: 20px 0 30px;
          transition: all 0.3s ease;
          text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
        }
        .cta-phone:hover {
          color: #FFFFFF;
          transform: scale(1.05);
          text-shadow: 0 0 20px rgba(255,255,255,0.5);
        }
        .cta-btn-white {
          background: #FFFFFF;
          color: #E61E32;
          padding: 16px 40px;
          border-radius: 4px;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 16px;
          display: inline-block;
          transition: all 0.3s ease;
          box-shadow: 0 6px 0 rgba(0,0,0,0.2), 0 10px 20px rgba(0,0,0,0.3);
          margin-right: 15px;
        }
        .cta-btn-white:hover {
          transform: translateY(-3px);
          color: #E61E32;
          box-shadow: 0 8px 0 rgba(0,0,0,0.2), 0 15px 30px rgba(0,0,0,0.4);
        }
        .cta-btn-outline {
          background: transparent;
          color: #FFFFFF;
          padding: 14px 38px;
          border-radius: 4px;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 16px;
          border: 2px solid #FFFFFF;
          display: inline-block;
          transition: all 0.3s ease;
        }
        .cta-btn-outline:hover {
          background: #FFFFFF;
          color: #E61E32;
          transform: translateY(-3px);
        }
        @media (max-width: 768px) {
          .cta-buttons { flex-direction: column; align-items: center; }
          .cta-btn-white, .cta-btn-outline { width: 100%; text-align: center; margin: 5px 0; }
        }
      `}</style>

      {/* Background overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(135deg, rgba(230,30,50,0.92) 0%, rgba(184,24,40,0.95) 50%, rgba(0,0,0,0.9) 100%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.2)',
            color: '#FFFFFF',
            padding: '6px 20px',
            borderRadius: '50px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>
            Free Estimates Available
          </span>

          <h2 className="cta-title">
            Ready To Upgrade Your<br />Home Comfort?
          </h2>

          <p className="cta-subtitle">
            Get a free, no-obligation estimate on any HVAC service. Our experts are
            standing by to help you find the perfect solution for your home.
          </p>

          <a href="tel:+11234567890" className="cta-phone">
            📞 (123) 456-7890
          </a>

          <div className="cta-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="cta-btn-white">
              Get Free Estimate
            </Link>
            <Link to="/services" className="cta-btn-outline">
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const sectionStyle = {
  padding: '100px 0',
  position: 'relative',
  overflow: 'hidden',
  backgroundImage: 'url(https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
}

export default CTASection
