import React from "react";

const BackgroundParticles = ({ cX, cY }) => {
  const width = window.innerWidth;
  const height = 4000;
  const depth = 30;

  let posX = ((width / 2 - cX) / depth).toFixed(2);
  let posY = ((height / 2 - cY) / depth).toFixed(2);

  return (
    <>
      <div
        className="absolute top-0"
        style={{ transform: `translate(${posX}px, ${posY}px)` }}
      >
        <h1>Particle 1</h1>
      </div>
      <div
        className="absolute top-1/4 left-2/4"
        style={{ transform: `translate(${posX}px, ${posY}px)` }}
      >
        <h1>Particle 1</h1>
      </div>
    </>
  );
};

export default BackgroundParticles;
