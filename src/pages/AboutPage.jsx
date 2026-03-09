import React from 'react'
import { Link } from 'react-router-dom'
import images from '../utils/images'

const AboutPage = () => {
  const values = [
    { icon: '🎯', title: 'Our Mission', description: 'To provide unmatched HVAC services that prioritize customer comfort, energy efficiency, and long-term reliability for every home and business we serve.' },
    { icon: '👁️', title: 'Our Vision', description: 'To be Canada\'s most trusted HVAC company, setting the standard for quality, innovation, and customer satisfaction in the industry.' },
    { icon: '💎', title: 'Our Values', description: 'Integrity, excellence, and dedication drive everything we do. We treat your home like our own and never cut corners.' },
  ]

  const certifications = [
    '✅ TSSA Licensed (Technical Standards and Safety Authority)',
    '✅ Fully Insured & Bonded',
    '✅ HRAI Member (Heating, Refrigeration and Air Conditioning Institute)',
    '✅ Energy Star Certified Partner',
    '✅ Factory-Authorized Dealer for Major Brands',
    '✅ Red Seal Certified Technicians',
  ]

  const timeline = [
    { year: '2004', title: 'Company Founded', desc: 'Started as a small family-owned HVAC repair service in Toronto.' },
    { year: '2008', title: 'First Major Expansion', desc: 'Expanded services to include full installations and commercial work.' },
    { year: '2013', title: 'Reached 100+ Clients', desc: 'Grew our customer base through dedication and word-of-mouth referrals.' },
    { year: '2018', title: 'Full-Service Provider', desc: 'Added air quality, water filtration, and gas line services to our portfolio.' },
    { year: '2024', title: '300+ Happy Clients', desc: 'Now serving the Greater Toronto Area with a team of 20+ certified technicians.' },
  ]

  return (
    <div>
      <style>{`
        .about-hero {
          background: linear-gradient(135deg, #000000 0%, #1A1A1A 100%);
          padding: 120px 0 80px;
          text-align: center;
        }
        .about-badge {
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
        .about-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: clamp(2rem, 5vw, 3.5rem);
          color: #FFFFFF;
          margin-bottom: 15px;
          text-shadow: 2px 2px 0 #E61E32, 4px 4px 10px rgba(0,0,0,0.5);
        }
        .about-subtitle {
          font-family: 'Open Sans', sans-serif;
          font-size: 18px;
          color: #B3B3B3;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.8;
        }
        .value-card {
          background: #FFFFFF;
          border: 1px solid #E5E5E5;
          border-radius: 12px;
          padding: 40px 30px;
          text-align: center;
          transition: all 0.4s ease;
          height: 100%;
        }
        .value-card:hover {
          transform: translateY(-8px);
          border-color: #E61E32;
          box-shadow: 0 15px 30px rgba(230, 30, 50, 0.15);
        }
        .value-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          display: block;
        }
        .value-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 20px;
          color: #000000;
          margin-bottom: 12px;
        }
        .value-desc {
          font-family: 'Open Sans', sans-serif;
          font-size: 15px;
          color: #8A8A8A;
          line-height: 1.8;
          margin: 0;
        }
        .story-section {
          padding: 100px 0;
          background: #FFFFFF;
        }
        .cert-item {
          font-family: 'Open Sans', sans-serif;
          font-size: 15px;
          color: #333333;
          padding: 10px 0;
          border-bottom: 1px solid #E5E5E5;
        }
        .timeline-item {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
          align-items: flex-start;
        }
        .timeline-year {
          flex-shrink: 0;
          background: linear-gradient(to bottom, #E61E32, #B81828);
          color: #FFFFFF;
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 14px;
          padding: 8px 16px;
          border-radius: 4px;
          min-width: 65px;
          text-align: center;
        }
        .timeline-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 17px;
          color: #000000;
          margin: 0 0 5px;
        }
        .timeline-desc {
          font-family: 'Open Sans', sans-serif;
          font-size: 14px;
          color: #8A8A8A;
          margin: 0;
          line-height: 1.6;
        }
        .team-card {
          text-align: center;
          padding: 30px 20px;
        }
        .team-img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #E61E32;
          margin-bottom: 20px;
        }
        .team-name {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 18px;
          color: #FFFFFF;
          margin-bottom: 5px;
        }
        .team-role {
          font-family: 'Open Sans', sans-serif;
          font-size: 14px;
          color: #E61E32;
          margin: 0;
        }
      `}</style>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <span className="about-badge">About Us</span>
          <h1 className="about-title">Your Comfort Is Our Business</h1>
          <p className="about-subtitle">
            For over 20 years, we've been keeping Canadian homes and businesses
            comfortable through every season with expert HVAC solutions.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section style={{ padding: '80px 0', background: '#F5F5F5' }}>
        <div className="container">
          <div className="row g-4">
            {values.map((v, i) => (
              <div key={i} className="col-lg-4">
                <div className="value-card">
                  <span className="value-icon">{v.icon}</span>
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-desc">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story + Timeline */}
      <section className="story-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <span style={{ color: '#E61E32', fontFamily: 'Montserrat', fontWeight: 600, fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase' }}>Our Story</span>
              <h2 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#000', margin: '10px 0 20px' }}>
                Built on Trust, Driven by Excellence
              </h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #E61E32, #B81828)', borderRadius: '2px', marginBottom: '25px' }} />
              <p style={{ fontFamily: 'Open Sans', fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '20px' }}>
                What started as a small family-owned repair service in Toronto has grown into one of the Greater Toronto
                Area's most trusted HVAC companies. Our founder saw the need for honest, reliable HVAC services
                that put the customer first — and that commitment hasn't changed.
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '30px' }}>
                Today, with a team of 20+ certified technicians, we handle everything from emergency repairs
                to complete system installations. Our growth has been organic — driven by customer referrals
                and a simple promise: do quality work at fair prices.
              </p>
              <img
                src={images.about.companyPhoto}
                alt="Our Team at Work"
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              />
            </div>
            <div className="col-lg-6">
              <h3 style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '22px', color: '#000', marginBottom: '30px' }}>
                Our Journey
              </h3>
              {timeline.map((item, i) => (
                <div key={i} className="timeline-item">
                  <span className="timeline-year">{item.year}</span>
                  <div>
                    <p className="timeline-title">{item.title}</p>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </div>
              ))}

              <h3 style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '22px', color: '#000', margin: '40px 0 20px' }}>
                Certifications & Licenses
              </h3>
              {certifications.map((cert, i) => (
                <div key={i} className="cert-item">{cert}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #000 0%, #1A1A1A 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#E61E32', fontFamily: 'Montserrat', fontWeight: 600, fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>Our Team</span>
            <h2 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#FFF', marginBottom: '10px' }}>
              Meet the Experts
            </h2>
            <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #E61E32, #B81828)', margin: '0 auto', borderRadius: '2px' }} />
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="team-card">
                <img src={images.about.team1} alt="John Smith" className="team-img" />
                <h4 className="team-name">John Smith</h4>
                <p className="team-role">Founder & Lead Technician</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-card">
                <img src={images.about.team2} alt="Mike Johnson" className="team-img" />
                <h4 className="team-name">Mike Johnson</h4>
                <p className="team-role">Senior HVAC Technician</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #E61E32, #B81828)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: '#FFF', marginBottom: '15px' }}>
            Ready To Work With Us?
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: '30px', maxWidth: '500px', margin: '0 auto 30px' }}>
            Get in touch today for a free consultation and estimate.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              background: '#FFF', color: '#E61E32', padding: '14px 35px', borderRadius: '4px', textDecoration: 'none',
              fontFamily: 'Montserrat', fontWeight: 700, fontSize: '16px', transition: 'all 0.3s',
            }}>
              Contact Us
            </Link>
            <a href="tel:+11234567890" style={{
              background: 'transparent', color: '#FFF', padding: '12px 33px', borderRadius: '4px', textDecoration: 'none',
              fontFamily: 'Montserrat', fontWeight: 700, fontSize: '16px', border: '2px solid #FFF',
            }}>
              📞 (123) 456-7890
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
