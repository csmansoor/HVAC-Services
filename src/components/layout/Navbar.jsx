import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import images from '../../utils/images'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsServicesOpen(false)
  }, [location])

  const services = [
    { name: 'Heat Pump Services', path: '/services/heat-pump' },
    { name: 'Water Heating Services', path: '/services/water-heater' },
    { name: 'Heating Services', path: '/services/heating' },
    { name: 'Cooling Services', path: '/services/cooling' },
    { name: 'Boiler Services', path: '/services/boiler' },
    { name: 'Fireplace Services', path: '/services/fireplace' },
    { name: 'Air Quality & Ventilation', path: '/services/air-quality' },
    { name: 'Water Filtration', path: '/services/water-filtration' },
    { name: 'Gas Line Services', path: '/services/gas-line' },
    { name: 'Ductwork Services', path: '/services/ductwork' },
  ]

  return (
    <div>
      <style>{`
        .nav-link-item {
          color: #FFFFFF;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.5px;
          cursor: pointer;
          padding-bottom: 4px;
          border-bottom: 2px solid transparent;
          transition: border-color 0.3s ease;
        }
        .nav-link-item:hover {
          color: #FFFFFF;
          border-bottom: 2px solid #E61E32;
        }
        .nav-link-active {
          border-bottom: 2px solid #E61E32 !important;
        }
        .dropdown-item-link {
          display: block;
          padding: 10px 20px;
          color: #FFFFFF;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          font-weight: 500;
          transition: background 0.2s ease;
          border-radius: 4px;
          margin: 2px 8px;
        }
        .dropdown-item-link:hover {
          background: #E61E32;
          color: #FFFFFF;
        }
        .mobile-link-item {
          color: #FFFFFF;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 18px;
          padding: 15px 0;
          border-bottom: 1px solid rgba(179,179,179,0.2);
          background: none;
          border-left: none;
          border-right: none;
          border-top: none;
          text-align: left;
          cursor: pointer;
          width: 100%;
          display: block;
        }
        .mobile-sub-link {
          color: #B3B3B3;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-size: 15px;
          padding: 10px 0;
          display: block;
          border-bottom: 1px solid rgba(179,179,179,0.1);
        }
        .mobile-sub-link:hover {
          color: #FFFFFF;
        }
        .emergency-btn {
          background: linear-gradient(to bottom, #E61E32, #B81828);
          color: #FFFFFF !important;
          padding: 10px 20px;
          border-radius: 4px;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 14px;
          box-shadow: 0 4px 0 #B81828, 0 6px 15px rgba(230,30,50,0.4);
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .emergency-btn:hover {
          transform: translateY(-2px);
          color: #FFFFFF;
        }
        .hamburger-btn {
          background: none;
          border: none;
          color: #FFFFFF;
          font-size: 26px;
          cursor: pointer;
          padding: 5px 10px;
          line-height: 1;
        }
        .hamburger-btn:hover {
          color: #E61E32;
        }
      `}</style>

      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(0, 0, 0, 0.97)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(179, 179, 179, 0.15)',
        boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.5)' : 'none',
        transition: 'all 0.3s ease',
        padding: '12px 0',
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>

            <Link to="/" style={{ textDecoration: 'none' }}>
              <img src={images.logo} alt="HVAC Pro Logo" height="45" />
            </Link>

            {!isMobile && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '35px' }}>
                <Link to="/" className={`nav-link-item ${location.pathname === '/' ? 'nav-link-active' : ''}`}>
                  Home
                </Link>
                <Link to="/about" className={`nav-link-item ${location.pathname === '/about' ? 'nav-link-active' : ''}`}>
                  About
                </Link>
                <div
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <span className={`nav-link-item ${location.pathname.includes('/services') ? 'nav-link-active' : ''}`}>
                    Services ▾
                  </span>
                  {isServicesOpen && (
                    <div style={{
                      position: 'absolute',
                      top: '30px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'rgba(0, 0, 0, 0.98)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(230, 30, 50, 0.3)',
                      borderRadius: '8px',
                      padding: '10px 0',
                      minWidth: '230px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                      zIndex: 1001,
                    }}>
                      {services.map((service, index) => (
                        <Link key={index} to={service.path} className="dropdown-item-link">
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link to="/care-plans" className={`nav-link-item ${location.pathname === '/care-plans' ? 'nav-link-active' : ''}`}>
                  Care Plans
                </Link>
                <Link to="/contact" className={`nav-link-item ${location.pathname === '/contact' ? 'nav-link-active' : ''}`}>
                  Contact
                </Link>
              </div>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              {!isMobile && (
                <a href="tel:+11234567890" className="emergency-btn">
                  📞 Call Now
                </a>
              )}
              {isMobile && (
                <button
                  className="hamburger-btn"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? '✕' : '☰'}
                </button>
              )}
            </div>

          </div>
        </div>
      </nav>

      {isMobile && isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '69px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.99)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          padding: '10px 20px 30px',
          overflowY: 'auto',
        }}>
          <Link to="/" className="mobile-link-item">Home</Link>
          <Link to="/about" className="mobile-link-item">About</Link>
          <button
            className="mobile-link-item"
            onClick={() => setIsServicesOpen(!isServicesOpen)}
          >
            Services {isServicesOpen ? '▲' : '▼'}
          </button>
          {isServicesOpen && (
            <div style={{
              paddingLeft: '15px',
              borderLeft: '2px solid #E61E32',
              marginBottom: '5px',
            }}>
              {services.map((service, index) => (
                <Link key={index} to={service.path} className="mobile-sub-link">
                  {service.name}
                </Link>
              ))}
            </div>
          )}
          <Link to="/care-plans" className="mobile-link-item">Care Plans</Link>
          <Link to="/contact" className="mobile-link-item">Contact</Link>
          <a
            href="tel:+11234567890"
            style={{
              background: 'linear-gradient(to bottom, #E61E32, #B81828)',
              color: '#FFFFFF',
              padding: '18px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '700',
              fontSize: '16px',
              textAlign: 'center',
              marginTop: '20px',
              display: 'block',
            }}
          >
            📞 Call Now - 24/7 Emergency
          </a>
        </div>
      )}

      <div style={{ height: '69px' }} />

    </div>
  )
}

export default Navbar