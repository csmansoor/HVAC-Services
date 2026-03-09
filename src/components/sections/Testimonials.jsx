import React, { useState, useEffect } from 'react'
import images from '../../utils/images'

const testimonials = [
  {
    name: 'Sarah Thompson',
    location: 'Toronto, ON',
    rating: 5,
    text: 'Incredible service from start to finish! The team arrived on time, was professional, and had our new furnace installed in just a few hours. Our energy bills have dropped significantly since the upgrade.',
    image: images.testimonials.customer1,
    service: 'Furnace Installation',
  },
  {
    name: 'Michael Chen',
    location: 'Mississauga, ON',
    rating: 5,
    text: 'Called them for an emergency AC repair during the hottest week of summer. They were at our door within 2 hours and fixed the problem quickly. Truly 24/7 service! Cannot recommend enough.',
    image: images.testimonials.customer2,
    service: 'AC Emergency Repair',
  },
  {
    name: 'Emily Davis',
    location: 'Brampton, ON',
    rating: 5,
    text: 'We signed up for their annual care plan and it has been the best decision. Regular maintenance keeps everything running smoothly, and the priority service during emergencies gives us real peace of mind.',
    image: images.testimonials.customer3,
    service: 'Annual Care Plan',
  },
  {
    name: 'Robert Wilson',
    location: 'Vaughan, ON',
    rating: 5,
    text: 'The heat pump installation was flawless. The team explained every step, cleaned up perfectly, and followed up the next week to make sure everything was working great. Top-notch professionalism.',
    image: images.testimonials.customer1,
    service: 'Heat Pump Installation',
  },
  {
    name: 'Lisa Anderson',
    location: 'Oakville, ON',
    rating: 5,
    text: 'Best HVAC company we\'ve ever worked with. They installed a whole-home water filtration system and the difference in our water quality is amazing. Fair pricing and excellent workmanship.',
    image: images.testimonials.customer3,
    service: 'Water Filtration',
  },
]

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  return (
    <section style={sectionStyle}>
      <style>{`
        .testimonial-card {
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid #E5E5E5;
          border-radius: 12px;
          padding: 35px 30px;
          transition: all 0.4s ease;
          height: 100%;
          position: relative;
        }
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          border-color: #E61E32;
        }
        .testimonial-card::before {
          content: '"';
          position: absolute;
          top: 15px;
          right: 25px;
          font-size: 5rem;
          font-family: Georgia, serif;
          color: rgba(230, 30, 50, 0.1);
          line-height: 1;
        }
        .testimonial-stars {
          color: #E61E32;
          font-size: 18px;
          letter-spacing: 2px;
          margin-bottom: 15px;
          display: block;
        }
        .testimonial-text {
          font-family: 'Open Sans', sans-serif;
          font-size: 15px;
          color: #333333;
          line-height: 1.8;
          margin-bottom: 25px;
          font-style: italic;
        }
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .testimonial-avatar {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #E61E32;
        }
        .testimonial-name {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: #000000;
          margin: 0;
        }
        .testimonial-location {
          font-family: 'Open Sans', sans-serif;
          font-size: 13px;
          color: #8A8A8A;
          margin: 2px 0 0;
        }
        .testimonial-service {
          display: inline-block;
          background: rgba(230, 30, 50, 0.1);
          color: #E61E32;
          padding: 4px 12px;
          border-radius: 50px;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-top: 5px;
        }
        .dot-indicators {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 40px;
        }
        .dot-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid #E61E32;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .dot-indicator.active {
          background: #E61E32;
          transform: scale(1.2);
        }
        .dot-indicator:hover {
          background: rgba(230, 30, 50, 0.5);
        }
      `}</style>

      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
            Testimonials
          </span>
          <h2 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: '#000000',
            marginBottom: '15px',
          }}>
            What Our Clients Say
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(to right, #E61E32, #B81828)',
            margin: '0 auto 15px',
            borderRadius: '2px',
          }} />
          <p style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '16px',
            color: '#8A8A8A',
            maxWidth: '500px',
            margin: '0 auto',
          }}>
            Don't just take our word for it — hear from our satisfied customers.
          </p>
        </div>

        {/* Testimonials Grid - show 3 at a time */}
        <div className="row g-4">
          {[0, 1, 2].map((offset) => {
            const index = (activeIndex + offset) % testimonials.length
            const t = testimonials[index]
            return (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="testimonial-card">
                  <span className="testimonial-stars">{renderStars(t.rating)}</span>
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-author">
                    <img src={t.image} alt={t.name} className="testimonial-avatar" />
                    <div>
                      <p className="testimonial-name">{t.name}</p>
                      <p className="testimonial-location">{t.location}</p>
                      <span className="testimonial-service">{t.service}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Dot Indicators */}
        <div className="dot-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot-indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const sectionStyle = {
  padding: '100px 0',
  background: '#F5F5F5',
}

export default Testimonials
