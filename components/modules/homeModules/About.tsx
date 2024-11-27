// pages/about.js
import Image from "next/image";

export default function About() {
  return (
    <div className="container about-container mt-24">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-lg-6 col-md-12 p-0">
          <div className="image-container">
            <Image
              src="/images/aboutus.png"
              alt="About Us"
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover" // Maintains aspect ratio
              className="about-image"
            />
          </div>
        </div>
        {/* Content Section */}
        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center p-4">
          {/* Header */}
          <div className="about-head text-start mb-2">About Us</div>

          {/* Body Text */}
          <div className="word mt-2 text-start w-100">
            At Penafort Winery, we believe every sip should tell a story and
            every bottle should spark joy. Whether you’re celebrating
            milestones, unwinding after a long day, or just treating yourself,
            we’ve got the perfect wine for every occasion.
          </div>

          {/* Button */}
          <div className="mt-5 text-start">
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
