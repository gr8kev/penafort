"use client"; // Mark this component as a client-side component

import React from "react";
import Image from "next/image"; // Import Next.js Image component

const Home = () => {
  return (
    <div className="mt-24">
      {" "}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="/images/wineBanner1.png"
              alt="Slide 1"
              className="d-block w-100"
              layout="responsive"
              width={1200}
              height={500}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/images/wineBanner2.png"
              alt="Slide 2"
              className="d-block w-100"
              layout="responsive"
              width={1200}
              height={500}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/images/wineBanner3.png"
              alt="Slide 3"
              className="d-block w-100"
              layout="responsive"
              width={1200}
              height={500}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/images/wineBanner4.png"
              alt="Slide 4"
              className="d-block w-100"
              layout="responsive"
              width={1200}
              height={500}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/images/wineBanner5.png"
              alt="Slide 5"
              className="d-block w-100"
              layout="responsive"
              width={1200}
              height={500}
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
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
          data-bs-target="#carouselExampleFade"
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
