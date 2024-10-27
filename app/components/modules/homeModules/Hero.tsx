import Image from "next/image";
import coming from "./../../../../public/images/comingsoon.jpg";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light her0-container">
        <div className="position-relative w-100 h-100 hero-contain">
          <Image
            src={coming}
            alt="Coming Soon"
            layout="fill" // Fills the container
            objectFit="cover" // Ensures the image covers the container
            objectPosition="center" // Centers the image within the container
          />
        </div>
        <div
          className="position-absolute text-center"
          style={{ zIndex: 1 }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
