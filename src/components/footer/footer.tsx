import React from "react";
import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <div>
      <div className={`flex flex-row justify-end items-center ${styles.bar}`}>
        <div>Contact us</div>
        <div className={`mx-20`}>Follow Our Social Media</div>
      </div>
      <div className={`flex flex-row justify-between`}>
        <div className={`${styles.leftbox}`}>
          <h3 className={`${styles.left_heading}`}>
            That’s a Toast <br /> is your on-demand chef service.
          </h3>
          <p className={`${styles.left_text}`}>
            We empower our clients to feel confident as party hosts, so they
            don't have to worry about food or logistics, but rather spend
            memorable time with their guests.
          </p>
        </div>
        <div
          className={`${styles.righbox} flex flex-col justify-between items-stretch`}
        >
          <p>Open Monday to Friday 9am - 6pm</p>
          <p>phoenixcatering@gmail.com</p>
          <p>1457 W Southern Ave Mesa Az- 85202</p>
          <p>+ 7913- 662-345</p>
        </div>
      </div>
      <div className={`flex flex-row items-center ${styles.bar}`}>
        <div className={`mx-20 ${styles.trademark}`}>
          © Phoenixcatering . All Rights Reserved, since 2023
        </div>
      </div>
    </div>
  );
};

export default Footer;
