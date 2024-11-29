import Image from "next/image";

export default function About() {
  return (
    <div className="container-fluid p-0 mt-14">
      <div className="row no-gutters align-items-center justify-content-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 p-0 d-flex justify-content-center">
          <div className="image-container">
            <Image
              src="/images/aboutus.png"
              alt="About Us"
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover"
              className="about-image"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start px-4 px-md-5 py-3 py-md-0 p-0">
          {/* Header */}
          <div className="about-head text-left mb-2">About Us</div>

          {/* Body Text */}
          <div className="word mt-2 text-left w-full">
            At Penafort Winery, we believe every sip should tell a story and
            every bottle should spark joy. Whether you’re celebrating
            milestones, unwinding after a long day, or just treating yourself,
            we’ve got the perfect wine for every occasion.
          </div>

          {/* Button */}
          <div className="mt-5 text-left">
            <button className="btn-custom btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
