"use client"; // Mark this component as a client-side component

import React from "react";
import Image from 'next/image';
import Link from "next/link"; // Import Link for navigation
import HomeCarousel from "@/components/HomeCarousel";

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] mt-[78px] bg-white">
        {/* Pseudo-element for background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transform scaleY-[-1] bg-[url('/images/Penafortbg.jpeg')] sm:bg-cover"
          style={{ transform: 'scaleY(-1)' }} // Flips the image vertically
        ></div>

        {/* Content inside the hero section */}
        <div className="absolute inset-0 flex items-center">
          <div className="text-white px-8 sm:px-16 font-cinzel">
            <h1 className="md:text-[48px] space-y-5 animate-slide-in-left [animation-delay:0.4s] font-normal sm:text-3xl">
              Every Bottle
            </h1>
            <div className="md:text-[48px] animate-slide-in-left [animation-delay:0.6s] font-normal sm:text-3xl sm:mb-4">
              Tells A Story
            </div>
            <p className="md:text-[14px] mb-6 animate-slide-in-left [animation-delay:0.7s] font-opensans font-normal sm:text-[9px]">
              At Penafort Wine, we believe every sip should tell <br />a story and every bottle should spark joy.
            </p>
            <Link href="#">
              <button className="py-[6px] px-[20px] bg-[#BA2B27] text-white font-opensans font-normal md:text-[12px] rounded-[4px] shadow-lg hover:bg-red-600 transition-all duration-300 animate-slide-in-left [animation-delay:0.9s]">
                View Our Portfolio
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative w-full h-auto px-4 py-10 lg:flex lg:items-center lg:gap-16 bg-white">
        <div className="absolute inset-0 bg-[url('/images/aboutbg.png')] bg-cover bg-center opacity-10"></div>

        <div className="relative flex items-center justify-center lg:w-1/2">
          <div className="absolute w-[330px] h-[330px] rounded-full bg-green-100/40 mt-8 ml-10"></div>
          <Image
              src="/images/aboutUs.png"
              alt="About Us"
              width={400} 
              height={450} 
              className="relative ml-[-78px] bottom-10 z-10 mt-14"
  />
        </div>

        <div className="relative z-10 text-black lg:w-1/2 sm:mr-14 sm:mb-16 mx-4 -mr-20 mb-14">
          <h1 className="text-xl sm:text-5xl font-cinzel font-normal text-black mb-5 sm:text-left">
            About Us -
          </h1>
          <p className="font-opensans text-[#9E845C] text-sm sm:text-left mt-0">
            At Penafort Winery, we believe every sip should tell a story <br />
            and every bottle should spark joy. Whether you’re <br />
            celebrating milestones, unwinding after a long day, or just <br />
            treating yourself, we’ve got the perfect wine for every <br />
            occasion.
          </p>
          <div className="flex justify-center sm:justify-start">
            <button className="mt-4 px-6 py-2 bg-red-600 text-white font-normal text-sm sm:text-lg rounded hover:bg-red-700 font-opensans">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Wines Section */}
      <div className="relative text-center mt-7">
        <h4>OUR WINES</h4>
        <p className="font-opensans font-normal text-[14px] text-[#9E845C]">
          As one of the biggest wine companies in the world, it is our responsibility
          to make sure our growth is sustainable to our people.
        </p>
        <Link href="#">
          <button className="py-[14px] px-[80px] bg-[#BA2B27] text-white font-opensans font-normal md:text-[12px] rounded-[4px] shadow-lg hover:bg-red-600 mt-3">
            See More
          </button>
        </Link>
      </div>

      <div className="mt-8">
        <HomeCarousel />
      </div>

      {/* Elegant Refinement Section */}
      <div className="text-center mt-3">
        <h3 className="font-opensans text-[24px] text-[#9E845C] font-normal" style={{ letterSpacing: '0.2em' }}>
          ELEGANT REFINEMENT
        </h3>

        <h1 className="font-cinzel text-[58px] text-[#BA2B27] font-normal mt-3">Nature&apos;s Growing Essence</h1>

        <div className="grid grid-cols-2 gap-0 mt-5 mx-3">
  <div className="border-4 border-[#9E845C]">
    <Image
      src="/images/Square1.jpeg"
      alt="Square 1"
      width={500}
      height={400}
      className="object-cover w-full h-full"
    />
  </div>

  <div className="border-4 border-[#9E845C]">
    <Image
      src="/images/square2.jpeg"
      alt="Square 2"
      width={500}
      height={400}
      className="object-cover w-full h-full"
    />
  </div>

  <div className="border-4 border-[#9E845C]">
    <Image
      src="/images/Square3.jpeg"
      alt="Square 3"
      width={500}
      height={400}
      className="object-cover w-full h-full"
    />
  </div>

  <div className="border-4 border-[#9E845C]">
    <Image
      src="/images/square4.jpeg"
      alt="Square 4"
      width={500}
      height={400}
      className="object-cover w-full h-full"
    />
  </div>
</div>


        <div className="flex justify-center sm:text-center mt-3 mb-2">
          <Link href="#">
            <button className="py-[14px] px-[80px] bg-[#BA2B27] text-white font-opensans font-normal md:text-[12px] rounded-[4px] shadow-lg hover:bg-red-600 mt-3">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
