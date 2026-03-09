import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import ParticleLayer from '../common/ParticleLayer'



const HeroSection = () => {

  const [typedLines, setTypedLines] = useState(['', '', ''])

  const [showSubtitle, setShowSubtitle] = useState(false)

  const [showDescription, setShowDescription] = useState(false)

  const [showButtons, setShowButtons] = useState(false)

  const [showStats, setShowStats] = useState(false)

  const [showBadge, setShowBadge] = useState(false)

  const [showScroll, setShowScroll] = useState(false)



  // ---- TYPEWRITER EFFECT ----

  useEffect(() => {

    const lines = ['Expert HVAC', 'Solutions For', 'Every Season']

    let lineIndex = 0

    let charIndex = 0

    const result = ['', '', '']



    // Show badge first

    setTimeout(() => setShowBadge(true), 300)



    const typeInterval = setInterval(() => {

      if (lineIndex >= lines.length) {

        clearInterval(typeInterval)

        // Show remaining elements after typing completes

        setTimeout(() => setShowSubtitle(true), 200)

        setTimeout(() => setShowDescription(true), 500)

        setTimeout(() => setShowButtons(true), 800)

        setTimeout(() => setShowStats(true), 1100)

        setTimeout(() => setShowScroll(true), 1400)

        return

      }



      if (charIndex <= lines[lineIndex].length) {

        result[lineIndex] = lines[lineIndex].substring(0, charIndex)

        setTypedLines([...result])

        charIndex++

      } else {

        lineIndex++

        charIndex = 0

      }

    }, 55)



    return () => clearInterval(typeInterval)

  }, [])







  return (

    <section style={styles.hero}>

      <style>{`



        .hero-content {

          position: relative;

          z-index: 10;

          text-align: center;

          padding: 0 20px;

          max-width: 900px;

          margin: 0 auto;

          pointer-events: none;

        }

        .hero-content a,

        .hero-content button {

          pointer-events: auto;

        }

        .hero-badge {

          display: inline-block;

          background: rgba(230, 30, 50, 0.2);

          border: 1px solid #E61E32;

          color: #E61E32;

          padding: 8px 20px;

          border-radius: 50px;

          font-family: 'Montserrat', sans-serif;

          font-weight: 600;

          font-size: 13px;

          letter-spacing: 2px;

          text-transform: uppercase;

          margin-bottom: 25px;

          opacity: 0;

          transform: translateY(-20px);

          transition: opacity 0.6s ease, transform 0.6s ease;

        }

        .hero-badge.visible {

          opacity: 1;

          transform: translateY(0);

        }

        .hero-title {

          font-family: 'Montserrat', sans-serif;

          font-weight: 900;

          font-size: clamp(2.5rem, 6vw, 5rem);

          color: #FFFFFF;

          line-height: 1.1;

          margin-bottom: 10px;

          text-shadow:

            1px 1px 0 #E61E32,

            2px 2px 0 #E61E32,

            3px 3px 0 #E61E32,

            4px 4px 0 #E61E32,

            5px 5px 0 #E61E32,

            6px 6px 15px rgba(0,0,0,0.6);

          min-height: 3.6em;

        }

        .hero-title-accent {

          color: #E61E32;

          text-shadow:

            1px 1px 0 #B81828,

            2px 2px 0 #B81828,

            3px 3px 0 #B81828,

            4px 4px 0 #B81828,

            5px 5px 15px rgba(0,0,0,0.6);

        }

        .typing-cursor {

          display: inline-block;

          width: 3px;

          height: 0.9em;

          background: #E61E32;

          margin-left: 4px;

          animation: blink-cursor 0.7s step-end infinite;

          vertical-align: text-bottom;

        }

        @keyframes blink-cursor {

          0%, 100% { opacity: 1; }

          50% { opacity: 0; }

        }

        .hero-fade-in {

          opacity: 0;

          transform: translateY(25px);

          transition: opacity 0.7s ease, transform 0.7s ease;

        }

        .hero-fade-in.visible {

          opacity: 1;

          transform: translateY(0);

        }

        .hero-subtitle {

          font-family: 'Montserrat', sans-serif;

          font-weight: 600;

          font-size: clamp(1rem, 2.5vw, 1.4rem);

          color: #B3B3B3;

          margin-bottom: 20px;

          letter-spacing: 1px;

        }

        .hero-description {

          font-family: 'Open Sans', sans-serif;

          font-size: clamp(0.9rem, 1.5vw, 1.1rem);

          color: rgba(255,255,255,0.8);

          max-width: 600px;

          margin: 0 auto 40px;

          line-height: 1.8;

        }

        .hero-buttons {

          display: flex;

          gap: 20px;

          justify-content: center;

          flex-wrap: wrap;

        }

        .hero-btn-primary {

          background: linear-gradient(to bottom, #E61E32, #B81828);

          color: #FFFFFF;

          padding: 16px 40px;

          border-radius: 4px;

          text-decoration: none;

          font-family: 'Montserrat', sans-serif;

          font-weight: 700;

          font-size: 16px;

          box-shadow: 0 6px 0 #B81828, 0 10px 20px rgba(0,0,0,0.4);

          transition: all 0.1s ease;

          display: inline-block;

          letter-spacing: 0.5px;

        }

        .hero-btn-primary:hover {

          transform: translateY(-2px);

          color: #FFFFFF;

          box-shadow: 0 8px 0 #B81828, 0 15px 25px rgba(0,0,0,0.5);

        }

        .hero-btn-primary:active {

          transform: translateY(4px);

          box-shadow: 0 2px 0 #B81828;

        }

        .hero-btn-secondary {

          background: transparent;

          color: #FFFFFF;

          padding: 14px 38px;

          border-radius: 4px;

          text-decoration: none;

          font-family: 'Montserrat', sans-serif;

          font-weight: 700;

          font-size: 16px;

          border: 2px solid #FFFFFF;

          transition: all 0.3s ease;

          display: inline-block;

          letter-spacing: 0.5px;

        }

        .hero-btn-secondary:hover {

          background: #FFFFFF;

          color: #000000;

          transform: translateY(-2px);

        }

        .hero-stats {

          display: flex;

          justify-content: center;

          gap: 50px;

          margin-top: 60px;

          flex-wrap: wrap;

        }

        .hero-stat {

          text-align: center;

        }

        .hero-stat-number {

          font-family: 'Montserrat', sans-serif;

          font-weight: 900;

          font-size: 2.5rem;

          color: #FFFFFF;

          text-shadow: 2px 2px 0 #E61E32, 4px 4px 10px rgba(0,0,0,0.5);

          display: block;

        }

        .hero-stat-label {

          font-family: 'Open Sans', sans-serif;

          font-size: 13px;

          color: #B3B3B3;

          text-transform: uppercase;

          letter-spacing: 1px;

        }

        .hero-stat-divider {

          width: 1px;

          height: 60px;

          background: rgba(179,179,179,0.3);

          align-self: center;

        }

        .hero-scroll {

          position: absolute;

          bottom: 30px;

          left: 50%;

          transform: translateX(-50%);

          z-index: 2;

          display: flex;

          flex-direction: column;

          align-items: center;

          gap: 8px;

          opacity: 0;

          transition: opacity 0.8s ease;

        }

        .hero-scroll.visible {

          opacity: 1;

          animation: bounce 2s infinite 0.5s;

        }

        .hero-scroll span {

          color: #B3B3B3;

          font-family: 'Montserrat', sans-serif;

          font-size: 11px;

          letter-spacing: 2px;

          text-transform: uppercase;

        }

        .hero-scroll-arrow {

          width: 24px;

          height: 24px;

          border-right: 2px solid #E61E32;

          border-bottom: 2px solid #E61E32;

          transform: rotate(45deg);

        }

        @keyframes bounce {

          0%, 100% { transform: translateX(-50%) translateY(0); }

          50% { transform: translateX(-50%) translateY(10px); }

        }

        @media (max-width: 768px) {

          .hero-stat-divider { display: none; }

          .hero-stats { gap: 30px; }

          .hero-stat-number { font-size: 2rem; }
          .hero-buttons { flex-direction: column; align-items: center; width: 100%; }
          .hero-btn-primary, .hero-btn-secondary { width: 100%; text-align: center; }
        }

      `}</style>



      {/* BACKGROUND IMAGE WITH OVERLAY */}

      <div style={styles.heroBg} />

      <div style={styles.heroOverlay} />



      {/* TSPARTICLES LAYER */}

      <ParticleLayer />



      {/* MAIN CONTENT */}

      <div style={styles.contentWrapper}>

        <div className="hero-content">



          <div className={`hero-badge ${showBadge ? 'visible' : ''}`}>

            🏆 Canada's Trusted HVAC Experts

          </div>



          <h1 className="hero-title">

            {typedLines[0]}

            {typedLines[1] === '' && typedLines[2] === '' && <span className="typing-cursor" />}

            <br />

            <span className="hero-title-accent">

              {typedLines[1]}

              {typedLines[1] !== '' && typedLines[2] === '' && <span className="typing-cursor" />}

            </span>

            <br />

            {typedLines[2]}

            {typedLines[2] !== '' && <span className="typing-cursor" />}

          </h1>



          <p className={`hero-subtitle hero-fade-in ${showSubtitle ? 'visible' : ''}`}>

            Heating • Cooling • Ventilation • 24/7 Emergency Service

          </p>



          <p className={`hero-description hero-fade-in ${showDescription ? 'visible' : ''}`}>

            Professional HVAC services for residential and commercial properties

            across Canada. Licensed, insured, and committed to your comfort

            year-round.

          </p>



          <div className={`hero-buttons hero-fade-in ${showButtons ? 'visible' : ''}`}>

            <a href="tel:+11234567890" className="hero-btn-primary">

              📞 Call Now - Free Estimate

            </a>

            <Link to="/services" className="hero-btn-secondary">

              View Our Services

            </Link>

          </div>



          {/* STATS */}

          <div className={`hero-stats hero-fade-in ${showStats ? 'visible' : ''}`}>

            <div className="hero-stat">

              <span className="hero-stat-number">300+</span>

              <span className="hero-stat-label">Happy Clients</span>

            </div>

            <div className="hero-stat-divider" />

            <div className="hero-stat">

              <span className="hero-stat-number">20+</span>

              <span className="hero-stat-label">Years Experience</span>

            </div>

            <div className="hero-stat-divider" />

            <div className="hero-stat">

              <span className="hero-stat-number">24/7</span>

              <span className="hero-stat-label">Emergency Service</span>

            </div>

            <div className="hero-stat-divider" />

            <div className="hero-stat">

              <span className="hero-stat-number">100%</span>

              <span className="hero-stat-label">Satisfaction</span>

            </div>

          </div>



        </div>

      </div>



      {/* SCROLL INDICATOR */}

      <div className={`hero-scroll ${showScroll ? 'visible' : ''}`}>

        <span>Scroll</span>

        <div className="hero-scroll-arrow" />

      </div>



    </section>

  )

}



const styles = {

  hero: {

    position: 'relative',

    minHeight: '100vh',

    display: 'flex',

    alignItems: 'center',

    justifyContent: 'center',

    overflow: 'hidden',

    background: '#000000',

  },

  heroBg: {

    position: 'absolute',

    top: 0,

    left: 0,

    right: 0,

    bottom: 0,

    backgroundImage: `url(https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80)`,

    backgroundSize: 'cover',

    backgroundPosition: 'center',

    backgroundRepeat: 'no-repeat',

  },

  heroOverlay: {

    position: 'absolute',

    top: 0,

    left: 0,

    right: 0,

    bottom: 0,

    background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 50%, rgba(230,30,50,0.15) 100%)',

    zIndex: 1,

  },

  contentWrapper: {

    position: 'relative',

    zIndex: 10,

    width: '100%',

    padding: '100px 20px 120px',

    display: 'flex',

    alignItems: 'center',

    justifyContent: 'center',

  },

}



export default HeroSection 