import Image from "next/image";
const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#BA2B27",
        color: "white",
        fontFamily: "'Open Sans', sans-serif",
      }}
      className="footer py-4 "
    >
      <div className="container">
        <div className="row mt-5">
          {/* Logo Section */}
          <div className="col-md-3 mb-4 text-center text-md-start">
            <Image
              src="/images/logo-footer.png" // Correct path
              alt="Logo"
              width={100}
              height={99}
              className="logo"
            />
          </div>

          {/* Contact Us Section */}
          <div className="col-md-3 mb-4 contact-us">
            <h5
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                fontSize: "18px", // Heading font size
              }}
            >
              CONTACT US
            </h5>
            <p style={{ fontSize: "13px" }}>
              <i className="bi bi-geo-alt me-2" style={{ color: "white" }}></i>
              Penafort Winery, Lasu Rd, Ojo, Lagos 102101, Lagos
            </p>
            <p style={{ fontSize: "13px" }}>
              <i className="bi bi-envelope me-2" style={{ color: "white" }}></i>
              information@penafortwinery.com
            </p>
            <p style={{ fontSize: "13px" }}>
              <i
                className="bi bi-telephone me-2"
                style={{ color: "white" }}
              ></i>
              English contact: +(234) 708 140 0924
            </p>
            <p style={{ fontSize: "13px" }}>
              <i
                className="bi bi-telephone me-2"
                style={{ color: "white" }}
              ></i>
              Igbo contact: +(234) 708 140 0924
            </p>
            <p style={{ fontSize: "13px" }}>
              <i
                className="bi bi-telephone me-2"
                style={{ color: "white" }}
              ></i>
              Yoruba contact: +(234) 708 140 0924
            </p>
            <p style={{ fontSize: "13px" }}>
              <i
                className="bi bi-telephone me-2"
                style={{ color: "white" }}
              ></i>
              Hausa contact: +(234) 708 140 0924
            </p>
            <style jsx>{`
              @media (max-width: 991px) {
                .contact-us p {
                  font-size: 11px !important;
                }
              }
              @media (max-width: 768px) {
                .contact-us p {
                  font-size: 13px !important;
                }
              }
            `}</style>
          </div>

          {/* About Us Section */}
          <div className="col-md-3 mb-4">
            <h5
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                fontSize: "18px",
              }}
            >
              ABOUT US
            </h5>
            <p style={{ fontSize: "13px" }}>
              <a href="#" className="text-white text-decoration-none">
                Story About Us
              </a>
            </p>
            <p style={{ fontSize: "13px" }}>
              <a href="#" className="text-white text-decoration-none">
                Our Latest Blog
              </a>
            </p>
            <p style={{ fontSize: "13px" }}>
              <a href="#" className="text-white text-decoration-none">
                Purchase Our Product
              </a>
            </p>
            <p style={{ fontSize: "13px" }}>
              <a href="#" className="text-white text-decoration-none">
                Keep in Touch
              </a>
            </p>

            <style jsx>{`
              @media (max-width: 768px) {
                .contact-us p {
                  font-size: 13px !important;
                }
              }
              @media (max-width: 991px) {
                .contact-us p {
                  font-size: 11px !important;
                }
              }
            `}</style>
          </div>

          {/* Latest News Section */}
          <div className="col-md-3 mb-4">
            <h5
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                fontSize: "18px", // Heading font size
              }}
            >
              LATEST NEWS
            </h5>
            <p style={{ fontSize: "13px" }}>OVER 450 Years, 1551</p>
            <p
              style={{ fontSize: "13px", fontWeight: "400" }}
              className="text-black"
            >
              LARGEST VINEYARD
            </p>
            <p style={{ fontSize: "13px" }}>November 1-10, 2024</p>
            <p
              style={{ fontSize: "13px", fontWeight: "400" }}
              className="text-black"
            >
              Trade Fair
            </p>
            <p style={{ fontSize: "13px" }}>Every Last Sunday, 2024</p>
            <p
              style={{ fontSize: "13px", fontWeight: "400" }}
              className="text-black"
            >
              Wine testing in all outlets
            </p>
          </div>
        </div>

        {/* Centered Logo Section */}
        <div className="row text-center mt-4">
          <div className="col-12 d-flex flex-column align-items-center">
            <Image
              src="/images/footer-energy.png" // Correct path
              alt="Centered Logo"
              width={150}
              height={50}
            />
            <p style={{ fontSize: "13px" }} className="mt-3">
              Powered by Penafort Energy
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="row mt-4">
          <div className="col-12 text-start">
            <p style={{ fontSize: "13px" }}>
              © 2024 PenafortWinery. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Only one default export should exist
export default Footer;
