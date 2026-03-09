import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const StarryNightSection = () => {
  const containerRef = useRef(null)

  // Track scroll progress to drive the parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  // Parallax depth: move slightly down (20%) as it gets covered
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  // Fade in text sequentially based on scroll progress
  const opacityWhat = useTransform(scrollYProgress, [0.1, 0.2], [0, 1])
  const opacityWe = useTransform(scrollYProgress, [0.3, 0.4], [0, 1])
  const opacityOffer = useTransform(scrollYProgress, [0.5, 0.6], [0, 1])

  useEffect(() => {
    const starContainer = document.getElementById("star-container")
    if (!starContainer) return

    // Clean up existing stars in case of React strict mode double render
    const existingStars = starContainer.querySelectorAll('.c-star')
    existingStars.forEach(s => s.remove())

    // 1. Create Stars
    const stars = ["✦", "✧", "★", "✬", "✯", "✴", "✵", "✶", "✷", "✹", "✸"]
    for (let i = 0; i < 200; i++) {
      const element = document.createElement("div")
      element.style.top = `${Math.random() * 100}%`
      element.style.left = `${Math.random() * 100}%`
      const sizeX = Math.random() * 7 + 1
      element.innerHTML = stars[~~(Math.random() * stars.length)]
      element.style.fontSize = sizeX + "px"
      element.style.animation = `${7000 / sizeX + Math.random() * (7000 / sizeX)}ms linear ${Math.random() * 5000}ms alternate infinite twinkle`
      element.setAttribute("class", "c-star")
      starContainer.appendChild(element)
    }

    // 2. Setup Shooting Star Logic
    const shootingStar = document.getElementById("shootingstar")
    
    // Function to trigger a shooting star at specific coords or random
    const shoot = (x, y) => {
      if (!shootingStar) return
      
      const startX = x ? x : ~~(Math.random() * window.innerWidth)
      shootingStar.style.left = startX + "px"

      // Restart the animation
      shootingStar.classList.remove("shoot")
      void shootingStar.offsetWidth // trigger reflow
      shootingStar.classList.add("shoot")
    }

    // Handle user clicks to trigger shooting star
    const handleGlobalClick = (e) => {
      // Only shoot if clicking inside the starry container
      if (containerRef.current && containerRef.current.contains(e.target)) {
        shoot(e.clientX, e.clientY)
      }
    }

    let timeoutId
    const autoShoot = () => {
      shoot()
      timeoutId = setTimeout(autoShoot, ~~(Math.random() * 30000) + 10000)
    }

    document.addEventListener("click", handleGlobalClick)
    
    // Initial random shoot
    const initialTimeoutId = setTimeout(autoShoot, ~~(Math.random() * 10000) + 3000)

    return () => {
      clearTimeout(timeoutId)
      clearTimeout(initialTimeoutId)
      document.removeEventListener("click", handleGlobalClick)
    }
  }, [])

  return (
    <div ref={containerRef} style={styles.wrapper}>
      <motion.section 
        style={{ y, ...styles.section }}
      >
        <style>{`
        #star-container {
          background-color: black;
          height: 100vh;
          width: 100%;
          position: relative;
          overflow: hidden;
          margin: 0;
        }
        #shootingstar {
          position: absolute;
          z-index: 9990;
          left: 20%;
          width: 100px;
          height: 100px;
          background-image: url("https://cdr2.com/img/shootingstar2.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          transform: scale(0);
          filter: drop-shadow(5px 5px 5px #fff6);
        }
        .shoot {
          animation: 2500ms linear 1 shootstar;
        }
        @keyframes shootstar {
          0% { transform: translate(0px, 0px) scale(0); }
          50% { transform: translate(250px, 250px) scale(2); }
          100% { transform: translate(500px, 500px) scale(0); }
        }
        #moon {
          background-image: url("https://cdr2.com/img/moon.png");
          background-size: 100% 100%;
          width: 20vw;
          height: 20vw;
          position: absolute;
          z-index: 9999;
          animation: 300s linear 0s infinite drift;
          bottom: -20vw;
          left: 10%;
          filter: drop-shadow(0px 0px 80px #fff9);
        }
        @keyframes drift {
          0% { transform: translatex(0px) translatey(0px); }
          100% { transform: translatex(500px) translatey(-1000px); }
        }
        .c-star {
          position: absolute;
          background-color: transparent;
          color: #fff;
          transform-origin: center;
          text-align: center;
          border-radius: 50%;
        }
        @keyframes twinkle {
          0% { opacity: 0.8; transform: rotate(-15deg) scale(1); }
          50% { opacity: 0.6; transform: rotate(0deg) scale(0.95); }
          100% { transform: rotate(15deg) scale(1); opacity: 0.9; }
        }
        .starry-text-container {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10000;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          pointer-events: none;
        }
        .starry-text {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: clamp(3rem, 8vw, 7rem);
          color: #FFFFFF;
          margin: 0;
          line-height: 1.1;
          letter-spacing: 10px;
          text-shadow: 
            2px 2px 0 #E61E32, 
            4px 4px 15px rgba(0,0,0,0.8);
          display: flex;
          align-items: center;
        }
        .starry-cursor {
          display: inline-block;
          width: clamp(4px, 1vw, 8px);
          height: 0.8em;
          background: #E61E32;
          margin-left: 15px;
          animation: blink-cursor 0.7s step-end infinite;
        }
        .offset-cursor {
          margin-left: 5px; /* Adjust spacing for 'OFFER' */
        }
        @keyframes blink-cursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      <div id="star-container">
        <div id="moon"></div>
        <div id="shootingstar"></div>
        
        {/* Scroll-triggered Text Reveal */}
        <div className="starry-text-container">
          <motion.h2 style={{ opacity: opacityWhat }} className="starry-text">
            WHAT <span className="starry-cursor"></span>
          </motion.h2>
          <motion.h2 style={{ opacity: opacityWe }} className="starry-text">
            WE <span className="starry-cursor"></span>
          </motion.h2>
          <motion.h2 style={{ opacity: opacityOffer }} className="starry-text">
            OFFER <span className="starry-cursor offset-cursor"></span>
          </motion.h2>
        </div>
      </div>
      </motion.section>
    </div>
  )
}

const styles = {
  wrapper: {
    height: '150vh', // Gives room to scroll while sticky
    position: 'relative',
    zIndex: 1,
  },
  section: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#000000',
    overflow: 'hidden',
    position: 'sticky',
    top: 0,
    zIndex: 1,
  }
}

export default StarryNightSection
