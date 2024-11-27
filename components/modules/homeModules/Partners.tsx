import React from "react";

const Partners = () => {
  return (
    <div className="mb-0">
      <div
        className="container-fluid p-0"
        style={{ minHeight: "600px", backgroundColor: "#BA2B27" }}
      >
        <div className="container-fluid p-0 m-0">
          <div
            className="row justify-content-center align-items-center m-0 h-100"
            style={{ minHeight: "100%" }}
          >
            <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0 p-0 m-0">
              <img
                src="images/footer-girls.png"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Right Container (Content) */}
            <div
              className="col-12 col-md-6 d-flex justify-content-center align-items-center p-0 m-0"
              style={{
                color: "white",
              }}
            >
              <div className="p-2 footer-text">
                <p
                  className="fs-1 fw-semibold text-start text-decoration-none"
                  style={{
                    fontFamily: "Open Sans",
                    lineHeight: "49.03px",
                  }}
                >
                  In Partnership with 19 Crimes Snoop Cali Rosé This is How We
                  Rosé
                </p>
                <div>
                  <button className="btn bg-white text-dark">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
