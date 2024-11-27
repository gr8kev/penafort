import React from "react";
import Image from "next/image";
const HomeHero = () => {
  return (
    <div>
      <div className="container-fluid p-0 ">
        {/* Bootstrap Carousel */}
        <div
          id="penaforteCarousel"
          className="carousel slide carousel-fade custom-carousel-height mt-24"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Carousel Items */}
            <div className="carousel-item active">
              <Image
                src="/images/image1.png"
                className="d-block w-100"
                alt="First Slide"
                width={1920}
                height={1080}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/images/image2.png"
                className="d-block w-100"
                alt="Second Slide"
                width={1920}
                height={1080}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/images/image3.png"
                className="d-block w-100"
                alt="Third Slide"
                width={1920}
                height={1080}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#penaforteCarousel"
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
            data-bs-target="#penaforteCarousel"
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
    </div>
  );
};

export default HomeHero;
