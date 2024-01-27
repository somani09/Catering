import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import mains from "../../../public/svg/mains.svg";
import dessert from "../../../public/svg/dessert.svg";
import free from "../../../public/svg/free-form.svg";
import veg from "../../../public/svg/vegeterian.svg";
const Dishes = () => {
  return (
    <div className={`w-5/6 flex flex-col ${styles.dishes} mb-20`}>
      <div className={`flex flex-row justify-between items-center px-40 mt-8`}>
        <div className={`${styles.bar}`}></div>
        <div className={`section-title`}>Dishes</div>
        <div className={`${styles.bar}`}></div>
      </div>
      <div
        className={`w-full flex flex-row justify-center mt-20 ${styles.dish_container}`}
      >
        <div
          className={` flex items-center justify-center  h-64 w-64 md:h-64 md:w-64 relative ${styles.dish}`}
        >
          <Image src={mains} alt="Your SVG" objectFit="contain" />
          <p
            className={`flex justify-center items-center absolute  ${styles.dish_name}`}
          >
            Mains
          </p>
        </div>
        <div
          className={` flex items-center justify-center  h-64 w-64 md:h-64 md:w-64 relative ${styles.dish}`}
        >
          <Image src={dessert} alt="Your SVG" objectFit="contain" />
          <p
            className={`flex justify-center items-center absolute  ${styles.dish_name}`}
          >
            Dessert
          </p>
        </div>
        <div
          className={` flex items-center justify-center  h-64 w-64 md:h-64 md:w-64 relative ${styles.dish}`}
        >
          <Image src={free} alt="Your SVG" objectFit="contain" />
          <p
            className={`flex justify-center items-center absolute  ${styles.dish_name}`}
          >
            Free-Form
          </p>
        </div>
        <div
          className={` flex items-center justify-center  h-64 w-64 md:h-64 md:w-64 relative ${styles.dish}`}
        >
          <Image src={veg} alt="Your SVG" objectFit="contain" />
          <p
            className={`flex justify-center items-center absolute  ${styles.dish_name}`}
          >
            Vegitarian
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dishes;
