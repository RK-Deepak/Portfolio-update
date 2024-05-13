import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#000000" // Black background
          }
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            }
          }
        },
        particles: {
          number: {
            value: 100, // Number of particles
            density: {
              enable: true,
              value_area: 800 // Density of particles
            }
          },
          shape: {
            type: "triangle", // Particle shape
            triangle: {
              enable: true,
              width: 10, // Width of the triangle
              height: 10 // Height of the triangle
            }
          },
          color: {
            value: "#ffffff" // Color of the particles (white)
          },
          opacity: {
            value: 0.5, // Opacity of the particles
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 4, // Size of the particles
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150, // Distance between connected particles
            color: "#ffffff", // Color of the lines (white)
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2, // Speed of particle movement
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        retina_detect: true
      }}
    />
  );
}

export default Particle;
