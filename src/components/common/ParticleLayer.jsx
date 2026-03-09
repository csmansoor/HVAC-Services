import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleLayer = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}>
      <Particles
        id="tsparticles"
        style={{ width: "100%", height: "100%", pointerEvents: 'all' }}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: ["grab", "attract"], // Matches the "Antigravity" magnetic pull
              },
            },
            modes: {
              grab: {
                distance: 220,
                links: {
                  opacity: 0.6,
                  color: "#E61E32", // Connecting lines in your brand red
                },
              },
              attract: {
                distance: 300,
                duration: 0.4,
                factor: 5, // Creates the "liftoff" effect from your video
              },
            },
          },
          particles: {
            color: { value: ["#ffffff", "#E61E32"] },
            links: {
              color: "#ffffff",
              distance: 130,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1, // Slow floating movement
              direction: "none",
              outModes: { default: "out" },
            },
            number: {
              value: 100,
              density: { enable: true, area: 800 },
            },
            opacity: {
              value: { min: 0.1, max: 0.5 },
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticleLayer;
