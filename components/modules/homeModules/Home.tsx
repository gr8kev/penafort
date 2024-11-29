"use client"; // Mark this component as a client-side component

import React from "react";
import Image from "next/image";
import Link from "next/link";


const Home: React.FC = () => {
  return (
    <div className="bg-white ">
      {/* Hero Section */}
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

      {/* About Section */}
      <div className="container-fluid relative w-full h-auto px-4 py-10 bg-white d-lg-flex align-items-center">
        <div className="absolute inset-0 bg-[url('/images/aboutbg.png')] bg-cover bg-center opacity-10"></div>

        <div className="relative d-flex align-items-center justify-content-center lg:w-1/2">
          <div className="absolute w-[330px] h-[330px] rounded-circle bg-green-100/40 mt-8 ml-10"></div>
          <Image
            src="/images/aboutUs.png"
            alt="About Us"
            width={400}
            height={450}
            className="relative z-10 mt-14"
          />
        </div>

        <div className="relative z-10 text-black lg:w-1/2 mx-4 mb-14">
          <h1 className="h2 font-cinzel text-black mb-5">About Us -</h1>
          <div className="font-opensans text-muted word">
            At Penafort Winery, we believe every sip should tell a story and
            every bottle should spark joy. Whether you’re celebrating
            milestones, unwinding after a long day, or just treating yourself,
            we’ve got the perfect wine for every occasion.
          </div>
          <div className="text-start">
            <button className="btn btn-danger mt-4">Read More</button>
          </div>
        </div>
      </div>

      {/* Wines Section */}
      <div className="container-fluid text-center mt-7">
        <h4>OUR WINES</h4>
        <div className="font-opensans text-muted  ">
          As one of the biggest wine companies in the world, it is our
          responsibility to make sure our growth is sustainable to our people.
        </div>
        <Link href="#">
          <button className="btn btn-danger mt-3">See More</button>
        </Link>
      </div>

      <div className="mt-8">
      
      </div>

      {/* Elegant Refinement Section */}
      <div className="container-fluid text-center mt-3 ">
        <h3
          className="font-opensans text-muted"
          style={{ letterSpacing: "0.2em" }}
        >
          ELEGANT REFINEMENT
        </h3>
        <h1 className="font-cinzel text-danger mt-3">
          Nature&apos;s Growing Essence
        </h1>

        <div className="row g-0 mt-5 justify-content-center ">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="ratio ratio-4x3 border border-warning rounded">
              <Image
                src="/images/Square1.jpeg"
                alt="Square 1"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="ratio ratio-4x3 border border-warning rounded">
              <Image
                src="/images/square2.jpeg"
                alt="Square 2"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="ratio ratio-4x3 border border-warning rounded">
              <Image
                src="/images/Square3.png"
                alt="Square 3"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="ratio ratio-4x3 border border-warning rounded">
              <Image
                src="/images/square4.png"
                alt="Square 4"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
          </div>
        </div>

        <div className="mt-2 ">
          <Link href="#">
            <button className="btn btn-danger mt-3 mb-2">Order Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
