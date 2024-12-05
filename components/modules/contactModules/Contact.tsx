"use client";

import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <div className={styles.contactPage}>
        <div className={styles.container}>
          {/* Left Section */}
        <div className={`${styles.left} flex flex-col items-center justify-center text-center md:text-left md:items-start p-1`}>
            <h2 className={styles.heading}>
              GET IN <span className={styles.highlight}>TOUCH</span>
            </h2>
            <p className={styles.description}>
              We&apos;re passionate about wine and always eager to connect with
              fellow wine enthusiasts, customers, and partners. Whether you have
              a question about our wines, want to make a special order, or are
              interested in a wine tasting experience, we&apos;re here to help.
            </p>
            <form className={styles.form}>
              <div className={styles.row}>
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className={styles.input}
                />
              </div>
              <input
                type="text"
                placeholder="Contact Name"
                required
                className={styles.input}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className={styles.input}
              />
              <input
                type="email"
                placeholder="E-mail"
                required
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Subject"
                className={styles.input}
              />
              <textarea
                placeholder="Message"
                rows={4}
                className={styles.textarea}
              ></textarea>
              <label className={styles.checkboxContainer}>
                <input type="checkbox" className={styles.checkbox} />
                I am not a robot
              </label>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
            {/* Contact Info */}
            <div className={styles.contactInfo}>
  <div className={styles.infoItem}>
    <FiPhoneCall size={18} />
    <span>Phone: +234 708 104 0124</span>
  </div>
  <div className={styles.infoItem}>
    <MdOutlineEmail size={18} />
    <span>E-MAIL: penafortwineryinfo@gmail.com</span>
  </div>
  <div className={styles.infoItem}>
    <IoIosMail size={18} />
    <span>HELPDESK: penafortwineryinfo@gmail.com</span>
  </div>
</div>

          </div>

          <div className={styles.right}>
  {/* Top Red Rectangle */}
  <div className={styles.topRed}></div>

  {/* Map Container */}
  <div className={styles.mapContainer}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2981992330965!2d3.1975067746299097!3d6.483868493508064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b850062b6b525%3A0xb2a78cc8598fcd99!2sPenafort%20Winery!5e0!3m2!1sen!2sng!4v1732964897494!5m2!1sen!2sng"
      className={styles.map}
      loading="lazy"
      allowFullScreen
      title="Penafort Winery Location"
    ></iframe>
  </div>

  {/* Bottom Red Rectangle */}
  <div className={styles.bottomRed}></div>
</div>


  {/* Map Container */}
<div className="block md:hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2981992330965!2d3.1975067746299097!3d6.483868493508064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b850062b6b525%3A0xb2a78cc8598fcd99!2sPenafort%20Winery!5e0!3m2!1sen!2sng!4v1732964897494!5m2!1sen!2sng"
    className="w-full h-96"
    loading="lazy"
    allowFullScreen
    title="Penafort Winery Location"
  ></iframe>
</div>



        </div>
      </div>

     
     
<div className={styles.containers}>
 
  <div className={styles.aquaBackground}>
  
    <div className={styles.redBackground}>
     
      <div className={styles.imageContainers}>
        <img
          src="/images/ZIndex.png"
          alt="Wine Bottles"
          className={styles.contentImages}
        />
      </div>

      {/* Text Container */}
      <div className={styles.textContainers}>
        <h2 className={styles.contentTitles}>
          we pride in our brand and in our wine.
        </h2>
        <button className={styles.contentButtons}>Order Now</button>
      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default Contact; 