import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const services = [
  {
    icon: '🔥',
    title: 'Heat Pump Services',
    description: 'Energy-efficient heating and cooling solutions for year-round comfort. Installation, repair, and maintenance.',
    path: '/services/heat-pump',
  },
  {
    icon: '💧',
    title: 'Water Heating',
    description: 'Tankless and traditional water heater installation, repair, and replacement services.',
    path: '/services/water-heater',
  },
  {
    icon: '🌡️',
    title: 'Heating Services',
    description: 'Furnace installation, repair, and maintenance. Keep your home warm through Canadian winters.',
    path: '/services/heating',
  },
  {
    icon: '❄️',
    title: 'Cooling Services',
    description: 'Air conditioning installation, repair, and tune-ups for reliable summer comfort.',
    path: '/services/cooling',
  },
  {
    icon: '♨️',
    title: 'Boiler Services',
    description: 'Expert boiler installation, maintenance, and emergency repair for residential and commercial properties.',
    path: '/services/boiler',
  },
  {
    icon: '🔥',
    title: 'Fireplace Services',
    description: 'Gas fireplace installation, conversion, and servicing. Add warmth and ambiance to your home.',
    path: '/services/fireplace',
  },
  {
    icon: '🌬️',
    title: 'Air Quality & Ventilation',
    description: 'HRV/ERV systems, air purifiers, and ventilation solutions for healthier indoor air.',
    path: '/services/air-quality',
  },
  {
    icon: '🚰',
    title: 'Water Filtration',
    description: 'Whole-home water filtration and purification systems for clean, safe drinking water.',
    path: '/services/water-filtration',
  },
  {
    icon: '⚡',
    title: 'Gas Line Services',
    description: 'Licensed gas line installation, repair, and safety inspections. BBQ lines and more.',
    path: '/services/gas-line',
  },
  {
    icon: '🔧',
    title: 'Ductwork Services',
    description: 'Duct installation, repair, sealing, and cleaning for optimal airflow and efficiency.',
    path: '/services/ductwork',
  },
]

const ServicesGrid = () => {
  return (
    <section style={sectionStyle}>
      <style>{`
        .service-card {
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid #E5E5E5;
          border-radius: 8px;
          padding: 35px 25px;
          text-align: center;
          transition: all 0.4s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(to right, #E61E32, #B81828);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }
        .service-card:hover::before {
          transform: scaleX(1);
        }
        .service-card:hover {
          transform: translateY(-10px);
          border-color: #E61E32;
          box-shadow: 0 0 10px rgba(230, 30, 50, 0.3), 0 15px 30px rgba(0, 0, 0, 0.15);
        }
        .service-card-icon {
          font-size: 3rem;
          margin-bottom: 18px;
          display: block;
        }
        .service-card-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 18px;
          color: #000000;
          margin-bottom: 12px;
        }
        .service-card-desc {
          font-family: 'Open Sans', sans-serif;
          font-size: 14px;
          color: #8A8A8A;
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .service-card-link {
          display: inline-block;
          color: #E61E32;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 13px;
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }
        .service-card-link:hover {
          color: #B81828;
          letter-spacing: 1.5px;
        }
        .section-subtitle {
          width: 60px;
          height: 4px;
          background: linear-gradient(to right, #E61E32, #B81828);
          margin: 0 auto 15px;
          border-radius: 2px;
        }
      `}</style>

      <motion.div 
        className="container"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Section Header */}
        <motion.div 
          style={{ textAlign: 'center', marginBottom: '60px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        >
          <span style={{
            color: '#E61E32',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
            fontSize: '13px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '10px',
          }}>
            What We Offer
          </span>
          <h2 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: '#000000',
            marginBottom: '15px',
          }}>
            Our Professional Services
          </h2>
          <div className="section-subtitle" />
          <p style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '16px',
            color: '#8A8A8A',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            Comprehensive HVAC solutions tailored to your needs. From installation to maintenance,
            we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <Link to={service.path} style={{ textDecoration: 'none' }}>
                <div className="service-card">
                  <span className="service-card-icon">{service.icon}</span>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.description}</p>
                  <span className="service-card-link">Learn More →</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

const sectionStyle = {
  padding: '100px 0',
  backgroundColor: '#FFFFFF',
  position: 'relative',
  zIndex: 10,
  boxShadow: '0 -20px 40px rgba(0,0,0,0.15)', // Adds depth to the curtain reveal
}

export default ServicesGrid
