import React, { useState } from "react";
import Image from 'next/image';


const Home: React.FC = () => {
  const wines = [
    { src: "/images/parxet.jpeg", name: "Parxet Brut Rosé", price: "₦54,000" },
    { src: "/images/Nuviana.jpeg", name: "Nuviana Brut Rosado", price: "₦36,000" },
    { src: "/images/AnnaCodorniu.jpeg", name: "Anna de Codorniu Ice Rosé", price: "₦102,000" },
    { src: "/images/AnnaDeCodorniuBrut.jpeg", name: "Anna de Codorniu Brut Rosé", price: "₦102,000" },
    { src: "/images/Bach brut Rose wine.jpeg", name: "Bach Extrisimo Brut Rosé", price: "₦42,000" },
    { src: "/images/Bach Rosado Can.jpeg", name: "Bach Vina Extrisimo Rosado Rosé", price: "₦48,000" },
    { src: "/images/BrutNUvianaCava.jpeg", name: "Nuviana Brut", price: "₦36,000" },
    { src: "/images/Rondel.jpeg", name: "Rondel Oro Cava Brut", price: "₦42,000" },
    { src: "/images/CalmoLegaris.jpeg", name: "Calmo Legaris-Vino De Lagrima Nocturno 2017", price: "₦262,000" },
    { src: "/images/CodorniuCan.jpeg", name: "Codorniu Be Frizz Bubbly Rosé", price: "₦48,000" },
    { src: "/images/CodorniuCan2.jpeg", name: "Codorniu Be Frizz Bubbly White", price: "₦48,000" },
    { src: "/images/CordorniuZero.jpeg", name: "Codorniu Zero", price: "₦57,000" },
    { src: "/images/Cordorniu can.jpeg", name: "Codorniu Spritz Let`Orange", price: "₦48,000" },
    { src: "/images/cuveeCodorniu.jpeg", name: "Codorniu Cuvée Original Brut Ecológico", price: "₦45,000" },
    { src: "/images/FincaElRubio.jpeg", name: "Finca El Rubio", price: "₦154,000" },
    { src: "/images/LaSonata.jpeg", name: "Vinos del Paseante le Sonatina Albarino 2022", price: "₦75,000" },
    { src: "/images/LAvicalandaReserva.jpeg", name: "La Vicalanda Gran Reserva 2016", price: "₦264,000" },
    { src: "/images/Mont-ferrant.jpeg", name: "Mont-Ferrant Brut Rose", price: "₦48,000" },
    // More items...
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(wines.length / itemsPerPage);
  const currentItems = wines.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const handleNext = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className="carousel-container" style={{ padding: "20px" }}>
        {/* Carousel Items */}
        <div className="carousel-grid">
          {currentItems.map((wine, index) => (
            <div key={index} className="carousel-item">
              {/* Image */}
              < Image 
              src={wine.src} 
              alt={wine.name} 
              width={100}
              height={200}
              className="carousel-image" 
              />
              {/* Name and Price */}
              <div className="wine-info">
                <h3>{wine.name}</h3>
                <p>{wine.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="carousel-controls">
          {/* Left Arrow */}
          <button onClick={handlePrev} disabled={currentIndex <= 0} className="arrow">
            {"<"}
          </button>

          {/* Dots */}
          <div className="dots">
            {Array.from({ length: totalPages }).map((_, index) => (
              <span
                key={index}
                onClick={() => handleDotClick(index)}
                className={`dot ${index === currentIndex ? "active" : ""}`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button onClick={handleNext} disabled={currentIndex >= totalPages - 1} className="arrow">
            {">"}
          </button>
        </div>
      </div>

      <style jsx>{`
        .carousel-container {
          padding: 10px;
        }

        .carousel-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* Default: 3 items per row */
          gap: 20px;
        }

        .carousel-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .carousel-image {
          max-width: 100%;
          height: 200px;
          object-fit: contain;
          border-radius: 8px;
        }

        .wine-info {
          margin-top: 25px;
          margin-bottom: 20px;
        }

        .wine-info h3 {
          font-size: 16px;
          font-weight: normal;
          margin-bottom: 5px;
        }

        .wine-info p {
          font-size: 14px;
          color: #BA2B27;
        }

        .carousel-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 25px;
          gap: 10px; /* Space between arrows and dots */
        }

        .dots {
          display: flex;
          gap: 8px; /* Increased gap between dots */
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #E0E0E0;
          cursor: pointer;
        }

        .dot.active {
          background-color: #BB6500;
        }

        .arrow {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 2px solid #E0E0E0;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: transparent;
          cursor: pointer;
        }

        .arrow:hover {
          border-color: #BB6500;
        }

        .arrow:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }

        /* Hide arrows and dots on small screens */
        @media (max-width: 480px) {
          .carousel-grid {
            grid-template-columns: 1fr; /* 1 item per row on small screens */
          }

          .carousel-controls {
            display: none; /* Hide controls on small screens */
          }

          .carousel-item {
            max-width: 100%;
          }
        }

        /* Adjust to 2 items per row on medium screens */
        @media (max-width: 768px) {
          .carousel-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .carousel-item {
            max-width: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
