import React, { useState, useEffect, useRef } from 'react'

const stats = [
  { number: 300, suffix: '+', label: 'Happy Clients' },
  { number: 20, suffix: '+', label: 'Years Experience' },
  { number: 500, suffix: '+', label: 'Projects Completed' },
  { number: 100, suffix: '%', label: 'Satisfaction Rate' },
]

const features = [
  {
    icon: '🛡️',
    title: 'Licensed & Insured',
    description: 'Fully licensed HVAC contractors with comprehensive insurance coverage for your peace of mind.',
  },
  {
    icon: '⏰',
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency repairs. We\'re always just a phone call away when you need us most.',
  },
  {
    icon: '💰',
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprise charges. Free estimates on all installations and major repairs.',
  },
  {
    icon: '⭐',
    title: 'Certified Technicians',
    description: 'Factory-trained technicians with ongoing education and certifications from top HVAC brands.',
  },
  {
    icon: '🔧',
    title: 'Quality Parts & Equipment',
    description: 'We use only premium, manufacturer-approved parts and equipment backed by industry warranties.',
  },
  {
    icon: '🤝',
    title: 'Satisfaction Guaranteed',
    description: 'We stand behind every job. If you\'re not satisfied, we\'ll make it right — guaranteed.',
  },
]

const CountUp = ({ end, suffix, isVisible }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const duration = 2000
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, end])

  return <span>{count}{suffix}</span>
}

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} style={sectionStyle}>
      <style>{`
        .stat-card {
          text-align: center;
          padding: 30px 15px;
        }
        .stat-number {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          color: #FFFFFF;
          display: block;
          text-shadow: 2px 2px 0 #E61E32, 4px 4px 10px rgba(0,0,0,0.5);
        }
        .stat-label {
          font-family: 'Open Sans', sans-serif;
          font-size: 14px;
          color: #B3B3B3;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: 8px;
          display: block;
        }
        .stat-divider {
          width: 1px;
          height: 80px;
          background: rgba(179,179,179,0.2);
          align-self: center;
        }
        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(179, 179, 179, 0.15);
          border-radius: 8px;
          padding: 30px 25px;
          transition: all 0.4s ease;
        }
        .feature-card:hover {
          background: rgba(230, 30, 50, 0.08);
          border-color: rgba(230, 30, 50, 0.4);
          transform: translateY(-5px);
        }
        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
          display: block;
        }
        .feature-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 17px;
          color: #FFFFFF;
          margin-bottom: 10px;
        }
        .feature-desc {
          font-family: 'Open Sans', sans-serif;
          font-size: 14px;
          color: #B3B3B3;
          line-height: 1.7;
          margin: 0;
        }
        @media (max-width: 768px) {
          .stat-divider { display: none; }
        }
      `}</style>

      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
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
            Why Choose Us
          </span>
          <h2 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: '#FFFFFF',
            marginBottom: '15px',
          }}>
            Canada's Most Trusted HVAC Team
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(to right, #E61E32, #B81828)',
            margin: '0 auto',
            borderRadius: '2px',
          }} />
        </div>

        {/* Stats Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '70px',
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '12px',
          border: '1px solid rgba(179,179,179,0.1)',
          padding: '20px 10px',
        }}>
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="stat-card" style={{ flex: '1 1 150px', minWidth: '140px' }}>
                <span className="stat-number">
                  <CountUp end={stat.number} suffix={stat.suffix} isVisible={isVisible} />
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
              {index < stats.length - 1 && <div className="stat-divider" />}
            </React.Fragment>
          ))}
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="feature-card">
                <span className="feature-icon">{feature.icon}</span>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-desc">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const sectionStyle = {
  padding: '100px 0',
  background: 'linear-gradient(135deg, #000000 0%, #1A1A1A 100%)',
}

export default WhyChooseUs
