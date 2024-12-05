"use client";

import React, { useState } from "react";
import Image from "next/image";

const Home: React.FC = () => {
  const wines = [
    {
      src: "/images/AnnaDeCodorniuBrut.png",
      name: "Codorniu Cuvee original Brut Ecologico",
      price: "₦54,000",
    },
    {
      src: "/images/anna.png",
      name: "Anna de Codorniu Brut Rosé",
      price: "₦117,000",
    },
    {
      src: "/images/bach.png",
      name: "Bach Extrisimo Brut Rosé",
      price: "₦54,000",
    },
    {
      src: "/images/Codorniu Cuvee original Brut Ecologico.png",
      name: "La Vicalanda  Reserva 2016",
      price: "₦135,000",
    },
    {
      src: "/images/CodorniuCan2.png",
      name: "Codorniu Be Frizz Bubbly White",
      price: "₦54,000",
    },
    {
      src: "/images/CodorniuCan-removebg-preview.png",
      name: "Codorniu Be Frizz Bubbly Rosé",
      price: "₦54,000",
    },
    {
      src: "/images/NuvianaSBrut-removebg-preview.png",
      name: "Nuviana Brut",
      price: "₦45,000",
    },
    {
      src: "/images/Rondel-removebg-preview.png",
      name: "Rondel Oro Cava Brut",
      price: "₦51,000",
    },
    {
      src: "/images/Cordoniu_Zero-removebg-preview.png",
      name: "Codorniu Zero",
      price: "₦69,000",
    },
    {
      src: "/images/Mont-ferrant-brut-reserva-removebg-preview.png",
      name: "Mont-Ferrant Brut Reserva Ecológico",
      price: "₦69,000",
    },
    {
      src: "/images/FincaElRubio-removebg-preview.png",
      name: "Finca El Rubio",
      price: "₦186,000",
    },
    {
      src: "/images/calllmo-removebg-preview.png",
      name: "Calmo Legaris-Vino De Lagrima Nocturno 2017",
      price: "₦330,000",
    },
    {
      src: "/images/Cordorniu_can-removebg-preview.png",
      name: "Codorniu Spiritz Let'Orange",
      price: "₦54,000",
    },
    {
      src: "/images/LaSonata-removebg-preview.png",
      name: "Vinos del Paseante La Sonatina Albarino 2022",
      price: "₦87,000",
    },
    {
      src: "/images/Mont-ferrant-removebg-preview.png",
      name: "Mont-Ferrant Brut Rosé",
      price: "₦69,000",
    },
    {
      src: "/images/Parxet-removebg-preview.png",
      name: "Parxet Brut Rose",
      price: "₦81,000",
    },
    {
      src: "/images/RoyalCarlton_jpeg-removebg-preview.png",
      name: "Royal Carlton Brut",
      price: "₦81,000",
    },
    {
      src: "/images/VintagesCor-removebg-preview.png",
      name: "Codorniu Vintage Brut",
      price: "₦54,000",
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
    <div className="container-fluid my-5 position-relative p-0 ">
      <div className="row g-0 ">
        {" "}
        {/* Removed g-4 to remove gaps between items */}
        {currentItems.map((wine, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-2 px-3" // Added padding for mobile views
            style={{ padding: "0" }} // Remove any extra padding
          >
            <div
              className="card text-center shadow-sm  "
              style={{ width: "100%", height: "400px" }} // Full width on mobile
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
      <div className="d-flex justify-content-center align-items-center position-absolute w-100">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          disabled={currentIndex <= 0}
          className="btn-outline-secondary d-flex align-items-center justify-content-center"
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
              strokeWidth="1.70263"
              strokeLinecap="round"
              strokeLinejoin="round"
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
          className="btn-outline-secondary d-flex align-items-center justify-content-center mx-2"
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
              strokeWidth="1.70263"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Home;
