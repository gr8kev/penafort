import React from "react";

const WineSection = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center text-center text-md-start">
      {/* Header */}
      <h1 className="mb-3 about-head w-100 mt-0 mt-md-5 text-md-center text-start">
        Our wines
      </h1>

      {/* Body Text */}
      <p className="mb-4 w-100 receive text-start text-md-center">
        As one of the biggest wine companies in the world, it is our
        responsibility to make sure our growth is sustainable to our people.
      </p>

      {/* Button */}
      <div className="w-100 d-flex justify-content-start justify-content-md-center">
        <button className="btn">See More</button>
      </div>
    </div>
  );
};

export default WineSection;
