import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import background from "../../../public/svg/background_food.svg";
import ReviewBox from "./reviewBox";

const Reviews = () => {
  return (
    <div
      className={`w-full flex flex-col justify-between items-center relative  mb-20`}
    >
      <div className={`w-5/6 ${styles.reviews}`}>
        <div
          className={`flex flex-row justify-between items-center px-40 mt-8`}
        >
          <div className={`${styles.bar}`}></div>
          <div className={`${styles.title} section-title`}>
            What people think about us
          </div>
          <div className={`${styles.bar}`}></div>
        </div>
      </div>
      <div
        className={`relative w-full flex justify-center items-center ${styles.reviews_background_container} `}
      >
        <div className={`${styles.reviews_background} w-full`}>
          <Image
            src={background}
            alt="Your SVG"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {Array(4).fill(
          <ReviewBox
            name="blabla"
            review="️Chef Phoenix is our favorite healthy food delivery option. Not only is the food healthy but it’s also delicious!"
            stars={3}
          />
        )}
      </div>
    </div>
  );
};

export default Reviews;
