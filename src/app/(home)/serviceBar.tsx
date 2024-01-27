import React from "react";
import styles from "./home.module.scss";
import parties from "../../../public/svg/parties_and_events.svg";
import breakfast from "../../../public/svg/breakfast.svg";
import weddings from "../../../public/svg/wedding.svg";
import more from "../../../public/svg/more.svg";
import chef from "../../../public/svg/chef.svg";
import Image from "next/image";

const ServiceBar = () => {
  return (
    <div className={`w-5/6 flex flex-col  ${styles.serviceBar}`}>
      <div className={`w-full ${styles.services}`}>
        <div
          className={`flex flex-row justify-between items-center px-40 mt-8`}
        >
          <div className={`${styles.bar}`}></div>
          <div className={`section-title`}>What we Offer</div>
          <div className={`${styles.bar}`}></div>
        </div>
        <div className={`mt-8 flex flex-row justify-between`}>
          <div className={`w-5/6 flex flex-col justify-center items-center `}>
            <div className={` flex items-center h-20 w-20 md:h-20 md:w-20`}>
              <Image src={parties} alt="Your SVG" objectFit="contain" />
            </div>

            <p className={` mt-5`}>Parties and events</p>
          </div>
          <div className={`w-5/6 flex flex-col justify-center items-center `}>
            <div className={` flex items-center h-20 w-20 md:h-20 md:w-20`}>
              <Image src={breakfast} alt="Your SVG" objectFit="contain" />
            </div>

            <p className={` mt-5`}>Breakfast and lunch for the kids</p>
          </div>
          <div className={`w-5/6 flex flex-col justify-center items-center `}>
            <div className={` flex items-center h-20 w-20 md:h-20 md:w-20`}>
              <Image src={weddings} alt="Your SVG" objectFit="contain" />
            </div>

            <p className={` mt-5`}>Weddings</p>
          </div>
          <div className={`w-5/6 flex flex-col justify-center items-center `}>
            <div className={` flex items-center h-20 w-20 md:h-20 md:w-20`}>
              <Image src={more} alt="Your SVG" objectFit="contain" />
            </div>

            <p className={` mt-5`}>and more</p>
          </div>
        </div>
      </div>

      {/*LINKEBREAk  */}

      <div
        className={`flex flex-row justify-between px-28 mt-32 items-center `}
      >
        <p className={` ${styles.textArea}`}>
          We offer a wide range of catering services, from drop-off to
          full-service catering, launch parties to weddings. Browse our sample
          menus for mouth-watering ideas for your next event.
        </p>
        <div className={`relative flex flex-col justify-center items-center`}>
          <div
            className={`flex items-center -top-9 relative ${styles.chef_image}`}
          >
            <Image src={chef} alt="Your SVG" objectFit="contain"></Image>
          </div>
          <button className={` ${styles.book_now} -top-9 relative`}>
            hello
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBar;
