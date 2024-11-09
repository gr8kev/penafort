import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="mt-24">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="/images/wineBanner1.png"
              alt="First slide"
              className="d-block w-100"
              width={500}
              height={500}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/images/wineBanner2.png"
              alt="Second slide"
              className="d-block w-100"
              width={500}
              height={500}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/images/wineBanner3.png"
              alt="Second slide"
              className="d-block w-100"
              width={500}
              height={500}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/images/wineBanner4.png"
              alt="Second slide"
              className="d-block w-100"
              width={500}
              height={500}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/images/wineBanner5.png"
              alt="Second slide"
              className="d-block w-100"
              width={500}
              height={500}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
