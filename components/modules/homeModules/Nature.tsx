import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nature = () => {
  return (
    <div className="container-fluid text-center">
      <h3
        className="font-opensans text-[#BB6500]"
        style={{ letterSpacing: "0.2em", fontSize: "1.5rem" }}
      >
        ELEGANT REFINEMENT
      </h3>
      <h1 className="font-cinzel text-danger mt-3">
        Nature&apos;s Growing Essence
      </h1>

      <div className="row g-3 mt-5 justify-content-center">
        {/* Image 1 */}
        <div
          className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center"
          style={{ maxWidth: "600px" }}
        >
          <div
            className="border border-warning rounded"
            style={{
              width: "600px",
              height: "400px",
              overflow: "hidden",
              position: "relative",
              borderRadius: "8px",
            }}
          >
            <Image
              src="/images/Square1.png"
              alt="Square 1"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        </div>

        {/* Image 2 */}
        <div
          className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center"
          style={{ maxWidth: "600px" }}
        >
          <div
            className="border border-warning rounded"
            style={{
              width: "600px",
              height: "400px",
              overflow: "hidden",
              position: "relative",
              borderRadius: "8px",
            }}
          >
            <Image
              src="/images/square2.png"
              alt="Square 2"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        </div>

        {/* Image 3 */}
        <div
          className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center"
          style={{ maxWidth: "600px" }}
        >
          <div
            className="border border-warning rounded"
            style={{
              width: "600px",
              height: "400px",
              overflow: "hidden",
              position: "relative",
              borderRadius: "8px",
            }}
          >
            <Image
              src="/images/Square3.png"
              alt="Square 3"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        </div>

        {/* Image 4 */}
        <div
          className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center"
          style={{ maxWidth: "600px" }}
        >
          <div
            className="border border-warning rounded"
            style={{
              width: "600px",
              height: "400px",
              overflow: "hidden",
              position: "relative",
              borderRadius: "8px",
            }}
          >
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

      <div className="mt-4">
        <Link href="#">
          <button className="btn-custom btn-primary">Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Nature;
