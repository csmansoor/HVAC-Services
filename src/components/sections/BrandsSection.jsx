import React from 'react'
import images from '../../utils/images'

const brands = [
  { name: 'Carrier', image: images.brands.brand1 },
  { name: 'Lennox', image: images.brands.brand2 },
  { name: 'Trane', image: images.brands.brand3 },
  { name: 'Rheem', image: images.brands.brand4 },
  { name: 'Goodman', image: images.brands.brand5 },
]

const BrandsSection = () => {
  return (
    <section style={sectionStyle}>
      <style>{`
        .brand-logo {
          filter: grayscale(100%);
          opacity: 0.5;
          transition: all 0.4s ease;
          max-height: 60px;
          max-width: 160px;
          object-fit: contain;
        }
        .brand-logo:hover {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.1);
        }
        .brand-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 15px;
          flex: 1 1 150px;
          min-width: 150px;
        }
      `}</style>

      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{
            color: '#8A8A8A',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
            fontSize: '13px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '10px',
          }}>
            Trusted Partners
          </span>
          <h2 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            color: '#000000',
            marginBottom: '10px',
          }}>
            We Work With The Best Brands
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(to right, #E61E32, #B81828)',
            margin: '0 auto',
            borderRadius: '2px',
          }} />
        </div>

        {/* Brands Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          padding: '20px 0',
          background: 'rgba(0,0,0,0.02)',
          borderRadius: '12px',
          border: '1px solid #E5E5E5',
        }}>
          {brands.map((brand, index) => (
            <div key={index} className="brand-item">
              <img
                src={brand.image}
                alt={brand.name}
                className="brand-logo"
                title={brand.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const sectionStyle = {
  padding: '70px 0',
  background: '#FFFFFF',
}

export default BrandsSection
