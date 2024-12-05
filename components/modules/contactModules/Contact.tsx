"use client";

import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.left}>
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
            <textarea
              placeholder="Message"
              rows={4}
              className={styles.textarea}
            ></textarea>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <FiPhoneCall size={18} />
              <span>+234 708 104 0124</span>
            </div>
            <div className={styles.infoItem}>
              <MdOutlineEmail size={18} />
              <span>penafortwineryinfo@gmail.com</span>
            </div>
            <div className={styles.infoItem}>
              <IoIosMail size={18} />
              <span>penafortwineryinfo@gmail.com</span>
            </div>
          </div>
        </div>



        {/* Right Section */}
      
        <div className={styles.right}>
        <div className="hidden sm:block bg-[#ba2b27] w-1/2 h-12 rounded-sm mt-2 relative left-[130px]"></div>




      
        <div className={styles.mapContainer}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7928.596406227573!2d3.200082!3d6.483868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b850062b6b525%3A0xb2a78cc8598fcd99!2sPenafort%20Winery!5e0!3m2!1sen!2sng!4v1733317442862!5m2!1sen!2sng"
    width="100%"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Penafort Winery Location"
    className={styles.map}
  />
</div>
<div className="hidden sm:block bg-[#ba2b27] w-1/2 h-12 rounded-sm mt-[-15px] relative left-[130px]"></div>
        </div>
      </div>

      {/* Red Background Section */}
      <div className={styles.redBackground}>
        <img
          src="/images/ZIndex.png"
          alt="Wine Bottles"
          className={styles.contentImages}
        />
        <div>
          <h2 className={styles.contentTitles}>
            We pride in our brand and in our wine.
          </h2>
          <button className={styles.contentButtons}>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
