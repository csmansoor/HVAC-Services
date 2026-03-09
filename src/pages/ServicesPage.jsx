import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  { icon: '🔥', title: 'Heat Pump Services', path: '/services/heat-pump', desc: 'Energy-efficient heating and cooling solutions. Installation, repair, and maintenance of all heat pump systems.' },
  { icon: '💧', title: 'Water Heating Services', path: '/services/water-heater', desc: 'Tankless and traditional water heater installation, repair, and replacement for reliable hot water.' },
  { icon: '🌡️', title: 'Heating Services', path: '/services/heating', desc: 'Furnace installation, repair, and maintenance to keep your home warm through Canadian winters.' },
  { icon: '❄️', title: 'Cooling Services', path: '/services/cooling', desc: 'Air conditioning installation, repair, and tune-ups for reliable comfort during summer.' },
  { icon: '♨️', title: 'Boiler Services', path: '/services/boiler', desc: 'Expert boiler installation, maintenance, and emergency repair for homes and businesses.' },
  { icon: '🔥', title: 'Fireplace Services', path: '/services/fireplace', desc: 'Gas fireplace installation, conversion, and servicing. Add warmth and ambiance.' },
  { icon: '🌬️', title: 'Air Quality & Ventilation', path: '/services/air-quality', desc: 'HRV/ERV systems, air purifiers, and ventilation for healthier indoor air.' },
  { icon: '🚰', title: 'Water Filtration', path: '/services/water-filtration', desc: 'Whole-home water filtration and purification for clean, safe drinking water.' },
  { icon: '⚡', title: 'Gas Line Services', path: '/services/gas-line', desc: 'Licensed gas line installation, repair, and safety inspections. BBQ lines and more.' },
  { icon: '🔧', title: 'Ductwork Services', path: '/services/ductwork', desc: 'Duct installation, repair, sealing, and cleaning for optimal airflow efficiency.' },
]

const ServicesPage = () => {
  return (
    <div>
      <style>{`
        .services-hero {
          background: linear-gradient(135deg, #000000 0%, #1A1A1A 100%);
          padding: 120px 0 80px;
          text-align: center;
        }
        .services-badge {
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
        .services-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: clamp(2rem, 5vw, 3.5rem);
          color: #FFFFFF;
          margin-bottom: 15px;
          text-shadow: 2px 2px 0 #E61E32, 4px 4px 10px rgba(0,0,0,0.5);
        }
        .service-overview-card {
          background: #FFFFFF;
          border: 1px solid #E5E5E5;
          border-radius: 12px;
          padding: 35px 25px;
          transition: all 0.4s ease;
          height: 100%;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .service-overview-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(to right, #E61E32, #B81828);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }
        .service-overview-card:hover::before { transform: scaleX(1); }
        .service-overview-card:hover {
          transform: translateY(-8px);
          border-color: #E61E32;
          box-shadow: 0 0 10px rgba(230,30,50,0.2), 0 15px 30px rgba(0,0,0,0.12);
        }
        .svc-icon { font-size: 2.5rem; margin-bottom: 18px; display: block; }
        .svc-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 19px;
          color: #000;
          margin-bottom: 12px;
        }
        .svc-desc {
          font-family: 'Open Sans', sans-serif;
          font-size: 14px;
          color: #8A8A8A;
          line-height: 1.7;
          margin-bottom: 20px;
          flex-grow: 1;
        }
        .svc-link {
          color: #E61E32;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        .svc-link:hover { color: #B81828; gap: 10px; }
      `}</style>

      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <span className="services-badge">Our Services</span>
          <h1 className="services-title">Complete HVAC Solutions</h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '18px', color: '#B3B3B3', maxWidth: '600px', margin: '0 auto' }}>
            From installation to maintenance, we offer a full range of HVAC services
            to keep your home comfortable year-round.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '80px 0', background: '#F5F5F5' }}>
        <div className="container">
          <div className="row g-4">
            {services.map((svc, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="service-overview-card">
                  <span className="svc-icon">{svc.icon}</span>
                  <h3 className="svc-title">{svc.title}</h3>
                  <p className="svc-desc">{svc.desc}</p>
                  <Link to={svc.path} className="svc-link">
                    Learn More <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #E61E32, #B81828)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: '#FFF', marginBottom: '15px' }}>
            Not Sure What You Need?
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: '30px', maxWidth: '500px', margin: '0 auto 30px' }}>
            Call us and our experts will help you find the right solution.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+11234567890" style={{
              background: '#FFF', color: '#E61E32', padding: '14px 35px', borderRadius: '4px', textDecoration: 'none',
              fontFamily: 'Montserrat', fontWeight: 700, fontSize: '16px',
            }}>
              📞 Call Now
            </a>
            <Link to="/contact" style={{
              background: 'transparent', color: '#FFF', padding: '12px 33px', borderRadius: '4px', textDecoration: 'none',
              fontFamily: 'Montserrat', fontWeight: 700, fontSize: '16px', border: '2px solid #FFF',
            }}>
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
