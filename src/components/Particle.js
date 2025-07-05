import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: "#3f8efc"
          },
          line_linked: {
            enable: true,
            opacity: 0.08,
            color: "#3f8efc"
          },
          move: {
            direction: "right",
            speed: 0.07,
          },
          size: {
            value: 1.5,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
