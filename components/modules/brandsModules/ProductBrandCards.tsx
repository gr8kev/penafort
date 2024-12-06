"use client";

import React from "react";
import Image from "next/image";
import styles from "./Brands.module.css";

const Home: React.FC = () => {
  const wines = [
    {
      src: "/images/AnnaDeCodorniuBrut.png",
      name: "Codorniu Cuvee Original Brut Ecologico",
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
  ];

  return (
    <div className=" bg-[#F5EBDA] w-full min-h-screen flex flex-col" style={{ backgroundColor: '#F5EBDA', minHeight: '100vh', padding: 0, margin: 0 }}>
      {/* Hero Section */}
      <div className="">
        <div className="mt-[96px] mx-auto w-full px-4 lg:px-10">
          <div className="relative w-full flex justify-center items-center rounded-lg overflow-hidden mb-8">
            {/* Hero Image */}
            <div className="relative w-full max-w-[1245px]">
              <Image
                src="/images/BrandsNew.png"
                alt="Hero Wine Bottles"
                layout="responsive"
                width={1440}
                height={420}
                className="object-cover w-full h-auto"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
                 {/* Hero Text */}
            <div className="absolute top-1/2 left-4 sm:left-6 lg:left-12 transform -translate-y-1/2 z-10 text-white max-w-[90%] md:max-w-full">
              <h1 className="text-xl sm:text-[14px] md:text-4xl font-cinzel leading-relaxed text-left">
                <span className="block mb-2">You&apos;ve got the</span>
                <span className="block mb-2">desire, we&apos;ve got</span>
                <span className="block">the wine!</span>
              </h1>
            </div>
            </div>

         
          </div>
        </div>
      </div>

      {/* Wine Grid Section */}
      <div className="bg-[#F5EBDA] p-3">
        <div className="container-fluid text-center">
          <h4 className="font-cinzel">OUR WINES</h4>
          <div className="font-opensans text-center text-[#BB6500] text-[13px]">
            As one of the biggest wine companies in the world, it is our responsibility
            to make sure our growth is sustainable to our people.
          </div>
        </div>

        <div className={`${styles.wineGridSection} mt-8`}>
          <div className={styles.wineGrid}>
            {wines.map((wine, index) => (
              <div key={index} className={styles.wineItem}>
                {/* Image */}
                <Image
                  src={wine.src}
                  alt={wine.name}
                  width={100}
                  height={200}
                  className={styles.wineImage}
                />
                {/* Name and Price */}
                <div className={styles.wineInfo}>
                  <h3>{wine.name}</h3>
                  <p>{wine.price}</p>
                </div>
                {/* Input and Add to Basket */}
                <div className={styles.actionSection}>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className={styles.quantityInput}
                  />
                  <button className={styles.addToBasket}>Add to Basket</button>
                </div>
              </div>
            ))}
          </div>

          {/* See More Button */}
          <div className={styles.seeMoreContainer}>
            <button className={styles.seeMore}>Show More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
