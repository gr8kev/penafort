import React from "react";

const HomeHero = () => {
  return (
    <div
      className="vh-100 bg-image d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center text-white">
        <h1 className="display-4">Welcome to HomeHero</h1>
        <p className="lead">Your responsive hero section with Bootstrap</p>
      </div>
    </div>
  );
};

export default HomeHero;
