"use client";
import Image from "next/image";
import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutbg}>
      <section className={styles.aboutSection}>
        {/* Gradient Background with About Us Image */}
        <div className={styles.imageSection}>
          <div className={styles.gradientOverlay}>
            <h2 className={styles.imageHeading}>ABOUT US - </h2>
          </div>
        </div>

        {/* Text Content */}
        <div className={styles.container}>
          <h2 className={styles.head}>ABOUT US</h2>
          <div className={styles.textcontainer}>
            <p className={styles.paragraph}>
              At Penafort winery, we believe every sip should tell a story and
              every bottle should spark joy. Whether you&apos;re celebrating
              milestones, unwinding after a long day, or just treating yourself,
              we craft the perfect wine for every occasion.
            </p>
            <p className={styles.paragraph}>
              From bold reds to crisp whites and bubbly sparkles, our globally
              curated collection brings the world&apos;s finest vineyards to
              your doorstep—no passport required. We&apos;re all about making
              wine accessible, fun, and downright delicious.
            </p>
            <p className={styles.paragraph}>
              Life&apos;s too short for bad wine, so let&apos;s make every
              moment worth savoring. Cheers to good vibes, great wine, and
              unforgettable memories with penafort!
            </p>
          </div>

          <h2 className={styles.heading}>OUR HISTORY</h2>
          <div className={styles.textcontainer}>
            <p className={styles.paragraph}>
              Penafort Winery started with a passion for bringing the
              world&apos;s finest wines to your table. As a trusted name in the
              distribution of exotic wines, our journey began with a simple
              mission: to make luxury and exceptional taste accessible to wine
              lovers everywhere.
            </p>
            <p className={styles.paragraph}>
              Over the years, we&apos;ve built strong relationships with
              world-class vineyards, handpicking only the most exquisite
              selections to share with our customers. At Penafort Winery, we
              don&apos;t just deliver wine—we deliver an experience of elegance,
              sophistication, and unparalleled quality.
            </p>
            <p className={styles.paragraph}>
              At Penafort Winery, we don&apos;t just deliver wine—we deliver an
              experience of elegance, sophistication, and unparalleled quality.
              Let us take you on a journey of refined taste, one sip at a time.
              Every Bottle Tells A Story ..
            </p>
          </div>
        </div>

        {/* Final Section */}
        <div className={styles.finalSection}>
          <div className={styles.overlayContent}>
            <h3 className={styles.finalHeading}>
              <span>Where Heritage</span>
              <span>Flows and Stories </span>
              <span>Grow.</span>
            </h3>
            <button className={styles.orderButton}>Order Now</button>
          </div>
          <div className={`${styles.imageWrapper} bg-[#F5EBDA]`}>
            <Image
              src="/images/penafortbg.jpeg" // Replace this with your actual image path
              alt="Wine glass with grapes"
              className={styles.finalImage} // Custom styling for additional control
              width={1400} // Adjust to fit your layout
              height={150} // Reduced height
            />
          </div>
        
        </div>
      </section>
    </div>
  );
};

export default About;
