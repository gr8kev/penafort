"use client"; // Mark this component as a client-side component

import React from "react";
import Image from "next/image";
import Link from "next/link";
import HomeCarousel from "@/components/HomeCarousel";

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="container-fluid relative h-[500px] mt-[78px] bg-white">
        {/* Background Image */}
      </div>

      {/* Carousel Section */}
      <div className="container-fluid mt-14 wrapper ">
        <div
          className="absolute inset-0 bg-cover bg-center transform scaleY-[-1] bg-[url('/images/Penafortbg.jpeg')] sm:bg-cover"
          style={{ transform: "scaleY(-1)" }}
        ></div>

        <div className="absolute inset-0 flex items-center">
          <div className="container-fluid text-white px-4 font-cinzel">
            <h1 className="md:text-[48px] animate-slide-in-left font-bold sm:text-3xl text-shadow-lg">
              Every Bottle
            </h1>
            <div className="md:text-[48px] animate-slide-in-left font-bold sm:text-3xl sm:mb-4 text-shadow-lg">
              Tells A Story
            </div>
            <p className="md:text-[18px] mb-6 animate-slide-in-left font-opensans font-normal sm:text-[12px] text-shadow-md">
              At Penafort Wine, we believe every sip should tell <br />a story
              and every bottle should spark joy.
            </p>
            <Link href="#">
              <button className="btn btn-danger animate-slide-in-left shadow-lg">
                View Our Portfolio
              </button>
            </Link>
          </div>
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
        <HomeCarousel />
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
                src="/images/Square3.jpeg"
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
                src="/images/square4.jpeg"
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
