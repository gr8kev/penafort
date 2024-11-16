"use client"; // Mark this component as a client-side component

import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation

interface Product {
  id: number;
  name: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Parxet", image: "/images/parxet.jpeg" },
  { id: 2, name: "Nuviana", image: "/images/Nuviana.jpeg" },
  { id: 3, name: "Mont-ferrant", image: "/images/Mont-ferrant.jpeg" },
  { id: 4, name: "La Vicalanda", image: "/images/LaVicalanda.jpeg" },
  { id: 5, name: "Finca El Rubio", image: "/images/FincaElRubio.jpeg" },
  { id: 6, name: "Cuvée Spéciale", image: "/images/cuveeSpeciale.jpeg" },
  { id: 7, name: "Calmo", image: "/images/Calmo.jpeg" },
  { id: 8, name: "Royal Carlton", image: "/images/RoyalCarlton jpeg.jpeg" },
  { id: 9, name: "Vintage Codorniu", image: "/images/VintageCodorniu.jpeg" },
  { id: 10, name: "Codorniu", image: "/images/Codorniu.jpeg" },
];

const Home: React.FC = () => {
  return (
    <div>
      {/* Carousel Section */}
      <div className="mt-24 wrapper bg-black">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image
                src="/images/wineBanner1.png"
                alt="Slide 1"
                className="d-block w-100"
                layout="responsive"
                width={1200}
                height={500}
                priority
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/images/wineBanner2.png"
                alt="Slide 2"
                className="d-block w-100"
                layout="responsive"
                width={1200}
                height={500}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/images/wineBanner3.png"
                alt="Slide 3"
                className="d-block w-100"
                layout="responsive"
                width={1200}
                height={500}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/images/wineBanner4.png"
                alt="Slide 4"
                className="d-block w-100"
                layout="responsive"
                width={1200}
                height={500}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/images/wineBanner5.png"
                alt="Slide 5"
                className="d-block w-100"
                layout="responsive"
                width={1200}
                height={500}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Products Section */}
      <div className="product-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4 bg-black">
        {products.map((product) => (
          <div
            className="product-card flex flex-col items-center"
            key={product.id}
          >
            <div className="product-image-container relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="product-name mt-2 text-center text-lg font-semibold">
              {product.name}
            </h3>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="see-more-container">
        <Link
          href="/brands"
          className="see-more-button flex justify-end mr-7 mb-10"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default Home;
