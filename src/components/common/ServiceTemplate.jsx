import React from 'react'
import { Link } from 'react-router-dom'

const ServiceTemplate = ({ title, icon, description, features, benefits, faqItems, image }) => {
  return (
    <div>
      <style>{`
        .svc-hero {
          background: linear-gradient(135deg, #000000 0%, #1A1A1A 100%);
          padding: 120px 0 80px;
          text-align: center;
        }
        .svc-hero-badge {
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
        .svc-hero-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: clamp(2rem, 5vw, 3.5rem);
          color: #FFFFFF;
          margin-bottom: 15px;
          text-shadow: 2px 2px 0 #E61E32, 4px 4px 10px rgba(0,0,0,0.5);
        }
        .svc-hero-sub {
          font-family: 'Open Sans', sans-serif;
          font-size: 18px;
          color: #B3B3B3;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.8;
        }
        .svc-feature-card {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          padding: 20px;
          background: #FFFFFF;
          border: 1px solid #E5E5E5;
          border-radius: 8px;
          transition: all 0.3s;
          margin-bottom: 15px;
        }
        .svc-feature-card:hover {
          border-color: #E61E32;
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(230,30,50,0.1);
        }
        .svc-feature-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .svc-feature-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: #000;
          margin-bottom: 5px;
        }
        .svc-feature-desc {
          font-family: 'Open Sans', sans-serif;
          font-size: 14px;
          color: #8A8A8A;
          line-height: 1.6;
          margin: 0;
        }
        .benefit-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid #F0F0F0;
          font-family: 'Open Sans', sans-serif;
          font-size: 15px;
          color: #333;
        }
        .benefit-check {
          color: #E61E32;
          font-size: 18px;
          flex-shrink: 0;
        }
        .svc-faq {
          margin-bottom: 20px;
          padding: 25px;
          background: #F9F9F9;
          border-radius: 8px;
          border: 1px solid #E5E5E5;
        }
        .svc-faq h4 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: #000;
          margin-bottom: 10px;
        }
        .svc-faq p {
          font-family: 'Open Sans', sans-serif;
          font-size: 15px;
          color: #555;
          line-height: 1.7;
          margin: 0;
        }
      `}</style>

      {/* Hero */}
      <section className="svc-hero">
        <div className="container">
          <span className="svc-hero-badge">{icon} Our Services</span>
          <h1 className="svc-hero-title">{title}</h1>
          <p className="svc-hero-sub">{description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="row g-5">
            {/* Left: Features */}
            <div className="col-lg-7">
              <span style={{ color: '#E61E32', fontFamily: 'Montserrat', fontWeight: 600, fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase' }}>What We Offer</span>
              <h2 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#000', margin: '10px 0 30px' }}>
                Our {title.replace(' Services', '')} Solutions
              </h2>

              {features.map((f, i) => (
                <div key={i} className="svc-feature-card">
                  <span className="svc-feature-icon">{f.icon}</span>
                  <div>
                    <h4 className="svc-feature-title">{f.title}</h4>
                    <p className="svc-feature-desc">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Benefits + Image */}
            <div className="col-lg-5">
              <img
                src={image}
                alt={title}
                style={{ width: '100%', borderRadius: '12px', marginBottom: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              />

              <div style={{ background: '#F9F9F9', borderRadius: '12px', padding: '30px', border: '1px solid #E5E5E5' }}>
                <h3 style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '20px', color: '#000', marginBottom: '20px' }}>
                  Why Choose Us
                </h3>
                {benefits.map((b, i) => (
                  <div key={i} className="benefit-item">
                    <span className="benefit-check">✅</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '25px', padding: '25px', background: 'linear-gradient(135deg, #E61E32, #B81828)', borderRadius: '12px', textAlign: 'center' }}>
                <p style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '18px', color: '#FFF', margin: '0 0 10px' }}>
                  Need This Service?
                </p>
                <a href="tel:+11234567890" style={{
                  color: '#FFF', fontFamily: 'Montserrat', fontWeight: 800, fontSize: '24px', textDecoration: 'none', display: 'block', marginBottom: '15px',
                }}>
                  📞 (123) 456-7890
                </a>
                <Link to="/contact" style={{
                  display: 'inline-block', background: '#FFF', color: '#E61E32', padding: '12px 30px', borderRadius: '4px',
                  fontFamily: 'Montserrat', fontWeight: 700, fontSize: '14px', textDecoration: 'none',
                }}>
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqItems && faqItems.length > 0 && (
        <section style={{ padding: '80px 0', background: '#F5F5F5' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span style={{ color: '#E61E32', fontFamily: 'Montserrat', fontWeight: 600, fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>FAQ</span>
              <h2 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#000' }}>
                Common Questions
              </h2>
            </div>
            {faqItems.map((faq, i) => (
              <div key={i} className="svc-faq">
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #000 0%, #1A1A1A 100%)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: '#FFF', marginBottom: '15px' }}>
            Ready To Get Started?
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '18px', color: '#B3B3B3', marginBottom: '30px', maxWidth: '500px', margin: '0 auto 30px' }}>
            Contact us today for professional {title.toLowerCase()}.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              background: 'linear-gradient(to bottom, #E61E32, #B81828)', color: '#FFF', padding: '14px 35px', borderRadius: '4px',
              textDecoration: 'none', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '16px',
              boxShadow: '0 4px 0 #B81828, 0 8px 15px rgba(230,30,50,0.4)',
            }}>
              Contact Us →
            </Link>
            <Link to="/services" style={{
              background: 'transparent', color: '#FFF', padding: '12px 33px', borderRadius: '4px',
              textDecoration: 'none', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '16px', border: '2px solid #FFF',
            }}>
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceTemplate
