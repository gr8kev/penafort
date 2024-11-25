"use client";

import React from "react";
import Image from "next/image";
import styles from "./Brands.module.css";

const Home: React.FC = () => {
  const wines = [
    {
      src: "/images/AnnaDeCodorniuBrut.png",
      name: "Codorniu Cuvee Original Brut Ecologico",
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
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-white">
        {/* Hero Section */}
        <div className={`${styles.heroSection} mt-[96px] px-10 w-full mx-4`}>
        <div className={`${styles.heroContainer}`}>
          <div className={styles.heroTextContainer}>
            <h1 className={styles.heroTitle}>
              <span className={styles.line}>You've got the</span>
              <span className={styles.line}>desire, we've got</span>
              <span className={styles.line}>the wine!</span>
            </h1>
          </div>
          <div className={styles.heroImageContainer}>
            <Image
              src="/images/Brands-removebg-preview.png"
              alt="Hero Wine Bottles"
              width={548}
              height={380}
              className={styles.heroImage}
            />
          </div>
        </div>
        </div>
        </div>

    

      

      {/* Wine Grid Section */}
      <div className="bg-[#F7F7F7] mt-5">
      <div style={{ marginTop: "4rem" }} className="container-fluid text-center">
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
