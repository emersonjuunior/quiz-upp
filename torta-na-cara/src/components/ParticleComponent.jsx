// ParticleBackground.jsx

import React from "react";
import Particles from "react-tsparticles";
import { loadSnowPreset } from "tsparticles-preset-snow";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadSnowPreset(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "snow",
        background: {
          color: {
            value: "#2c2e3a",  // Cor de fundo da animação
          }
        },
        particles: {
          color: {
            value: "#FFF4E9" // Altere esta cor para definir a cor das partículas
          }
        }
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,  // Mantém o fundo de partículas atrás de outros elementos
      }}
    />
  );
};

export default ParticleBackground;