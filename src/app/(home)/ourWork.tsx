import React from "react";
import styles from "./home.module.scss";
import food1 from "../../../public/svg/food1.svg";
import food2 from "../../../public/svg/food2.svg";
import food3 from "../../../public/svg/food3.svg";
import food4 from "../../../public/svg/food4.svg";
import food5 from "../../../public/svg/food5.svg";
import food6 from "../../../public/svg/food6.svg";
import food7 from "../../../public/svg/food7.svg";
import Image from "next/image";
const OurWork = () => {
  const images = [food1, food2, food3, food4, food5, food6, food7];
  return (
    <div
      className={`w-full flex flex-col justify-between items-center relative  mb-20 ${styles.our_work}`}
    >
      <div className={`w-5/6 `}>
        <div
          className={`flex flex-row justify-between items-center px-40 mt-8`}
        >
          <div className={`${styles.bar}`}></div>
          <div className={`${styles.title} section-title`}>
            Some of our work
          </div>
          <div className={`${styles.bar}`}></div>
        </div>
      </div>
      <div className={`${styles.work_area} flex flex-wrap justify-center`}>
        {images.map((img, index) => (
          <div className={` flex items-center ${styles.food_image}`}>
            <Image src={img} alt="Your SVG" objectFit="contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
