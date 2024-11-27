"use client";

import React, { useState } from "react";
import Image from "next/image";

const Home: React.FC = () => {
  const wines = [
    {
      src: "/images/AnnaDeCodorniuBrut.png",
      name: "Codorniu Cuvee original Brut Ecologico",
      price: "₦45,000",
    },
    {
      src: "/images/anna.png",
      name: "Anna de Codorniu Brut Rosé",
      price: "₦102,000",
    },
    {
      src: "/images/bach.png",
      name: "Bach Extrisimo Brut Rosé",
      price: "₦42,000",
    },
    {
      src: "/images/Codorniu Cuvee original Brut Ecologico.png",
      name: "La Vicalanda Gran Reserva 2016",
      price: "₦264,000",
    },
    {
      src: "/images/CodorniuCan2.png",
      name: "Codorniu Be Frizz Bubbly White",
      price: "₦48,000",
    },
    {
      src: "/images/CodorniuCan-removebg-preview.png",
      name: "Codorniu Be Frizz Bubbly Rosé",
      price: "₦48,000",
    },
    {
      src: "/images/NuvianaSBrut-removebg-preview.png",
      name: "Nuviana Brut",
      price: "₦36,000",
    },
    {
      src: "/images/Rondel-removebg-preview.png",
      name: "Rondel Oro Cava Brut",
      price: "₦42,000",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(wines.length / itemsPerPage);
  const currentItems = wines.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const handleNext = () => {
    if (currentIndex < totalPages - 1) setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleDotClick = (index: number) => setCurrentIndex(index);

  return (
    <div className="container my-5  position-relative ">
      <div className="row g-4">
        {currentItems.map((wine, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-2"
          >
            <div
              className="card text-center shadow-sm"
              style={{ width: "400px", height: "400px" }}
            >
              <Image
                src={wine.src}
                alt={wine.name}
                width={200}
                height={250}
                className="card-img-top"
                style={{ objectFit: "contain", height: "60%" }}
              />
              <div className="card-body">
                <h5 className="card-title">{wine.name}</h5>
                <p className="card-text text-danger">{wine.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Control Buttons */}
      <div className="d-flex justify-content-center align-items-center position-absolute w-100  ">
        {/* Control Buttons */}
        <button
          onClick={handlePrev}
          disabled={currentIndex <= 0}
          className="btn-outline-secondary  d-flex align-items-center justify-content-center "
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "40%",
            fontSize: "20px",
            padding: "0",
            border: "1px solid #BB6500",
          }}
        >
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.69222 14.6218L1.19624 8.12584L7.69222 1.62986"
              stroke="#BB6500"
              stroke-width="1.70263"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        {/* Dots */}
        <div className="d-flex align-items-center mx-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              className={`dot ${
                index === currentIndex ? "bg-warning" : "bg-transparent"
              }`}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                cursor: "pointer",
                margin: "0 5px",
                border: "1px solid #BB6500",
              }}
            ></span>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentIndex >= totalPages - 1}
          className=" btn-outline-secondary d-flex align-items-center justify-content-center mx-2"
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "40%",
            fontSize: "20px",
            padding: "0",
            border: "1px solid #BB6500",
          }}
        >
          <svg
            width="9"
            height="15"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.01671 1.1333L7.51269 7.62929L1.01671 14.1253"
              stroke="#BB6500"
              stroke-width="1.70263"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Home;
