import React from "react";
import Image from "next/image"; // Assuming you're using Next.js for image optimization

export default function About() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center justify-content-center">
        {/* Left Container (Image) */}
        <div className="col-12 col-lg-6 mb-4 d-flex justify-content-center">
          <div
            className="image-container"
            style={{
              width: "100%",
              height: "auto",
              overflow: "hidden",
              borderRadius: "8px",
            }}
          >
            <Image
              src="/images/aboutus.png" // Replace with your image path
              alt="About Us"
              layout="responsive"
              width={600} // Set the desired width
              height={400} // Set the desired height
              objectFit="cover"
            />
          </div>
        </div>

        {/* Right Container (Content) */}
        <div className="col-12 col-lg-6 mb-4  ">
          <div
            className="news-box  text-left p-4"
            style={{ borderRadius: "8px", height: "100%" }}
          >
            <div className="about-head">About Us</div>
            <div className="word">
              At Penafort Winery, we believe every sip should tell a story and
              every bottle should spark joy. Whether you’re{" "}
            </div>
            <div className="word mt-4">
              celebrating milestones, unwinding after a long day, or just
              treating yourself, we’ve got the perfect wine for every occasion.
            </div>
            <div>
              <button className="btn-custom btn-primary mt-5">
                <a href="/about">Read More</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
