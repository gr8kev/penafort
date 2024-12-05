"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nature = () => {
  return (
    <div className="container text-center">
      <h3
        className="font-opensans text-[#BB6500]"
        style={{ letterSpacing: "0.2em", fontSize: "1.5rem" }}
      >
        ELEGANT REFINEMENT
      </h3>
      <h1 className="font-cinzel text-danger mt-3">
        Nature&apos;s Growing Essence
      </h1>

      <div className="row g-4 mt-5 justify-content-center">
        {[
          { src: "/images/Square1.png", alt: "Square 1" },
          { src: "/images/square2.png", alt: "Square 2" },
          { src: "/images/Square3.png", alt: "Square 3" },
          { src: "/images/square4.png", alt: "Square 4" },
          { src: "/images/square5.png", alt: "Square 5" },
          { src: "/images/square6.png", alt: "Square 6" },
        ].map((image, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
          >
            <div
              className="border border-warning rounded mx-auto"
              style={{
                width: "100%",
                maxWidth: "400px", // Limit max width
                height: "auto",
                position: "relative",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={200}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                }}
                className="rounded"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <Link href="/brands">
          <button className="btn-custom btn-primary mb-3">Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Nature;
