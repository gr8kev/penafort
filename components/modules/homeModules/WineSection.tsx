import React from "react";

const WineSection = () => {
  return (
    <div className="container-fluid p-0">
      {/* Header */}
      <h1 className="mb-3 about-head mt-0 mt-md-5 text-start text-md-center">
        Our wines
      </h1>

      {/* Body Text */}
      <p className="mb-4 text-start text-md-center word2 ">
        As one of the biggest wine companies in the world, it is our
        responsibility to make sure our growth is sustainable to our people.
      </p>

      {/* Button */}
      <div className="d-flex mx-2 text-left justify-content-md-center">
        <button className="btn">See More</button>
      </div>
    </div>
  );
};

export default WineSection;
